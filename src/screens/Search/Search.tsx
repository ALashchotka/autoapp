import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "../../hooks/useTheme";
import { transformCarData } from "../../utils/transformCarData";
import { Card } from "./Card/Card";
import { SiteParser } from "./SiteParser/SiteParser";
import useStyles from "./styles";
import { CarData } from "./Types";
import { useLink } from "./useLink";

export function Search({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const { link, onLinkChange } = useLink();
  const [carData, setCarData] = useState<CarData | null>(null);

  const openCarsList = () => {
    navigation.navigate("Cars", {
      carData,
      filters: transformCarData(carData),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SiteParser link={link} setCarData={setCarData} />

        <Text style={styles.title}>Ссылка autoplius:</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            autoFocus
            style={styles.textInput}
            placeholder="Ссылка"
            placeholderTextColor={colors.textInputPlaceholder}
            onChangeText={onLinkChange}
            value={link}
          />
          <TouchableOpacity
            style={styles.textInputClearButton}
            onPress={() => onLinkChange("")}
            hitSlop={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <MaterialCommunityIcons
              name="close"
              color={colors.textInputText}
              size={18}
            />
          </TouchableOpacity>
        </View>

        {!!carData && (
          <>
            <View style={styles.dataContainer}>
              <Card title="Марка" value={carData.title} />
              <Card title="Тип топлива" value={carData.fuel} />
              <Card title="Объём" value={carData.capacity} />
              <Card title="Год выпуска" value={carData.date} />
              <Card title="Кузов" value={carData.body} />
              <Card title="Коробка" value={carData.gear} />
              <Card title="Цена" value={carData.price} />
              <Card title="Итого" value={carData.totalPrice} />
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={openCarsList}
            >
              <Text style={styles.buttonText}>
                Просмотреть объявления за последний месяц
              </Text>
            </TouchableOpacity>
          </>
        )}

        {!link && (
          <>
            <Text style={styles.title}>Не работает с:</Text>
            <Text style={[styles.value, { marginBottom: 0 }]}>
              - Alfa Romeo, Land Rover, Mercedes, Volvo
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
