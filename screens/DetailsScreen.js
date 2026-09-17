import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";

import styles from "../styles";
import ButtonComponent from "../components/ButtonComponent";

export default function DetailsScreen() {

    // State holder styr på antal deltagere og om brugeren allerede har tilmeldt sig
    const [participants, setParticipants] = useState(7);
    const [joined, setJoined] = useState(false);

    // Når brugeren deltager, øges deltagerantallet og brugeren markeres som tilmeldt
    function joinSamBud() {
        if (!joined) {
            setParticipants(participants + 1);
            setJoined(true);
        }
    }

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.sectionTitle}>
                Vinduespudsning – Frederiksberg
            </Text>

            <Text style={styles.subtitle}>
                Udvendig vinduespudsning af lejlighed, op til 10 vinduer.
            </Text>

            <View style={styles.detailCard}>

                <Text style={styles.serviceTitle}>
                    KlarRude Vinduespudsning
                </Text>

                <Text style={styles.rating}>
                    ★ 4,6 / 5
                </Text>

                <Text style={styles.detailText}>
                    Område: Frederiksberg
                </Text>

                <Text style={styles.detailText}>
                    Normalpris: 300 kr.
                </Text>

                <Text style={styles.detailPrice}>
                    SamBud-pris: 225 kr.
                </Text>

                <Text style={styles.detailPrice}>
                    Du sparer: 75 kr.
                </Text>

                <Text style={styles.detailText}>
                    Deltagere: {participants} / 10
                </Text>

                <Text style={styles.detailText}>
                    Tid tilbage: 3 dage
                </Text>

            </View>

            <Text style={styles.progressText}>
                {10 - participants} deltagere mangler
            </Text>

            <Text style={styles.infoText}>
                Hvis målet på 10 deltagere ikke nås inden fristen,
                kan serviceudbyderen komme med et alternativt tilbud
                til de deltagere, der allerede har tilmeldt sig.
            </Text>

            {/* Knappen vises kun, hvis brugeren endnu ikke har tilmeldt sig */}
            {!joined && (
                <ButtonComponent
                    title="Deltag i SamBud"
                    onPress={joinSamBud}
                />
            )}

            {joined && (
                <Text style={styles.confirmationText}>
                    Du er nu tilmeldt dette SamBud.
                </Text>
            )}

        </ScrollView>
    );
}