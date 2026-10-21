import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    FlatList,
} from "react-native";

import styles from "../styles";
import { SAMBUDS } from "../data/sambudData";
import SamBudCard from "../components/SamBudCard";

export default function SearchScreen({ navigation }) {

    // State gemmer den tekst brugeren skriver i søgefeltet
    const [searchText, setSearchText] = useState("");

    // Filtrerer SamBud ud fra service eller område
    const filteredSamBuds = SAMBUDS.filter((item) => {
        const search = searchText.toLowerCase();

        return (
            item.service.toLowerCase().includes(search) ||
            item.area.toLowerCase().includes(search)
        );
    });

    // Hvert søgeresultat kan åbne detaljesiden
    const renderSamBud = ({ item }) => {
        return (
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
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.sectionTitle}>
                Søg SamBud
            </Text>

            <Text style={styles.subtitle}>
                Søg efter en service eller et område.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Fx vinduespudsning eller Frederiksberg"
                value={searchText}
                onChangeText={setSearchText}
            />

            {/* Viser søgeresultater eller en besked hvis intet matcher */}
            {filteredSamBuds.length === 0 ? (
                <Text style={styles.infoText}>
                    Ingen SamBud matcher din søgning.
                </Text>
            ) : (
                <FlatList
                    data={filteredSamBuds}
                    renderItem={renderSamBud}
                    keyExtractor={(item) => item.id}
                />
            )}

        </View>
    );
}