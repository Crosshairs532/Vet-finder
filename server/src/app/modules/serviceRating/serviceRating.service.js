import ServiceRating from "./serviceRating.model.js";

const serviceRatingCreateDB = async (serviceRatingData) => {
  const serviceRating = await ServiceRating.create(serviceRatingData);
  return serviceRating;
};

export const serviceRatingService = {
  serviceRatingCreateDB,
};
