import { useEffect, useState } from "react";

export function useLink() {
  const [link, setLink] = useState("");
  const [carData, setCarData] = useState(null);

  useEffect(() => {
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

      setCarData({ fuel, year, body, volume, brand, model });
    }
  }, [link]);

  return {
    carData,
    link,
    setLink,
  };
}
