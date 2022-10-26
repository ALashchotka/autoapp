import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "../hooks/useTheme";
import { Calculator } from "../screens/Calculator/Calculator";
import { Cars } from "../screens/Cars/Cars";
import { Filters } from "../screens/Filters/Filters";
import { Search } from "../screens/Search/Search";

const Tab = createBottomTabNavigator();
const SearchStack = createNativeStackNavigator();

function SearchNavigation() {
  const { colors } = useTheme();

  return (
    <SearchStack.Navigator screenOptions={{ headerTintColor: colors.text }}>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{ headerTitle: "Поиск" }}
      />
      <SearchStack.Screen
        name="Cars"
        component={Cars}
        options={{ headerTitle: "Машины в продаже" }}
      />
      <SearchStack.Screen
        name="Filters"
        component={Filters}
        options={{ headerTitle: "Фильтры" }}
      />
    </SearchStack.Navigator>
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
        name="SearchNavigation"
        component={SearchNavigation}
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
