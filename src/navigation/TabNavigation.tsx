import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "../hooks/useTheme";
import { Calculator } from "../screens/Calculator/Calculator";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
      }}
    >
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{
          title: "Total: ~0$",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calculator"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
