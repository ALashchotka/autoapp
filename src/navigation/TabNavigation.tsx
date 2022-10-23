import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "../hooks/useTheme";
import { Calculator } from "../screens/Calculator/Calculator";
import { Cars } from "../screens/Cars/Cars";
import { Filter } from "../screens/Filter/Filter";

const Tab = createBottomTabNavigator();
const FilterStack = createNativeStackNavigator();

function FilterNavigation() {
  const { colors } = useTheme();

  return (
    <FilterStack.Navigator screenOptions={{ headerTintColor: colors.text }}>
      <FilterStack.Screen
        name="Filter"
        component={Filter}
        options={{ headerTitle: "Поиск" }}
      />
      <FilterStack.Screen
        name="Cars"
        component={Cars}
        options={{ headerTitle: "Машины в продаже" }}
      />
    </FilterStack.Navigator>
  );
}

export function TabNavigation() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerTintColor: colors.text,
      }}
    >
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          title: "Итого: ~0$",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calculator"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FilterNavigation"
        component={FilterNavigation}
        options={{
          title: "Поиск",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
