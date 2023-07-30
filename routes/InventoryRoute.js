import express from "express";
import {
  getInventori,
  getInventoryById,
  saveInventory,
  updateInventory,
  deleteInventory
} from "../controllers/InventoryController.js";
const router = express.Router();

router.get("/inventories", getInventori);
router.get("/inventories/:id", getInventoryById);
router.post("/inventories", saveInventory);
router.patch("/inventories/:id", updateInventory);
router.delete("/inventories/:id", deleteInventory);

export default router;
