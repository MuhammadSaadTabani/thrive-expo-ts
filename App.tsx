import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Home from "./src/Home";
import Protected from "./src/Protected";
import { RootStackParamList, RouteNames } from "./src/navTypes";
import Redirect from "./src/Redirect";
import Routes from "./src/routes";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <Routes/>
  );
}