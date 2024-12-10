import Service from "./service.model.js";

const serviceCreateDB = async (serviceData) => {
  const service = await Service.create(serviceData);
  return service;
};
const getServicesDB = async () => {
  const service = await Service.find().select("-__v");
  return service;
};
export const serviceService = {
  serviceCreateDB,
  getServicesDB,
};
