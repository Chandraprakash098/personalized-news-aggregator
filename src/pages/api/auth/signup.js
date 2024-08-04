import { hash } from "bcryptjs";
import { connectToDatabase } from "../../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name,email, password,address } = req.body;

    const { db } = await connectToDatabase();

    const user = await db.collection("users").findOne({ email });

    if (user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await hash(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      address,
    });

    res.status(201).json({ message: "User created" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
