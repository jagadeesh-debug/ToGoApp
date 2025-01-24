// import Login from "@/components/login";
import Profile from "@/app/profile_card";
import Signup from "@/components/signup";
// import Signup from "@/components/signup";
import Home from "@/components/ui/HomeScreen";
import React, { useState } from "react";
import { useEffect } from "react";
import {auth} from './backend/firebaseconfig';
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "@/components/login";

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
        // Wait for 3 seconds before checking auth state
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, 3000); // Set a delay of 3 seconds

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
}, []);


  return (
    <SafeAreaView>
      <Login/>
       {/* <Signup/> */}
      {/* <Home/>  */}
      
     {/* <Profile/> */}
    </SafeAreaView>
  );
}