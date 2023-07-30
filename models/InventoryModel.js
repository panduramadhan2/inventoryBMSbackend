import mongoose from "mongoose";

const Inventory = mongoose.Schema({
  noAsset: {
    type: String,
    required: true,
  },
  merk: {
    type: String,
  },
  type: {
    type: String,
  },
  serialNumber: {
    type: String,
  },
  pengguna: {
    type: String,
  },
  lokasiTerbaru: {
    type: String,
  },
  kondisi: {
    type: String,
    required: true,
  },
  mouse: {
    type: String,
  },
  mousepad: {
    type: String,
  },
  headset: {
    type: String,
  },
  keterangan: {
    type: String,
  },
});

export default mongoose.model("Inventory", Inventory);
