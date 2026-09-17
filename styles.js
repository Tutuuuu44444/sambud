import { StyleSheet } from "react-native";

export default StyleSheet.create({

    // Fælles styling for appens baggrund og placering af indhold
    container: {
        flex: 1,
        backgroundColor: "#F5F8F5",
        paddingHorizontal: 20,
        paddingTop: 25,
    },

    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#18392B",
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 16,
        color: "#66756D",
        marginBottom: 30,
        lineHeight: 23,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#18392B",
        marginBottom: 18,
    },

    // Genanvendelig styling til de SamBud der vises på forsiden
    card: {
        backgroundColor: "#FFFFFF",
        padding: 18,
        borderRadius: 16,
        marginBottom: 14,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 3,
    },

    serviceTitle: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#18392B",
    },

    area: {
        fontSize: 14,
        color: "#728078",
        marginTop: 4,
    },

    participants: {
        marginTop: 14,
        fontSize: 15,
        color: "#4E5E55",
    },

    price: {
        marginTop: 6,
        fontSize: 17,
        fontWeight: "bold",
        color: "#238653",
    },

    // Fælles styling til ButtonComponent, som bruges flere steder i appen
    button: {
        backgroundColor: "#238653",
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 14,
        marginTop: 10,
        marginBottom: 30,
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "bold",
    },

    detailCard: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 3,
    },

    detailText: {
        fontSize: 16,
        color: "#4E5E55",
        marginBottom: 12,
    },

    detailPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#238653",
        marginBottom: 12,
    },

    progressText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#18392B",
        marginBottom: 10,
    },

    confirmationText: {
        marginTop: 5,
        marginBottom: 30,
        fontSize: 16,
        color: "#238653",
        fontWeight: "600",
        textAlign: "center",
    },

    inputLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#18392B",
        marginBottom: 8,
    },

    input: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#DDE5DF",
    },

    successBox: {
        backgroundColor: "#EAF5ED",
        padding: 20,
        borderRadius: 16,
        marginTop: 5,
        marginBottom: 30,
    },

    successTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#238653",
        marginBottom: 10,
    },

    successText: {
        fontSize: 16,
        color: "#4E5E55",
        marginBottom: 5,
    },

    rating: {
        fontSize: 16,
        color: "#238653",
        fontWeight: "600",
        marginTop: 5,
        marginBottom: 18,
    },

    infoText: {
        fontSize: 14,
        color: "#66756D",
        lineHeight: 20,
        marginBottom: 10,
    },
});