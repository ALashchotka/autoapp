import { BODY, BRANDS, FUEL, MODELS } from "../screens/Cars/constants";
import { CarData } from "../screens/Search/Types";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatModel = (model: string) => {
  return (
    MODELS[model] ||
    model
      .split(" ")
      .map((item) => capitalize(item.toLowerCase()))
      .join("")
      .split("-")
      .map((item) => capitalize(item))
      .join("Minus")
      .split("+")
      .map((item) => capitalize(item))
      .join("Plus")
  );
};

export const transformCarData = (carData: CarData | null) => {
  return {
    bodyTypes: carData?.body ? [BODY[carData.body]] : undefined,
    brand:
      carData?.brand && (BRANDS[carData.brand] || carData.brand.toLowerCase()),
    capacityFrom: carData?.capacity
      ? (carData.capacity / 1000).toFixed(1)
      : undefined,
    capacityTo: carData?.capacity
      ? (carData.capacity / 1000).toFixed(1)
      : undefined,
    engines: carData?.fuel ? [FUEL[carData.fuel]] : undefined,
    modelId:
      carData?.brand && carData?.model
        ? carData.brand.toLowerCase() + formatModel(carData.model)
        : null,
    issueYearFrom: carData?.date ? carData.date - 1 : null,
    issueYearTo: carData?.date ? carData.date + 1 : null,
    period: 7,
  };
};
