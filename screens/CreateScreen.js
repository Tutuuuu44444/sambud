import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
} from "react-native";

import styles from "../styles";
import ButtonComponent from "../components/ButtonComponent";

export default function CreateScreen() {

    // State gemmer brugerens input fra formularen
    const [service, setService] = useState("");
    const [area, setArea] = useState("");
    const [participants, setParticipants] = useState("");
    const [created, setCreated] = useState(false);

    // Når brugeren opretter et ønske, vises en bekræftelse
    function createSamBud() {
        setCreated(true);
    }

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.sectionTitle}>
                Opret et ønske
            </Text>

            <Text style={styles.subtitle}>
                Fortæl hvilken service du ønsker. Andre i dit område kan derefter
                tilslutte sig dit SamBud.
            </Text>

            <Text style={styles.inputLabel}>
                Hvilken service ønsker du?
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Fx vinduespudsning"
                value={service}
                onChangeText={setService}
            />

            <Text style={styles.inputLabel}>
                Område
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Fx Frederiksberg"
                value={area}
                onChangeText={setArea}
            />

            <Text style={styles.inputLabel}>
                Ønsket gruppestørrelse
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Fx 10 personer"
                value={participants}
                onChangeText={setParticipants}
                keyboardType="numeric"
            />

            <Text style={styles.infoText}>
                Gruppestørrelsen bruges som et foreløbigt mål. Den endelige pris
                afhænger af den valgte service og serviceudbyderens tilbud.
            </Text>

            <ButtonComponent
                title="Opret ønske"
                onPress={createSamBud}
            />

            {/* Bekræftelsen vises kun efter brugeren har trykket på knappen */}
            {created && (
                <View style={styles.successBox}>
                    <Text style={styles.successTitle}>
                        Dit SamBud-ønske er oprettet!
                    </Text>

                    <Text style={styles.successText}>
                        Service: {service}
                    </Text>

                    <Text style={styles.successText}>
                        Område: {area}
                    </Text>

                    <Text style={styles.successText}>
                        Gruppemål: {participants}
                    </Text>
                </View>
            )}

        </ScrollView>
    );
}