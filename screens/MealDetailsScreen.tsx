import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  YemekDetayları: { mealId: string };
};

type MealDetailScreenRouteProp = RouteProp<RootStackParamList, 'YemekDetayları'>;

interface Props {
  route: MealDetailScreenRouteProp;
}

function MealDetailScreen({ route }: Props) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration ?? 0}
        complexity={selectedMeal?.complexity ?? "Unknown"}
        affordability={selectedMeal?.affordability ?? "Unknown"}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>İçindekiler</Subtitle>
          <List data={selectedMeal?.ingredients ?? []} />
          <Subtitle>Adımlar</Subtitle>
          <List data={selectedMeal?.steps ?? []} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailText: {
    color: "black",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
