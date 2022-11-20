import clientPromise from "./mongodb";
import jwt from "jsonwebtoken";

const createToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "10d",
    });
};

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
    } else {
        const token = createToken(user);
        await db.collection("users").updateOne(
            { _id: user._id },
            { $set: { token: token } }
        );
        res.setHeader("Set-Cookie", `token=${token}; path=/; httpOnly`);
        res.status(200).json({ message: "Logged in successfully", user: user, token: token });
        client.close();
    }
}
