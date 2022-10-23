import { useEffect, useState } from "react";

import axios from "axios";
import qs from "qs";

import { useDebounce } from "../../hooks/useDebounce";
import { Car } from "./Types";

function formatModel(string: string) {
  const newString = string.split("/").join("Slash");

  return newString.charAt(0).toUpperCase() + newString.slice(1);
}

const FUEL = {
  petrol: "benzin",
  dizel: "diesel",
};

const BODY = {
  // седан
  sedanas: "sedan",
  sedan: "sedan",
  sedans: "sedan",

  // универсал
  universal: "wagon",
  universalas: "wagon",
  wagon: "wagon",

  // хэтчбек
  hecbekas: "hatchback",
  hetchbek: "hatchback",
  hatchback: "hatchback",
  hecbeks: "hatchback",

  // минивэн
  miniven: "minivan",
  vienaturis: "minivan",
  "mpv-minivan": "minivan",
  minivens: "minivan",

  // внедорожник
  visureigis: "suv",
  vnedorozhnik: "suv",
  "suv-off-road": "suv",

  // "": "coupe",
  // "": "cabriolet",
  // "": "minibus",
  // "": "van",
  // "": "pickup",
  // "": "liftback",
  // "": "limousine",
};

export function useCars(carData: any) {
  const [cars, setCars] = useState<Car[] | null>(null);
  const [settings, setSettings] = useState({
    yearFrom: carData.year - 1,
    yearTo: carData.year + 1,
  });

  const debouncedSettings = useDebounce(settings, 1500);

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
        const body = {
          brand: carData.brand,
          modelId: carData.brand + formatModel(carData.model),
          issueYearFrom: debouncedSettings.yearFrom,
          issueYearTo: debouncedSettings.yearTo,
          period: 7,
          deleted: true,
          sorting: 2,
          page: 0,
        };

        if (carData.volume) {
          body.capacityFrom = (carData.volume / 1000).toFixed(1);
          body.capacityTo = (carData.volume / 1000).toFixed(1);
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
  }, [carData, debouncedSettings]);

  return { cars, settings, setSettings, toggleVisibility };
}
