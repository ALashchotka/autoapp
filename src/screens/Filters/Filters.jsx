import React, { useState } from "react";

import isEqual from "lodash.isequal";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { TextInput } from "../../components";
import { useTheme } from "../../hooks/useTheme";
import { BODY, FUEL } from "../Cars/constants";
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

  const setCapacity = (capacity) => {
    setFilters((prevState) => ({
      ...prevState,
      capacityFrom: capacity ? (capacity / 1000).toFixed(1) : undefined,
      capacityTo: capacity ? (capacity / 1000).toFixed(1) : undefined,
    }));
  };

  const setEngines = (engine) => {
    setFilters((prevState) => {
      let newEngines = prevState.engines || [];

      if (engine) {
        const engineIndex = newEngines.findIndex((item) => item === engine);

        if (engineIndex === -1) {
          newEngines = [...newEngines, engine];
        } else {
          newEngines.splice(engineIndex, 1);
        }
      } else {
        newEngines = [];
      }

      return {
        ...prevState,
        engines: newEngines.sort(),
      };
    });
  };

  const setYearFrom = (year) => {
    setFilters((prevState) => ({
      ...prevState,
      issueYearFrom: year ? parseInt(year, 10) : undefined,
    }));
  };

  const setYearTo = (year) => {
    setFilters((prevState) => ({
      ...prevState,
      issueYearTo: year ? parseInt(year, 10) : undefined,
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
        <View style={styles.filtersRowContainer}>
          <View style={styles.filterContainer}>
            <Text style={styles.title}>Год от:</Text>

            <View style={styles.itemsContainer}>
              <TextInput
                textInputStyle={styles.input}
                placeholder="Год от"
                keyboardType="number-pad"
                onChangeText={setYearFrom}
                value={filters.issueYearFrom ? `${filters.issueYearFrom}` : ""}
              />
            </View>
          </View>

          <View style={styles.filterContainer}>
            <Text style={styles.title}>Год до:</Text>

            <View style={styles.itemsContainer}>
              <TextInput
                textInputStyle={styles.input}
                placeholder="Год до"
                keyboardType="number-pad"
                onChangeText={setYearTo}
                value={filters.issueYearTo ? `${filters.issueYearTo}` : ""}
              />
            </View>
          </View>
        </View>

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

        <View style={styles.filterContainer}>
          <Text style={styles.title}>Объём:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                !filters.capacityFrom && styles.itemContainerSelected,
              ]}
              onPress={() => setCapacity(null)}
            >
              <Text
                style={[
                  styles.itemText,
                  !filters.capacityFrom && styles.itemTextSelected,
                ]}
              >
                Не важно
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                !!filters.capacityFrom && styles.itemContainerSelected,
              ]}
              onPress={() => setCapacity(searchedCarData.capacity)}
            >
              <Text
                style={[
                  styles.itemText,
                  !!filters.capacityFrom && styles.itemTextSelected,
                ]}
              >
                {searchedCarData.capacity}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <Text style={styles.title}>Тип топлива:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                !filters.engines.length && styles.itemContainerSelected,
              ]}
              onPress={() => setEngines(null)}
            >
              <Text
                style={[
                  styles.itemText,
                  !filters.engines.length && styles.itemTextSelected,
                ]}
              >
                Не важно
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                filters.engines.find((item) => item === FUEL["Бензин"]) &&
                  styles.itemContainerSelected,
              ]}
              onPress={() => setEngines(FUEL["Бензин"])}
            >
              <Text
                style={[
                  styles.itemText,
                  filters.engines.find((item) => item === FUEL["Бензин"]) &&
                    styles.itemTextSelected,
                ]}
              >
                Бензин
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[
                styles.itemContainer,
                filters.engines.find((item) => item === FUEL["Дизель"]) &&
                  styles.itemContainerSelected,
              ]}
              onPress={() => setEngines(FUEL["Дизель"])}
            >
              <Text
                style={[
                  styles.itemText,
                  filters.engines.find((item) => item === FUEL["Дизель"]) &&
                    styles.itemTextSelected,
                ]}
              >
                Дизель
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.filterContainer}>
          <Text style={styles.title}>Коробка:</Text>

          <View style={styles.itemsContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={() => {}}
            >
              <Text style={[styles.itemText, styles.itemTextSelected]}>
                Автомат
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.itemContainer, styles.itemContainerSelected]}
              onPress={() => {}}
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
