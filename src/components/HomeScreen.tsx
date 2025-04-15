import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Wrapper from "./Wrapper";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
      img: require("../assets/tofig.jpeg"),
      about: "Tələbəmizin uğur hekayəsi"
    },
    {
      id: 2,
      img: require("../assets/tofig.jpeg"),
      about: "Tələbəmizin uğur hekayəsi"
    },
    {
      id: 3,
      img: require("../assets/tofig.jpeg"),
      about: "Tələbəmizin uğur hekayəsi"
    },
    {
      id: 4,
      img: require("../assets/tofig.jpeg"),
      about: "Tələbəmizin uğur hekayəsi"
    },
    {
      id: 5,
      img: require("../assets/tofig.jpeg"),
      about: "Tələbəmizin uğur hekayəsi"
    },
  ];

  return (
    <Wrapper>
      <View style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Yeniliklər</Text>
      </View>

      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <ImageBackground source={item.img} style={styles.imageBackground} imageStyle={styles.imageStyle}>
              <View style={styles.textOverlay}>
                <Text style={styles.cardTitle}>{item.about}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    width: 120,
    backgroundColor: "#F3F0FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardContainer: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  imageBackground: {
    width: 150,
    height: 150,
    justifyContent: "flex-end",

  },
  imageStyle: {
    borderRadius: 20,
  },
  textOverlay: {
    backgroundColor: "white",
    padding: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
  },
  cardTitle: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
});

export default HomeScreen;
