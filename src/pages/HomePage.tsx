// HomePage.tsx
import React from "react";
import { View } from "react-native";
import MainLayout from "./MainLayout";
import HomeScreen from "../components/HomeScreen";
import AboutComp from "../components/AboutComp";
import TestGermany from "../components/TestGermany";


const HomePage = () => {
  return (
    <MainLayout>
      <View>
        <HomeScreen />
        <AboutComp />
        <TestGermany/>
      </View>
    </MainLayout>
  );
};

export default HomePage;
