import React from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

interface Props {
  title: string;
  color: string;
  onPress: () => void; // onPress fonksiyonunun türünü tanımlayın
}

const CategoryGridTile: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{ color: '#ccc' }} 
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});

export default CategoryGridTile;
