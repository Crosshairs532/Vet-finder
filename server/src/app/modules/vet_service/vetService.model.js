import mongoose from "mongoose";

const vetServiceSchema = new mongoose.Schema({
  vet_id: { type: mongoose.Schema.Types.ObjectId, required: true }, // ref: "Vet" : add it when you are done with creating vet
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Service",
  },
  price: { type: Number, required: true },
  days: { type: [String] },
  time: { type: String },
});

const VetService = mongoose.model("VetService", vetServiceSchema);
export default VetService;
