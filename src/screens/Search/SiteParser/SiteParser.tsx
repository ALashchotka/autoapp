import React, { useEffect } from "react";

import { Alert } from "react-native";
import WebView from "react-native-webview";

import { getTotalPrice } from "../../../utils/getTotalPrice";
import { CarData } from "../Types";

const INJECTED_JAVASCRIPT = `(function() {
  let increment = 0;

  function getData() {
    try {
      const titleElement = document.getElementsByClassName('title')[0]
      const title = titleElement.innerText;

      const priceElement = document.getElementsByClassName('export-price-value')[0]
        || document.getElementsByClassName('price-value')[0];
      const price = priceElement.innerText.split(' ').join('').slice(0, -1);
    
      const bodyElement = document.getElementsByClassName('field_body_type_id')[0];
      const body = bodyElement.innerText;
    
      const dateElement = document.getElementsByClassName('field_make_date')[0];
      const date = dateElement.innerText;
    
      const gearElement = document.getElementsByClassName('field_gearbox_id')[0];
      const gear = gearElement.innerText;
    
      const fuelElement = document.getElementsByClassName('field_fuel_id')[0];
      const fuel = fuelElement.innerText;

      const capacityElement = document.getElementsByClassName('field_engine')[0];
      const capacity = capacityElement.innerText.split('cm')[0].trim()

      const data = {
        body,
        capacity,
        date,
        fuel,
        gear,
        price,
        title,
      }

      window.ReactNativeWebView.postMessage(JSON.stringify(data));
    } catch (error) {
      if (increment < 5) {
        increment += 1;
        setTimeout(() => getData(), 1500);
      } else {
        window.ReactNativeWebView.postMessage("error");
      }
    }
  }

  getData();
})();`;

const parseCarData = (data: string): CarData => {
  const carData = JSON.parse(data);

  const parsedCarData = {
    ...carData,
    brand: carData.title.split(" ")[0],
    model: carData.title.split(" ")[1],
    capacity: parseInt(carData.capacity, 10),
    date: parseInt(carData.date.split("-")[0], 10),
    price: parseInt(carData.price, 10),
  };

  parsedCarData.totalPrice = getTotalPrice({
    price: parsedCarData.price,
    capacity: parsedCarData.capacity,
    year: parsedCarData.date,
  });

  return parsedCarData;
};

export function SiteParser({
  link,
  setCarData,
}: {
  link: string;
  setCarData: (carData: CarData | null) => void;
}) {
  const onWebViewMessage = ({
    nativeEvent: { data },
  }: {
    nativeEvent: { data: string };
  }) => {
    if (data === "error") {
      Alert.alert("Ошибка", "Не получилось распарсить ссылку");
    } else {
      setCarData(parseCarData(data));
    }
  };

  useEffect(() => {
    if (!link) {
      setCarData(null);
    }
  }, [link]);

  if (link) {
    return (
      <WebView
        style={{ height: 0, width: 0 }}
        source={{ uri: link }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={onWebViewMessage}
      />
    );
  }

  return null;
}
