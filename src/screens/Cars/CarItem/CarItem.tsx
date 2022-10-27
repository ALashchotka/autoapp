import React from "react";

import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Car } from "../Types";
import styles from "./styles";

export function CarItem({
  item,
  searchedCarPrice,
  toggleVisibility,
}: {
  item: Car;
  searchedCarPrice: number;
  toggleVisibility: (item: Car) => void;
}) {
  const onLinkPress = () => {
    Linking.openURL(item.link);
  };

  return (
    <TouchableOpacity
      style={[styles.container, !item.isVisible && styles.containerHidden]}
      activeOpacity={0.5}
      onPress={onLinkPress}
      disabled={!item.isVisible}
    >
      {item.isVisible && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />

          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                {item.name}, {item.issueYear}
              </Text>
              <Text style={styles.price}>
                {item.priceUSD}$
                <Text
                  style={[
                    styles.diffPrice,
                    {
                      color:
                        item.priceUSD - searchedCarPrice > 0 ? "green" : "red",
                    },
                  ]}
                >
                  &nbsp;({item.priceUSD - searchedCarPrice}$)
                </Text>
              </Text>
            </View>

            <View style={styles.tableContainer}>
              <View>
                <Text>пробег: {item.mileage} 000 км</Text>
                <Text>коробка: {item.gearbox}</Text>
                <Text>привод: {item.drive}</Text>
              </View>
              <View>
                <Text>объём: {item.capacity}</Text>
                <Text>топливо: {item.engine}</Text>
                <Text>кузов: {item.bodyType.title}</Text>
              </View>
            </View>

            <Text style={styles.traderText}>
              Объявлений на номере телефона: {item.samePhone}
            </Text>

            <Text style={styles.date}>{item.date.split("\n").join("")}</Text>
          </View>

          {item.isDeleted && (
            <View style={styles.deletedContainer}>
              <Text style={styles.deletedText}>Продано</Text>
            </View>
          )}
        </>
      )}

      <TouchableOpacity
        style={styles.visibilityContainer}
        onPress={() => toggleVisibility(item)}
      >
        <MaterialCommunityIcons
          style={styles.visibilityIcon}
          name={item.isVisible ? "eye" : "eye-off"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
