import dotenv from "dotenv";
import { MongoClient } from "mongodb";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
  await mongoClient.connect();
  console.log("MongoDB connected");
} catch (err) {
  console.log(err);
}
const db = mongoClient.db("trackit");

export default db;
