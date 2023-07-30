import Inventory from "../models/InventoryModel.js";

export const getInventori = async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.json(inventory);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getInventoryById = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);
        res.json(inventory);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveInventory = async (req, res) => {
    const inventory = new Inventory(req.body);
    try {
        const insertedInventory = await inventory.save();
        res.status(201).json(insertedInventory);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateInventory = async (req, res) => {
    try {
        const updatedinventory = await Inventory.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedinventory);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteInventory = async (req, res) => {
    try {
        const deletedInventory = await Inventory.deleteOne({_id:req.params.id});
        res.status(200).json(deletedInventory);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}