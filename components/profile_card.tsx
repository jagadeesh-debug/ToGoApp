import React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";

export default function Profile() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome User!!!</Text>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{ uri: "https://miro.medium.com/v2/resize:fit:2400/0*hDAyhnOx767w5qma.jpg" }} // Placeholder Image
                        style={styles.image} 
                        onError={(error) => console.log(error)}
                    />
                </View>
                <Text style={styles.text}>Heroic</Text>
                <Text style={styles.text}>Mobile</Text>
                <Text style={styles.text}>Location</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        marginBottom: 16,
    },
    text: {
        borderWidth: 1,
        borderColor: "black",
        fontSize: 14,
        marginBottom: 12,
        padding: 8,
        width: 150, 
        color: "red",
        backgroundColor: "white" // Ensure background is not transparent
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
        overflow: "hidden",
        marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
    },
});
