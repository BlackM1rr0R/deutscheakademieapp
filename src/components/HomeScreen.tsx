import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Wrapper from "./Wrapper";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  return (
    <Wrapper>
      <View style={styles.headerButton}>
        <Text style={styles.headerButtonText}>✨ Yeniliklər</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.cardContainer,
              {
                marginRight: 30, // Her kartın sağına 30 ver
                marginLeft: index === 0 ? 10 : 0, // sadece ilk karta sol boşluk
              },
            ]}
            onPress={() => navigation.navigate("Contact", { student: item })}
          >
            <ImageBackground
              source={item.img}
              style={styles.imageBackground}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.textOverlay}>
                <Text style={styles.cardTitle}>{item.about}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </Wrapper>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    width: 180,
    backgroundColor: "#F3F0FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop:16,
    alignItems: "center",
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  cardContainer: {

    marginTop: 10,
    marginBottom: 10,
  },
  imageBackground: {
    width: 180,
    height: 180,
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
    borderWidth: 0.2,
  },
  cardTitle: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
});

export default HomeScreen;
