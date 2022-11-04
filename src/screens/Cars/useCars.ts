import { useEffect, useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import qs from "qs";
import { Alert } from "react-native";

import { CarData } from "../Search/Types";
import { Car, SearchParams } from "./Types";

const transformCars = (carData: CarData, cars: Car[]) => {
  if (carData.brand === "Volvo") {
    return cars.filter(({ link }) =>
      link.toLowerCase().includes(carData.model.toLowerCase())
    );
  }

  return cars;
};

export function useCars() {
  const route = useRoute();
  const navigation = useNavigation();

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
    if (route) {
      setCars(null);

      const sendRequest = async () => {
        try {
          const body: SearchParams = {
            ...route.params.filters,
            deleted: true,
            sorting: 2,
            page: 0,
          };

          const response = await axios({
            method: "post",
            url: "https://hotcar.by/search",
            data: qs.stringify(body),
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          });

          setCars(
            transformCars(
              route.params.carData,
              response.data.map((item: Car) => ({ ...item, isVisible: true }))
            )
          );
        } catch (error) {
          Alert.alert(
            "Ошибка",
            "Ошибка запроса машин в продаже, попробуйте ещё раз через пару минут"
          );

          navigation.goBack();
        }
      };

      sendRequest();
    }
  }, [route]);

  return { cars, toggleVisibility };
}
