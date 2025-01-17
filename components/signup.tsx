import React, { useState, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import DropdownComponent from "./tools/DropDown";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, Firestore } from 'firebase/firestore';
import { auth,firestore } from "../app/backend/firebaseconfig";
export default function Signup() {
  const [userName, setUsername] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setuserAge] = useState('');
  const [userPassword, setUSerpassword] = useState('');

  const handleSignUp = async () => {
    if (userPassword.length < 6) {
      Alert.alert("Minimum password length is 6");
      return;
    }
  
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      const user = userCredential.user;
  
      // Store user details in Firestore
      const userRef = doc(firestore, 'Guides', user.uid);
      await setDoc(userRef, {
        uid:user.uid,
        email: userEmail,
        userName: userName,
        userAge: userAge,
      },{ merge: true });
  
      Alert.alert("User signed up successfully");
    } catch (error) {
      console.error("Error signing up:", error);
      Alert.alert("Error", error.message);
    }
  };
  

  // Define radio button options using useMemo
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

  return (
    <SafeAreaView>
      <Text style={styles.title}>SignUp</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your username" 
          value={userName}
          onChangeText={setUsername}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your email" 
          value={userEmail}
          onChangeText={setUserEmail}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your Age" 
          value={userAge}
          onChangeText={setuserAge}
        />
        <Text style={styles.lang}>Known Languages</Text>
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="blue"
            text="Telugu"
            iconStyle={{ borderColor: "blue" }}
            textStyle={{ textDecorationLine: "none", fontSize: 16 }}
            onPress={(isChecked: boolean) => { }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="blue"
            text="Hindi"
            iconStyle={{ borderColor: "blue" }}
            textStyle={{ textDecorationLine: "none", fontSize: 16 }}
            onPress={(isChecked: boolean) => { }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="blue"
            text="English"
            iconStyle={{ borderColor: "blue" }}
            textStyle={{ textDecorationLine: "none", fontSize: 16 }}
            onPress={(isChecked: boolean) => { }}
          />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.lang}>Gender</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </View>
        <DropdownComponent />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Enter your password" 
            secureTextEntry={true} 
            value={userPassword}
            onChangeText={setUSerpassword}
          />
        </View>
        <Button title="Submit" onPress={handleSignUp} />
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
  label: {
    fontSize: 16,
    marginBottom: 8,
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
