// MainLayout.tsx
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Wrapper>
        <Header />
        <View style={{ flex: 1 }}>
          {children}
        </View>
        <Footer />
      </Wrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%"
  },
});

export default MainLayout;
