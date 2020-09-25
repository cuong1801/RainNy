import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ListCity } from "./src/pages/city/ListCity";
import { Home } from "./src/pages/home";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Trang chủ",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      />
      <Stack.Screen name="Detail" component={ListCity} options={{}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
