import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailsScreen";

// Stack Navigator için tipleri tanımlıyoruz
export type RootStackParamList = {
  YemekKategorileri: undefined;
  YemeklereGenelBakış: { categoryId: string };
  YemekDetayları: { mealId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#cccccc' }, 
            headerTintColor: 'black',
          }}
        >
          <Stack.Screen 
            name="YemekKategorileri" 
            component={CategoriesScreen} 
            options={{
              title: 'Yemek Kategorileri',
            }} 
          />
          <Stack.Screen 
            name="YemeklereGenelBakış" 
            component={MealOverviewScreen} 
            options={{
              title: 'Yemeklere Genel Bakış'
            }} 
          />
          <Stack.Screen 
            name="YemekDetayları" 
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
