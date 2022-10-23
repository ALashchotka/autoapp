import React from "react";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";
import { CarItem } from "./CarItem/CarItem";
import { Settings } from "./Settings/Settings";
import { Car } from "./Types";
import { useCars } from "./useCars";

const useStyles = ({ colors }: { colors: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      textAlign: "center",
      margin: 8,
    },
    emptyContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export function Cars({ route }: { route: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const carData = route.params;

  const { cars, settings, setSettings, toggleVisibility } = useCars(carData);

  const keyExtractor = (item: Car) => `car_${item.id}`;

  const renderItem = ({ item }: { item: Car }) => {
    return (
      <CarItem
        carData={carData}
        item={item}
        toggleVisibility={toggleVisibility}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!!cars && (
        <FlatList
          keyExtractor={keyExtractor}
          data={cars}
          renderItem={renderItem}
          ListHeaderComponent={
            <>
              <Settings settings={settings} setSettings={setSettings} />

              <View style={styles.titleContainer}>
                <Text style={styles.title}>Всего: {cars.length}</Text>
                <Text style={styles.title}>
                  Продано:{" "}
                  {
                    cars.filter(
                      ({ isDeleted }: { isDeleted: boolean }) => isDeleted
                    ).length
                  }
                </Text>
              </View>
            </>
          }
        />
      )}

      {!cars && (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size={24} />
        </View>
      )}
    </SafeAreaView>
  );
}