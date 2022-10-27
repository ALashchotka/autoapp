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
import { ListEmpty } from "./ListEmpty/ListEmpty";
import { ListHeader } from "./ListHeader/ListHeader";
import useStyles from "./styles";
import { Car } from "./Types";
import { useCars } from "./useCars";

export function Cars({ navigation, route }: { navigation: any; route: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const { cars, toggleVisibility } = useCars();

  const keyExtractor = (item: Car) => `car_${item.id}`;

  const onFiltersPress = () => navigation.navigate("Filters", route.params);

  const renderItem = ({ item }: { item: Car }) => {
    return (
      <CarItem
        item={item}
        searchedCarPrice={route.params.carData.totalPrice}
        toggleVisibility={toggleVisibility}
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={onFiltersPress}
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
  }, [navigation, onFiltersPress]);

  return (
    <SafeAreaView style={styles.container}>
      {!!cars && (
        <FlatList
          contentContainerStyle={!cars.length && styles.emptyList}
          keyExtractor={keyExtractor}
          data={cars}
          renderItem={renderItem}
          ListHeaderComponent={<ListHeader cars={cars} />}
          ListEmptyComponent={<ListEmpty onFiltersPress={onFiltersPress} />}
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
