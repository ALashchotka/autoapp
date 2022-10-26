import React, { useEffect } from "react";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "../../hooks/useTheme";
import { CarItem } from "./CarItem/CarItem";
import { ListHeader } from "./ListHeader/ListHeader";
import useStyles from "./styles";
import { Car } from "./Types";
import { useCars } from "./useCars";

export function Cars({ navigation, route }: { navigation: any; route: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const carData = route.params;

  const { cars, toggleVisibility } = useCars(carData);

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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Filters")}
          hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
          <MaterialCommunityIcons
            name="filter"
            color={colors.primary}
            size={24}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {!!cars && (
        <FlatList
          keyExtractor={keyExtractor}
          data={cars}
          renderItem={renderItem}
          ListHeaderComponent={<ListHeader cars={cars} />}
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
