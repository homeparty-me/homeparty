import clientPromise from "./mongodb";

async function handler(req, res) {
    const { username, email, password } = req.body;
    const client = await clientPromise;
    const db = client.db("homeparty");
    // Find user in database, depending on if email or username was provided
    const user = await db.collection("users").findOne({
        [isEmail ? "email" : "username"]: email,
    });

    if (!user) {
        await db.collection("users").insertOne({
            username: username,
            email: email,
            password: password,
        });
        client.close();
        return;
    } else {
        res.status(400).json({ message: "User already exists", email: email});
        client.close();
        return;
    }
}
