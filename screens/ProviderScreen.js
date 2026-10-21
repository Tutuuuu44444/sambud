import React from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";

import styles from "../styles";
import ButtonComponent from "../components/ButtonComponent";

export default function ProviderScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>

            <Text style={styles.sectionTitle}>
                Serviceudbyder
            </Text>

            {/* Viser information om virksomheden bag det valgte SamBud */}
            <View style={styles.detailCard}>

                <Text style={styles.serviceTitle}>
                    KlarRude Vinduespudsning
                </Text>

                <Text style={styles.rating}>
                    ★ 4,6 / 5
                </Text>

                <Text style={styles.detailText}>
                    38 anmeldelser
                </Text>

                <Text style={styles.detailText}>
                    KlarRude tilbyder vinduespudsning i København og omegn
                    og har fokus på private boliger og lejligheder.
                </Text>

                <Text style={styles.detailText}>
                    Område: København og Frederiksberg
                </Text>

                <Text style={styles.detailText}>
                    Service: Vinduespudsning
                </Text>

            </View>

            {/* Sender brugeren videre til anmeldelser af serviceudbyderen */}
            <ButtonComponent
                title="Læs anmeldelser"
                onPress={() => navigation.navigate("Reviews")}
            />

        </ScrollView>
    );
}