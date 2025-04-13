import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import Wrapper from "./Wrapper";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigation = useNavigation();
    const translateX = useRef(new Animated.Value(-500)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        Animated.timing(translateX, {
            toValue: menuOpen ? -500 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();

        Animated.timing(rotateAnim, {
            toValue: menuOpen ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        setMenuOpen(!menuOpen);
    };
    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"],
    });

    return (
        <>
            <View style={styles.header}>
            <TouchableOpacity onPress={toggleMenu}>
                    <Animated.Image
                        source={
                            menuOpen
                                ? require("../assets/close.png") // Açıkken X
                                : require("../assets/hamburger.jpg") // Kapalıyken Hamburger
                        }
                        style={[styles.hamburger, { transform: [{ rotate }] }]}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Sosialda Biz</Text>
                <Image source={require("../assets/delogo1.png")} style={styles.logo} />


        
            </View>

            {/* Menü İçeriği */}
            <Animated.View style={[styles.menu, { transform: [{ translateX }] }]}>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.menuItem}>Ana Səhifə</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Course")}>
                    <Text style={styles.menuItem}>Kurslar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("About")}>
                    <Text style={styles.menuItem}>Xidmətlər</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
                    <Text style={styles.menuItem}>Haqqımızda</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.menuItem}>Əlaqə</Text>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        backgroundColor: "white",
  
  
    },
    logo: {
        width: 70,
        height: 70,
    },
    hamburger: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 14,
        color: "black",
        fontWeight:700,
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: "#F3F0FF"
    },
    menu: {
        position: "absolute",
        left: 0,
        top: 100,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#F3F0FF",
        padding: 20,
        zIndex:99999999
    },
    menuItem: {
        color: "black",
        fontSize: 14,
        marginVertical: 10,
        paddingLeft: 20,
        width:150,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: "white"
    }
});

export default Header;
