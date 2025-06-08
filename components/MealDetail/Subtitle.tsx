import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface SubtitleProps {
    children: String;
}

const Subtitle: React.FC<SubtitleProps> = ({children}) => {
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    subtitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
})