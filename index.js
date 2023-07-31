import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inventory from "./routes/InventoryRoute.js";
import dotenv from "dotenv";
import admin from 'firebase-admin';
// import { serviceAccount } from "./configManager.js";
const { serviceAccount } = require("./configManager.js");

dotenv.config();
const app = express();
const connectionStr = process.env.MONGO_CONNECTION;

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'YOUR_FIREBASE_DATABASE_URL',
});

async function setCustomClaims(email, claims) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, claims);
    return true;
  } catch (error) {
    console.error('Error setting custom claims:', error);
    return false;
  }
}

// Set custom claims for the admin and user roles
// Replace 'pandu@gmail.com' and 'bambang@gmail.com' with the actual email addresses
setCustomClaims('pandu@gmail.com', { role: 'admin' });
setCustomClaims('bambang@gmail.com', { role: 'user' });

app.use(cors({
  origin: "https://inventorybms.onrender.com",
  credentials: true,
}));


app.use(express.json());
app.use(Inventory);

app.listen(5000, () => console.log("Server up and running..."));
