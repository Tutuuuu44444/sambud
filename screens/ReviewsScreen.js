import React from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";

import styles from "../styles";

export default function ReviewsScreen() {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.sectionTitle}>
                Anmeldelser
            </Text>

            <Text style={styles.subtitle}>
                Se hvad andre kunder siger om KlarRude Vinduespudsning.
            </Text>

            {/* Samlet vurdering af serviceudbyderen */}
            <View style={styles.detailCard}>
                <Text style={styles.serviceTitle}>
                    KlarRude Vinduespudsning
                </Text>

                <Text style={styles.rating}>
                    ★ 4,6 / 5
                </Text>

                <Text style={styles.detailText}>
                    Baseret på 38 anmeldelser
                </Text>
            </View>

            {/* Eksempler på anmeldelser fra tidligere kunder */}
            <View style={styles.card}>
                <Text style={styles.serviceTitle}>
                    ★★★★★
                </Text>

                <Text style={styles.detailText}>
                    "God service og vinduerne blev rigtig flotte."
                </Text>

                <Text style={styles.area}>
                    Mette – Frederiksberg
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.serviceTitle}>
                    ★★★★☆
                </Text>

                <Text style={styles.detailText}>
                    "Nem aftale og fin pris. Kom lidt senere end forventet."
                </Text>

                <Text style={styles.area}>
                    Jonas – København
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.serviceTitle}>
                    ★★★★★
                </Text>

                <Text style={styles.detailText}>
                    "Meget tilfreds. Jeg ville gerne bruge dem igen."
                </Text>

                <Text style={styles.area}>
                    Louise – Valby
                </Text>
            </View>

        </ScrollView>
    );
}