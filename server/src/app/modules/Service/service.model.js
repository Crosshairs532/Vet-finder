import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    service_name: { type: String, required: true },
    service_description: { type: String },
    cost: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
