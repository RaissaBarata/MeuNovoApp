import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen"; // Caminho da nossa tela

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carta do Dia">
        <Stack.Screen name="Carta do Dia" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
