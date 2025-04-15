// HomePage.tsx
import React from "react";
import { ScrollView, View } from "react-native";
import MainLayout from "./MainLayout";
import HomeScreen from "../components/HomeScreen";
import AboutComp from "../components/AboutComp";
import TestGermany from "../components/TestGermany";


const HomePage = () => {
  return (
    <MainLayout>
      <ScrollView>
        <TestGermany/>
        <AboutComp />
        <HomeScreen />
      </ScrollView>
    </MainLayout>
  );
};

export default HomePage;
