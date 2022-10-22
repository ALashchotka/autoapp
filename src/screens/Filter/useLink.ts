import { useEffect, useState } from "react";

import axios from "axios";
import qs from "qs";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function useLink() {
  const [link, setLink] = useState("");

  const [data, setData] = useState(null);
  const [cars, setCars] = useState(null);

  useEffect(() => {
    setCars(null);

    if (link.includes("autoplius") && link.includes(".html")) {
      let splittedLink: string | string[] = link.split("/");
      splittedLink = splittedLink[splittedLink.length - 1]
        .split(".")[0]
        .split("-");

      const fuel = splittedLink[splittedLink.length - 2];
      const year = splittedLink[splittedLink.length - 3];
      const body = splittedLink[splittedLink.length - 4];
      const volume =
        splittedLink[splittedLink.length - 7] +
        "." +
        splittedLink[splittedLink.length - 6];
      const brand = splittedLink[0];
      const model = splittedLink[1];

      setData({ fuel, year, body, volume, brand, model });
    }
  }, [link]);

  useEffect(() => {
    if (data) {
      const sendRequest = async () => {
        const body = {
          brand: data.brand,
          modelId: data.brand + capitalizeFirstLetter(data.model),
          issueYearFrom: data.year,
          issueYearTo: data.year,
          capacityFrom: data.volume,
          capacityTo: data.volume,
          // engines: [data.fuel],
          // bodyTypes: [data.body],
          period: 7,
          deleted: true,
          sorting: 2,
          page: 0,
        };

        const response = await axios({
          method: "post",
          url: " https://hotcar.by/search",
          data: qs.stringify(body),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        });

        setCars(response.data);
      };

      sendRequest();
    }
  }, [data]);

  return {
    cars,
    data,
    link,
    setLink,
  };
}
