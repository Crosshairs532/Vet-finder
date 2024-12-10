import VetService from "./vetService.model.js";

const vetServiceDB = async (vetServiceData) => {
  // {
  //     vet_id: "64acdb3c5f3d8b21c8a1e654",
  //     service_id: newService._id,
  //     price: 45,
  //     days: "Monday, Wednesday, Friday",
  //     time: "10 AM - 2 PM",
  //   }

  const vetService = await VetService.create(vetServiceData);
  return vetService;
};

export const vetService = {
  vetServiceDB,
};
