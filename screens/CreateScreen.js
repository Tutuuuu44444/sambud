import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles";
import ButtonComponent from "../components/ButtonComponent";

export default function CreateScreen() {

    // State gemmer brugerens input fra formularen
    const [service, setService] = useState("");
    const [area, setArea] = useState("");
    const [participants, setParticipants] = useState("");
    const [created, setCreated] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // Gemmer det oprettede SamBud i AsyncStorage
    async function createSamBud() {

        // Kontrollerer at alle felter er udfyldt
        if (
            service.trim() === "" ||
            area.trim() === "" ||
            participants.trim() === ""
        ) {
            setErrorMessage("Udfyld alle felter før du opretter et SamBud.");
            setCreated(false);
            return;
        }

        const newSamBud = {
            id: Date.now().toString(),
            service: service,
            area: area,
            participants: 1,
            target: Number(participants),
            price: null,
            createdByUser: true,
        };

        try {
            const storedSamBuds = await AsyncStorage.getItem("mySamBuds");

            let mySamBuds = [];

            if (storedSamBuds !== null) {
                mySamBuds = JSON.parse(storedSamBuds);
            }

            mySamBuds.push(newSamBud);

            await AsyncStorage.setItem(
                "mySamBuds",
                JSON.stringify(mySamBuds)
            );

            setErrorMessage("");
            setCreated(true);

        } catch (error) {
            console.log("Kunne ikke gemme SamBud:", error);
        }
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

            {/* Viser en besked hvis brugeren mangler at udfylde et felt */}
            {errorMessage !== "" && (
                <Text style={styles.infoText}>
                    {errorMessage}
                </Text>
            )}

            {/* Bekræftelsen vises efter SamBuddet er gemt */}
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