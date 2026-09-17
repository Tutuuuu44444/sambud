import React from "react";
import {
    Text,
    TouchableOpacity,
} from "react-native";

import styles from "../styles";

// Props gør kortet genanvendeligt med forskellige SamBud-data
export default function SamBudCard({
    service,
    area,
    participants,
    target,
    price,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >
            <Text style={styles.serviceTitle}>
                {service}
            </Text>

            <Text style={styles.area}>
                {area}
            </Text>

            <Text style={styles.participants}>
                {participants} / {target} deltagere
            </Text>

            <Text style={styles.price}>
                SamBud-pris: {price} kr.
            </Text>
        </TouchableOpacity>
    );
}