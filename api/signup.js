import { useEffect } from "react";
import clientPromise from "./mongodb";

const createToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "10d",
    });
};

async function handler(req, res) {
    const { username, email, password } = req.body;
    const client = await clientPromise;
    const db = client.db("homeparty");
    const isEmail = email.includes("@");
    const user = await db.collection("users").findOne({
        [isEmail ? "email" : "username"]: email,
    });

    if (!user) {
        await db.collection("users").insertOne({
            username: username,
            email: email,
            password: password,
            token: createToken({ username, email, password }),
        });
        res.status(200).json({ message: "User created" });
        client.close();
        return;
    } else {
        res.status(400).json({ message: "User already exists", email: email});
        client.close();
        return;
    }
}
