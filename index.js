import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inventory from "./routes/InventoryRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const connectionStr = process.env.MONGO_CONNECTION;
// mongoose.connect("mongodb://127.0.0.1:27017/inventory_db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

// app.use(cors());
// app.use(cors({ origin: "http://127.0.0.1:5000/", credentials: true }));
app.use(
  cors({
    // origin: "http://127.0.0.1:5000/",
    origin: "*",
    // credentials: true,
    // withCredentials: false,
    // optionSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(Inventory);

app.listen(5000, () => console.log("Server up and running..."));
