import React, { useState, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet ,Button} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import DropdownComponent from "./tools/DropDown";
export default function Signup() {

    //code for radio buttons
    const radioButtons: RadioButtonProps[] = useMemo(() => [
        {
            id: '1', 
            label: 'Male',
            value: 'Male',
            containerStyle: { marginRight: 16 }, 
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female',
        }
    ], []);

    const [selectedId, setSelectedId] = useState<string | undefined>();

    //code for dropdown list elements
    
    //defining component
     

    return (
        <SafeAreaView>
            <Text style={styles.title}>SignUp</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter your username" />
                <TextInput style={styles.input} placeholder="Enter your email" />
                <TextInput style={styles.input} placeholder="Enter your Age" />
                <Text style={styles.lang}>Known Languages</Text>
                <View style={styles.checkboxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="blue"
                        text="Telugu"
                        iconStyle={{ borderColor: "blue" }}
                        textStyle={{ textDecorationLine: "none", fontSize: 16 }}
                        onPress={(isChecked: boolean) => {}}
                    />
                    <BouncyCheckbox
                        size={25}
                        fillColor="blue"
                        text="Hindi"
                        iconStyle={{ borderColor: "blue" }}
                        textStyle={{ textDecorationLine: "none", fontSize: 16 }}
                        onPress={(isChecked: boolean) => {}}
                    />
                    <BouncyCheckbox
                        size={25}
                        fillColor="blue"
                        text="English"
                        iconStyle={{ borderColor: "blue" }}
                        textStyle={{ textDecorationLine: "none", fontSize: 16 }}
                        onPress={(isChecked: boolean) => {}}
                    />
                </View>
                <View style={styles.radioButtonContainer}>
                    <Text style={styles.lang} >Gender</Text>
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={setSelectedId} 
                        selectedId={selectedId} 
                        layout="row" 
                    />
                </View>
                <DropdownComponent/>
                <Button  title="Submit" onPress={() => {}} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
    },
    lang: {
        textAlign: "left",
        fontSize: 16,
    },
    inputContainer: {
        marginBottom: 16,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 16,
        width: "75%",
    },
   
    checkboxContainer: {
        marginBottom: 16,
        alignItems: "flex-start",
        paddingHorizontal: 16,
        marginLeft: 32,
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },
    radioButtonContainer: {
        display: "flex",
        flexDirection: "row", 
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        gap: 16,
    },
});
