import React from "react";
import { SettingsScreen } from "../../features/setting/screen/setting.screen";
import { FavouritesScreen } from "../../features/setting/screen/favourites.screen";
import { createStackNavigator } from "@react-navigation/stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        options={{
          header: () => null,
        }}
        name="settings"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingStack.Navigator>
  );
};
