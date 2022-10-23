import React from "react";

import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 8,
    backgroundColor: "#CCCCCC",
  },
  content: {
    padding: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
  },
  tableContainer: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  traderText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
  },

  date: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "right",
  },

  deletedContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000060",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deletedText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export function CarItem({ item }: { item: any }) {
  const onLinkPress = () => {
    Linking.openURL(item.link);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={onLinkPress}
    >
      <Image style={styles.image} source={{ uri: item.image }} />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {item.name}, {item.issueYear}
          </Text>
          <Text style={styles.price}>{item.priceUSD}$</Text>
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
    </TouchableOpacity>
  );
}
