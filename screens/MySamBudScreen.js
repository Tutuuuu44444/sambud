import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "../styles";
import SamBudCard from "../components/SamBudCard";
import ButtonComponent from "../components/ButtonComponent";

export default function MySamBudScreen({ navigation }) {

    // State gemmer de SamBud, som brugeren deltager i eller selv har oprettet
    const [mySamBuds, setMySamBuds] = useState([]);

    // Henter brugerens gemte SamBud fra AsyncStorage
    useEffect(() => {
        loadMySamBuds();
    }, []);

    async function loadMySamBuds() {
        try {
            const storedSamBuds = await AsyncStorage.getItem("mySamBuds");

            if (storedSamBuds !== null) {
                setMySamBuds(JSON.parse(storedSamBuds));
            }
        } catch (error) {
            console.log("Kunne ikke hente Mine SamBud:", error);
        }
    }

    // Viser forskelligt indhold alt efter om SamBuddet
    // er oprettet af brugeren eller et SamBud brugeren deltager i
    const renderSamBud = ({ item }) => {

        if (item.createdByUser) {
            return (
                <View style={styles.card}>

                    <Text style={styles.serviceTitle}>
                        {item.service}
                    </Text>

                    <Text style={styles.area}>
                        {item.area}
                    </Text>

                    <Text style={styles.participants}>
                        1 / {item.target} deltagere
                    </Text>

                    <Text style={styles.detailText}>
                        Oprettet af dig
                    </Text>

                    <Text style={styles.infoText}>
                        Afventer flere deltagere og tilbud fra en serviceudbyder.
                    </Text>

                </View>
            );
        }

        return (
            <View>

                {/* Kortet kan åbne detaljesiden for det valgte SamBud */}
                <SamBudCard
                    service={item.service}
                    area={item.area}
                    participants={item.participants}
                    target={item.target}
                    price={item.price}
                    onPress={() =>
                        navigation.navigate("Details", {
                            samBud: item,
                        })
                    }
                />

                {/* Vinduespudsning bruges som eksempel på et alternativt tilbud */}
                {item.id === "1" && (
                    <ButtonComponent
                        title="Se alternativt tilbud"
                        onPress={() => navigation.navigate("AlternativeOffer")}
                    />
                )}

            </View>
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.sectionTitle}>
                Mine SamBud
            </Text>

            <Text style={styles.subtitle}>
                Her kan du følge de SamBud, du deltager i eller selv har oprettet.
            </Text>

            {mySamBuds.length === 0 ? (
                <Text style={styles.infoText}>
                    Du deltager endnu ikke i nogen SamBud.
                </Text>
            ) : (
                <FlatList
                    data={mySamBuds}
                    renderItem={renderSamBud}
                    keyExtractor={(item) => item.id}
                />
            )}

        </View>
    );
}