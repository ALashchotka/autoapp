import { useEffect, useState } from "react";

import { Keyboard } from "react-native";

import { useCalculator } from "../../hooks/useCalculator";

const formatModel = (brand: string, model: string) => {
  if (brand === "bmw") {
    switch (model[0]) {
      case "1":
        return "1Series";
      case "2":
        return "2Series";
      case "3":
        return "3Series";
      case "4":
        return "4Series";
      case "5":
        return "5Series";
      case "6":
        return "6Series";
      case "7":
        return "7Series";
      case "8":
        return "8Series";
    }
  }

  if (brand === "peugeot") {
    switch (model) {
      case "205":
        return "205/205GTI";
      case "208":
        return "208/208GTI";
      case "308":
        return "308/308GTI";
    }
  }

  if (brand === "opel") {
    switch (model) {
      case "astra":
        return "Astra/AstraOPC";
      case "insignia":
        return "Insignia/InsigniaOPS";
      case "meriva":
        return "Meriva/MerivaOPS";
      case "vectra":
        return "Vectra/VectraOPC";
      case "zafira":
        return "Zafira/ZafiraOPC";
    }
  }

  if (brand === "renault") {
    switch (model) {
      case "clio":
        return "Clio/ClioRS";
      case "megane":
        return "Megane/MeganeRS";
      case "sandero":
        return "Sandero/SanderoRS";
    }
  }

  return model;
};

export function useLink() {
  const [link, setLink] = useState("");
  const [carData, setCarData] = useState<object | null>(null);

  const total = useCalculator(carData || {});

  const onLinkChange = (value: string) => {
    if (value.includes("autoplius") && value.includes("html")) {
      if (value.includes("m.autoplius.lt")) {
        setLink(value);
      } else {
        setLink(value.split("autoplius.lt").join("m.autoplius.lt"));
      }
    } else {
      setLink("");
    }
  };

  useEffect(() => {
    if (link) {
      Keyboard.dismiss();

      let splittedLink: string | string[] = link.split(".html")[0].split("/");
      splittedLink = splittedLink[splittedLink.length - 1]
        .split(".")[0]
        .split("-");

      const fuel = splittedLink[splittedLink.length - 2];
      const year = parseInt(splittedLink[splittedLink.length - 3], 10);
      const body = splittedLink[splittedLink.length - 4];
      const volume =
        parseFloat(
          splittedLink[splittedLink.length - 7] +
            "." +
            splittedLink[splittedLink.length - 6]
        ) * 1000;
      const brand = splittedLink[0];
      const model = formatModel(brand, splittedLink[1]);

      setCarData({ fuel, year, body, volume, brand, model });
    }
  }, [link]);

  useEffect(() => {
    if (!link) {
      setCarData(null);
    }
  }, [link]);

  return {
    carData: carData
      ? {
          ...carData,
          total,
        }
      : carData,
    link,
    setCarData,
    onLinkChange,
  };
}
