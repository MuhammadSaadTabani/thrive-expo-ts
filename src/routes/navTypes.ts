import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export enum RouteNames {
  home = "home",
  redirect = "redirect",
  private = "private",
}

export type RootStackParamList = {
  [RouteNames.redirect]: {
    code: string;
    state: string;
    error: string;
    error_description: string;
  };
  [RouteNames.home]: undefined;
  [RouteNames.private]: undefined;
};

export type AuthScreenRouteProp = RouteProp<
  RootStackParamList,
  RouteNames.redirect
>;

export type RootStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  RouteNames
>;