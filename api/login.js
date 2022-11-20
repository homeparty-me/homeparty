import clientPromise from "./mongodb";

async function handler(req, res) {
    const { email, password } = req.body;
    const isEmail = email.includes("@");
    const client = await clientPromise;
    const db = client.db("homeparty");
    const user = await db.collection("users").findOne({
        [isEmail ? "email" : "username"]: email,
        password: password,
    });

    if (!user) {
        res.status(400).json({ message: "Invalid Credentials" });
        client.close();
        return;
    } else {
        res.status(200).json({ message: "Logged in successfully", user: user });
        client.close();
        return;
    }
}
