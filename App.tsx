// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./src/pages/Profile";
import Course from "./src/pages/Course";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
// HomeScreen də layout ilə sarılmalı
import { RootStackParamList } from "./types";
import HomeScreen from "./src/components/HomeScreen";
import MainLayout from "./src/pages/MainLayout";
import HomePage from "./src/pages/HomePage";
import Header from "./src/components/Header";
import TestPraktik from "./src/pages/TestPraktik";
import PracticeQuiz from "./src/pages/PracticeQuiz";
import Wrapper from "./src/components/Wrapper";
import { Footer } from "./src/components/Footer";
import DetailsVisa from "./src/pages/DetailsVisa";
import LoginScreen from "./src/pages/LoginScreen";


const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Course" component={Course} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Test" component={TestPraktik} />
          <Stack.Screen name="PracticeQuiz" component={PracticeQuiz} />
          <Stack.Screen name="DetailsVisa" component={DetailsVisa} />
          <Stack.Screen name="LoginPage" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default App;
