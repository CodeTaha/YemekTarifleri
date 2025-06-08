import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
import { StackNavigationProp } from "@react-navigation/stack";

interface MealItemProps {
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  id: string;
}

const MealItem: React.FC<MealItemProps> = ({ id, title, imageUrl, duration, complexity, affordability, }) => {
    
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    function selectMealItemHandler() {
        navigation.navigate('YemekDetayları', {
            mealId: id
        });
    }

    

    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
  duration={duration} 
  affordability={affordability} 
  complexity={complexity} 
  style={{}} 
  textStyle={{}} 
/>

                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
      },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
