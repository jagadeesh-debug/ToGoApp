import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getActionFromState } from '@react-navigation/native';
import { getParamName } from 'expo-router/build/fork/getPathFromState-forks';
import {auth,firestore} from '../app/backend/firebaseconfig';
import { useState } from 'react';
import { getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore,doc } from 'firebase/firestore';
export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const firestore = getFirestore();
const handleLogin = async () => {
  if (!userEmail || !userPassword) {
    Alert.alert('Error', 'Please enter both email and password.');
    return;
  }

  try {
    // Use Firebase Authentication to log in
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);
    const user = userCredential.user;

    console.log("User logged in successfully");

    // Optionally, fetch user data from Firestore if needed
    const userDocRef = doc(firestore, 'users', user.uid); 
    const userDoc = await getDoc(userDocRef); // Get the document
    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log('User data from Firestore:', userData);
    }

  } catch (error) {
    console.error('Error logging in:', error);
    Alert.alert('Error', error.message);
  }
};

  //ui code
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Login Here</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>UserMail</Text>
          <TextInput style={styles.input} placeholder="Enter your Mail" id='umail' onChangeText={setUserEmail}
            keyboardType="email-address" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} id='password' value={userPassword}
            onChangeText={setUserPassword} />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    display: 'flex',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
    fontSize: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
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
