import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles";
import ButtonComponent from "../components/ButtonComponent";
import { SAMBUDS } from "../data/sambudData";

export default function DetailsScreen({ navigation, route }) {

    // Bruger det SamBud der er sendt med fra søgningen.
    // Hvis intet er sendt med, vises Vinduespudsning som standard.
    const selectedSamBud = route.params?.samBud || SAMBUDS[0];

    const [participants, setParticipants] = useState(
        selectedSamBud.participants
    );

    const [joined, setJoined] = useState(false);

    // Beskrivelser til de forskellige typer SamBud
    const descriptions = {
        "1": "Udvendig vinduespudsning af lejlighed, op til 10 vinduer.",
        "2": "Klipning af almindelig hæk, op til 20 meter.",
        "3": "Græsslåning af almindelig have, op til 300 m².",
    };

    const normalPrice = selectedSamBud.price + 75;
    const savings = normalPrice - selectedSamBud.price;

    // Tjekker om brugeren allerede deltager i det valgte SamBud
    useEffect(() => {
        checkIfJoined();
    }, [selectedSamBud.id]);

    async function checkIfJoined() {
        try {
            const storedSamBuds = await AsyncStorage.getItem("mySamBuds");

            if (storedSamBuds !== null) {
                const parsedSamBuds = JSON.parse(storedSamBuds);

                const savedSamBud = parsedSamBuds.find(
                    (samBud) => samBud.id === selectedSamBud.id
                );

                if (savedSamBud) {
                    setJoined(true);
                    setParticipants(savedSamBud.participants);
                } else {
                    setJoined(false);
                    setParticipants(selectedSamBud.participants);
                }
            } else {
                setJoined(false);
                setParticipants(selectedSamBud.participants);
            }

        } catch (error) {
            console.log("Kunne ikke hente gemte SamBud:", error);
        }
    }

    // Gemmer det valgte SamBud når brugeren tilmelder sig
    async function joinSamBud() {
        if (!joined) {

            const newSamBud = {
                ...selectedSamBud,
                participants: selectedSamBud.participants + 1,
                daysLeft: 3,
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

                setParticipants(selectedSamBud.participants + 1);
                setJoined(true);

            } catch (error) {
                console.log("Kunne ikke gemme SamBud:", error);
            }
        }
    }

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.sectionTitle}>
                {selectedSamBud.service} – {selectedSamBud.area}
            </Text>

            <Text style={styles.subtitle}>
                {descriptions[selectedSamBud.id]}
            </Text>

            <View style={styles.detailCard}>

                <Text style={styles.serviceTitle}>
                    {selectedSamBud.service}
                </Text>

                <Text style={styles.detailText}>
                    Område: {selectedSamBud.area}
                </Text>

                <Text style={styles.detailText}>
                    Normalpris: {normalPrice} kr.
                </Text>

                <Text style={styles.detailPrice}>
                    SamBud-pris: {selectedSamBud.price} kr.
                </Text>

                <Text style={styles.detailPrice}>
                    Du sparer: {savings} kr.
                </Text>

                <Text style={styles.detailText}>
                    Deltagere: {participants} / {selectedSamBud.target}
                </Text>

                <Text style={styles.detailText}>
                    Tid tilbage: 3 dage
                </Text>

            </View>

            <Text style={styles.progressText}>
                {selectedSamBud.target - participants} deltagere mangler
            </Text>

            <Text style={styles.infoText}>
                Hvis gruppemålet ikke nås inden fristen, kan serviceudbyderen
                komme med et alternativt tilbud til de deltagere, der allerede
                har tilmeldt sig.
            </Text>

            {/* Udbydersiden er foreløbig lavet til Vinduespudsning */}
            {selectedSamBud.id === "1" && (
                <ButtonComponent
                    title="Se serviceudbyder"
                    onPress={() => navigation.navigate("Provider")}
                />
            )}

            {/* Brugeren kan tilmelde sig det valgte SamBud */}
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