import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const handleCallPress = () => {
    Linking.openURL("tel:+994507487048");
  };

  return (
    <View style={styles.headerContent}>
      <View style={styles.controlText}>
        <Text style={styles.violetText}>Bu Gün Nə Öyrənmək İstəyirsən?</Text>
        <View style={styles.controlParagraph}>

        <Text style={styles.textParagraph}>Sənə kömək edəcək onlayn və oflayn məktəbimizə qoşul.</Text>
        <Text style={styles.textParagraph}>Öyrənməyə başla</Text>
        </View>
        {/* <TouchableOpacity onPress={handleCallPress} style={styles.callButton}>
          <Text style={styles.callText}>Əlaqə saxla:+994507487048</Text>
        </TouchableOpacity> */}
      </View>
      {/* <View style={styles.logoView}>
        <Image style={styles.logo} source={require("../assets/screenphoto3.png")} alt="" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    gap: 0,
    backgroundColor: "#fff",
  },
  controlText: {
    flex: 1,
    gap: 10,
  },
  controlParagraph:{
    marginBottom: 10,
    padding: 0,
  },
  textParagraph:{
    color:"#868686",
    fontWeight:500,
    fontSize: 16,
    margin:0,
    padding:0
  },
  logoView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20
  },
  logo: {
    width: "100%",
    height: 360,
    marginBottom: 10,
    resizeMode: "cover",
    borderRadius: 10,
  },
  callButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "violet",
    borderRadius: 5,
    alignItems: "center",
  },
  callText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
  },

  // Metin renkleri
  violetText: {
    color: "black",
    fontWeight: "700",
    fontSize: 22,
  },
  blackText: {
    color: "black",
  },
  flagTextBlack: {
    color: "red",
    fontWeight: "bold",
  },
  flagTextRed: {
    color: "red",
    fontWeight: "bold",
  },
  flagTextYellow: {
    color: "#febd00",
    fontWeight: "900",
  },
});

export default HomeScreen;
