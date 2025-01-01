import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import delhi from '../../assets/images/delhi.jpeg';
import mumbai from '../../assets/images/mumbai.jpg';
import hyderabad from '../../assets/images/Hyderabad.jpeg';
import vizag from '../../assets/images/vizag.jpg';

export default function Home() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.headerTag}>
                    Welcome Mr. Abhi! Looking for a Guide!
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={styles.imageContainer}>
                    <Image source={delhi} style={styles.image} />
                    <Image source={mumbai} style={styles.image} />
                    <Image source={hyderabad} style={styles.image} />
                    <Image source={vizag} style={styles.image} />
                </ScrollView>
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
        alignItems: 'center',
        padding: 16,
    },
    headerTag: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 300,
        borderRadius: 5,
        marginVertical: 8,
    },
});
