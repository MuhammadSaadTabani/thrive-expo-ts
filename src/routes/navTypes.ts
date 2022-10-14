import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export enum RouteNames {
  login = "login",
  home = "home",
  redirect = "redirect",
  auth = 'auth'
}

export type RootStackParamList = {
  [RouteNames.redirect]: {
    code: string;
    state: string;
    error: string;
    error_description: string;
  };
  [RouteNames.login]: undefined;
  [RouteNames.home]: undefined;
  [RouteNames.auth]: undefined;
};

export type AuthScreenRouteProp = RouteProp<
  RootStackParamList,
  RouteNames.redirect
>;

export type RootStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  RouteNames
>;