import mongoose, { Schema } from "mongoose";

const petSchema = new mongoose.Schema(
  {
    pet_name: String,
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "user", // this should  refer to user model
    },
    species: {
      type: String,
      required: true,
    },
    breed: String,
    age: Number,
    sex: String,
    Vaccination_Status: Boolean,
    last_Vaccination_date: Date,
    health_status: String,
  },
  {
    timestamps: true,
  }
);

petSchema.statics.isPetExists = async (id) => {
  return await petModel.findById(id);
};
export const petModel = mongoose.model("pet", petSchema);
