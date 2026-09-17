import React from "react";
import {
    View,
    Text,
    FlatList,
} from "react-native";

import styles from "../styles";
import { SAMBUDS } from "../data/sambudData";
import SamBudCard from "../components/SamBudCard";
import ButtonComponent from "../components/ButtonComponent";

export default function HomeScreen({ navigation }) {
    // FlatList bruger data fra sambudData.js og viser ét SamBudCard pr. element
    const renderSamBud = ({ item }) => {
        return (
            <SamBudCard
                service={item.service}
                area={item.area}
                participants={item.participants}
                target={item.target}
                price={item.price}
                onPress={() => {
                    if (item.id === "1") {
                        navigation.navigate("Details");
                    }
                }}
            />
        );
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                SamBud
            </Text>

            <Text style={styles.subtitle}>
                Gå sammen om services. Få en bedre pris.
            </Text>

            <Text style={styles.sectionTitle}>
                Aktive SamBud nær dig
            </Text>
            {/* Viser alle aktive SamBud fra datafilen */}
            <FlatList
                data={SAMBUDS}
                renderItem={renderSamBud}
                keyExtractor={(item) => item.id}
            />

            <ButtonComponent
                title="+ Opret SamBud"
                onPress={() => navigation.navigate("Create")}
            />

        </View>
    );
}