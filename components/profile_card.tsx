import React from "react";
import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function Profile() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome User!!!</Text>

                <View style={styles.imageContainer}>
                    <Image 
                        source={{ uri: "https://miro.medium.com/v2/resize:fit:2400/0*hDAyhnOx767w5qma.jpg" }} 
                        style={styles.image} 
                        onError={(error) => console.log(error)}
                    />
                </View>

                <View style={styles.detailsBox}>
                    <Text style={styles.text}>Heroic</Text>
                    <Text style={styles.text}>+123 456 7890</Text>
                    <Text style={styles.text}>New York, USA</Text>
                    <Text style={styles.text}>Tourist</Text>
                </View>
                  <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>LogOut</Text>
                  </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        padding:16,
        alignItems: "center",
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: "bold",
        color: "#333",
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 75,
        overflow: "hidden",
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "cover",
    },
    detailsBox: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
        width: "90%",
        maxWidth: 300,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        margin: 16,

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
        color: "#555",
        borderStyle:'solid',
        borderColor:'black',
        padding:12,
        borderWidth:2,
        width:250,
        height:50,
        marginBottom: 10,
    },
});
