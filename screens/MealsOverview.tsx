import { StyleSheet, FlatList, View } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  YemeklereGenelBakış: { categoryId: string };
};

type MealOverviewScreenNavigationProp = StackNavigationProp<RootStackParamList, 'YemeklereGenelBakış'>;
type MealOverviewScreenRouteProp = RouteProp<RootStackParamList, 'YemeklereGenelBakış'>;

interface Props {
  route: MealOverviewScreenRouteProp;
  navigation: MealOverviewScreenNavigationProp;
}

function MealOverviewScreen({ route, navigation }: Props) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData: { item: any }) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
