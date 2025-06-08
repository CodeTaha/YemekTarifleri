import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: ViewStyle; // Optional
  textStyle?: TextStyle; // Optional
}

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>Süre: {duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>Zorluk: {complexity}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        Ekonomiklik: {affordability}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
