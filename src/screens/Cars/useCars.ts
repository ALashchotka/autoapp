import { useEffect, useState } from "react";

import axios from "axios";
import qs from "qs";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
  const [cars, setCars] = useState<object[] | null>(null);

  useEffect(() => {
    if (carData) {
      const sendRequest = async () => {
        const body = {
          brand: carData.brand,
          modelId: carData.brand + capitalizeFirstLetter(carData.model),
          issueYearFrom: carData.year,
          issueYearTo: carData.year,
          capacityFrom: carData.volume,
          capacityTo: carData.volume,
          engines: [FUEL[carData.fuel]],
          bodyTypes: [BODY[carData.body]],
          period: 7,
          deleted: true,
          sorting: 2,
          page: 0,
        };

        const response = await axios({
          method: "post",
          url: "https://hotcar.by/search",
          data: qs.stringify(body),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        });

        setCars(response.data);
      };

      sendRequest();
    }
  }, [carData]);

  return { cars };
}
