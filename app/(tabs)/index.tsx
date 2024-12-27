import Login from "@/components/login";
import Signup from "@/components/signup";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
}