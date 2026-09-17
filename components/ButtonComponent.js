import React from "react";
import {
    Pressable,
    Text,
} from "react-native";

import styles from "../styles";

// Genanvendelig knap hvor tekst og funktion sendes ind som props
export default function ButtonComponent({
    title,
    onPress,
}) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    );
}