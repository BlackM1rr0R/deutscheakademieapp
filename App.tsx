// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./src/pages/Profile";
import Course from "./src/pages/Course";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import { RootStackParamList } from "./types";
import HomePage from "./src/pages/HomePage";
import TestPraktik from "./src/pages/TestPraktik";
import PracticeQuiz from "./src/pages/PracticeQuiz";
import DetailsVisa from "./src/pages/DetailsVisa";
import LoginScreen from "./src/pages/LoginScreen";
import RegisterScreen from "./src/pages/RegisterScreen";
import OtpPage from "./src/pages/OtgPage";
import MeAbout from "./src/pages/MeAbout";

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
          <Stack.Screen name="RegisterPage" component={RegisterScreen} />
          <Stack.Screen name="OtpPage" component={OtpPage} />
          <Stack.Screen name="AboutMe" component={MeAbout} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default App;
