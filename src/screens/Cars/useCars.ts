import { useEffect, useState } from "react";

import axios from "axios";
import qs from "qs";

import { CarData } from "../Search/Types";
import { BODY, BRANDS, FUEL, MODELS } from "./constants";
import { Car, SearchParams } from "./Types";

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
  );
};

export function useCars(carData: CarData) {
  const [cars, setCars] = useState<Car[] | null>(null);

  const toggleVisibility = (item: Car) => {
    setCars(
      (prevState: Car[] | null) =>
        prevState?.map((car: Car) =>
          car.id === item.id ? { ...car, isVisible: !car.isVisible } : car
        ) || null
    );
  };

  useEffect(() => {
    if (carData) {
      setCars(null);

      const sendRequest = async () => {
        const body: SearchParams = {
          brand: BRANDS[carData.brand] || carData.brand.toLowerCase(),
          modelId: carData.brand.toLowerCase() + formatModel(carData.model),
          issueYearFrom: carData.date - 1,
          issueYearTo: carData.date + 1,
          period: 7,
          deleted: true,
          sorting: 2,
          page: 0,
        };

        if (carData.capacity) {
          body.capacityFrom = (carData.capacity / 1000).toFixed(1);
          body.capacityTo = (carData.capacity / 1000).toFixed(1);
        }

        if (carData.fuel) {
          body.engines = [FUEL[carData.fuel]];
        }

        if (carData.body) {
          body.bodyTypes = [BODY[carData.body]];
        }

        const response = await axios({
          method: "post",
          url: "https://hotcar.by/search",
          data: qs.stringify(body),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        });

        setCars(
          response.data.map((item: Car) => ({ ...item, isVisible: true }))
        );
      };

      sendRequest();
    }
  }, [carData]);

  return { cars, toggleVisibility };
}
