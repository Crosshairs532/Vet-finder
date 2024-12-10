import { petModel } from "./pet.model.js";

const petCreateDB = async (petData) => {
  const pet = await petModel.create(petData);
  return pet;
};
const petUpdateDb = async (id, petData) => {
  // check is pet exists
  const isExists = await petModel.isPetExists(id);

  // update the document. upsert

  const updated = await petModel.findByIdAndUpdate(id, petData, {
    new: true,
    upsert: true,
    lean: true,
  });

  return updated;
  // .populate({
  //   path: "owner_id",
  // }); // this will also show the user who created it
};

export const petServices = {
  petCreateDB,
  petUpdateDb,
};
