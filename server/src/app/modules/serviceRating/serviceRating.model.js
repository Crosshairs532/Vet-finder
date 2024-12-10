import mongoose from "mongoose";

const serviceRatingSchema = new mongoose.Schema({
  vet_id: { type: mongoose.Schema.Types.ObjectId, required: true }, // ref: "Vet"
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Service",
  },
  service_rating: { type: Number, required: true, min: 0, max: 5 },
  description: { type: String },
});

const ServiceRating = mongoose.model("ServiceRating", serviceRatingSchema);
export default ServiceRating;
