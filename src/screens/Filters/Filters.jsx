import React, { useState } from "react";

import isEqual from "lodash.isequal";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";
import { BODY } from "../Cars/constants";
import { PERIODS } from "./constants";
import useStyles from "./styles";

export function Filters({ navigation, route }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const [filters, setFilters] = useState(route.params.filters);

  const isSubmitButtonVisible = !isEqual(filters, route.params.filters);

  const searchedCarData = route.params.carData;

  const changePeriod = (period) => {
    setFilters((prevState) => ({
      ...prevState,
      period,
    }));
  };

  const setBodyType = (bodyType) => {
    setFilters((prevState) => ({
      ...prevState,
      bodyTypes: bodyType ? [bodyType] : undefined,
    }));
  };

  const onSubmit = () => {
    navigation.navigate({
      name: "Cars",
      params: { filters },
      merge: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* По году выпуска */}

        <View style={styles.filterContainer}>
          <Text style={styles.title}>Показывать объявления за:</Text>

          <View style={styles.itemsContainer}>
            {Object.keys(PERIODS).map((periodKey) => {
              const period = parseInt(periodKey, 10);
              const isSelected = filters.period === period;

              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[
                    styles.itemContainer,
                    isSelected && styles.itemContainerSelected,
                  ]}
                  onPress={() => changePeriod(period)}
                  key={`period_${periodKey}`}
                >
                  <Text
                    style={[
                      styles.itemText,
                      isSelected && styles.itemTextSelected,
                    ]}
                  >
                    {PERIODS[periodKey]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.title}>Кузов:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                !filters.bodyTypes && styles.itemContainerSelected,
              ]}
              onPress={() => setBodyType(null)}
            >
              <Text
                style={[
                  styles.itemText,
                  !filters.bodyTypes && styles.itemTextSelected,
                ]}
              >
                Не важно
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                !!filters.bodyTypes && styles.itemContainerSelected,
              ]}
              onPress={() => setBodyType(BODY[searchedCarData.body])}
            >
              <Text
                style={[
                  styles.itemText,
                  !!filters.bodyTypes && styles.itemTextSelected,
                ]}
              >
                {searchedCarData.body}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.filterContainer}>
          <Text style={styles.title}>Объём:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Не важно
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                1.6
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={styles.filterContainer}>
          <Text style={styles.title}>Тип топлива:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Не важно
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Бензин
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Дизель
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <View style={styles.filterContainer}>
          <Text style={styles.title}>Коробка:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Автомат
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={doNothing}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Механика
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </ScrollView>

      {isSubmitButtonVisible && (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={onSubmit}
        >
          <Text style={styles.buttonText}>Применить изменения</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
