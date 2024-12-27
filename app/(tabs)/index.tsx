import Login from "@/components/login";
import Signup from "@/components/signup";
// import Signup from "@/components/signup";
import Home from "@/components/ui/HomeScreen";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Homescreen() {
  return (
    <SafeAreaView>
      {/* <Login/> */}
      {/* <Signup/> */}
      <Home/>
    </SafeAreaView>
  );
}