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

  const { cars } = useCars(route.params);

  const keyExtractor = (item: any) => `car_${item.id}`;

  const renderItem = ({ item }: { item: any }) => {
    return <CarItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {!!cars && (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Всего:{" "}
              {cars.length === 30 ? "больше " + cars.length : cars.length}
            </Text>
            <Text style={styles.title}>
              Продано:{" "}
              {
                cars.filter(
                  ({ isDeleted }: { isDeleted: boolean }) => isDeleted
                ).length
              }
            </Text>
          </View>

          <FlatList
            keyExtractor={keyExtractor}
            data={cars}
            renderItem={renderItem}
          />
        </>
      )}

      {!cars && (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size={24} />
        </View>
      )}
    </SafeAreaView>
  );
}
