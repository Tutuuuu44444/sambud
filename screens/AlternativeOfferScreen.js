import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
} from "react-native";

import styles from "../styles";
import ButtonComponent from "../components/ButtonComponent";

export default function AlternativeOfferScreen() {

    // State holder styr på om brugeren har accepteret eller afvist tilbuddet
    const [answer, setAnswer] = useState("");

    return (
        <ScrollView style={styles.container}>

            <Text style={styles.sectionTitle}>
                Alternativt tilbud
            </Text>

            <Text style={styles.subtitle}>
                Gruppemålet blev ikke nået, men serviceudbyderen har sendt et nyt tilbud.
            </Text>

            {/* Information om det oprindelige SamBud */}
            <View style={styles.detailCard}>

                <Text style={styles.serviceTitle}>
                    Vinduespudsning – Frederiksberg
                </Text>

                <Text style={styles.detailText}>
                    Oprindeligt mål: 10 deltagere
                </Text>

                <Text style={styles.detailText}>
                    Tilmeldte deltagere: 8
                </Text>

                <Text style={styles.detailText}>
                    Oprindelig SamBud-pris: 225 kr.
                </Text>

            </View>

            {/* Det alternative tilbud fra serviceudbyderen */}
            <View style={styles.detailCard}>

                <Text style={styles.serviceTitle}>
                    Nyt tilbud fra KlarRude
                </Text>

                <Text style={styles.detailText}>
                    KlarRude tilbyder stadig at gennemføre vinduespudsningen
                    for de 8 tilmeldte deltagere.
                </Text>

                <Text style={styles.detailPrice}>
                    Ny pris: 245 kr.
                </Text>

                <Text style={styles.detailText}>
                    Normalpris: 300 kr.
                </Text>

                <Text style={styles.detailPrice}>
                    Du sparer stadig 55 kr.
                </Text>

            </View>

            {/* Brugeren kan tage stilling til det nye tilbud */}
            {answer === "" && (
                <>
                    <ButtonComponent
                        title="Accepter tilbud"
                        onPress={() => setAnswer("accepted")}
                    />

                    <ButtonComponent
                        title="Afvis tilbud"
                        onPress={() => setAnswer("declined")}
                    />
                </>
            )}

            {answer === "accepted" && (
                <Text style={styles.confirmationText}>
                    Du har accepteret det alternative tilbud.
                </Text>
            )}

            {answer === "declined" && (
                <Text style={styles.infoText}>
                    Du har afvist det alternative tilbud.
                </Text>
            )}

        </ScrollView>
    );
}