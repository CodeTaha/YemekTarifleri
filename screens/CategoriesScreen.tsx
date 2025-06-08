import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

type CategoriesScreenNavigationProp = StackNavigationProp<ParamListBase>;

interface Props {
  navigation: CategoriesScreenNavigationProp;
}

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {

  const renderCategoryItem = ({ item }: { item: { id: string; title: string; color: string } }) => {

    function pressHandler() {
      navigation.navigate('YemeklereGenelBakış', {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile 
        title={item.title} 
        color={item.color} 
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default CategoriesScreen;
