import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Touchable ,Image} from 'react-native';
import delhi from '../../assets/images/delhi.jpeg';
import mumbai from '../../assets/images/mumbai.jpg';
import hyderabad from '../../assets/images/Hyderabad.jpeg';
import vizag from '../../assets/images/vizag.jpg'; 
export default function Home(){

    return (
        <SafeAreaView>
            <View style ={styles.container}>
                <Text style={styles.headerTag}>Welcome Mr Abhi! Looooooooking for Guideeeeeeeeeeee!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            <View style = {styles.Imagecontainer}>
                <Image source={delhi} style={styles.image}/>
                <Image source={mumbai} style={styles.image}/>
                <Image source={hyderabad} style={styles.image}/>
                <Image source={vizag} style={styles.image}/>
            </View>
            </View>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTag:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    image:{
        height:150,
        width: 300,
        borderRadius: 5,
        marginTop: 16,
    },
    Imagecontainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
      },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },

});
