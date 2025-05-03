import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../types";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [username, setUsername] = useState<string | null>(""); // Username durumunu ekle
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const translateX = useRef(new Animated.Value(-500)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current;

    // Giriş yaptıysanız, username'i AsyncStorage'dan al
    useEffect(() => {
        const getUserData = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                // Token varsa, username al
                const storedUsername = await AsyncStorage.getItem("username");
                if (storedUsername) {
                    setUsername(storedUsername); // Eğer username varsa, set et
                } else {
                    setUsername("Misafir"); // Eğer username yoksa, Misafir olarak göster
                }
            } else {
                setUsername(""); // Eğer token yoksa, Misafir olarak göster
            }
        };

        getUserData();
    }, []);

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

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("username");
        setUsername(null); // Çıkış yaptıktan sonra username'i temizle
        navigation.navigate("LoginPage"); // Giriş sayfasına yönlendir
        console.log("Cikis basarili" + "token silindi")
    };
    const aboutMe = async () => {
        useEffect(() => {

        })
    }
    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Animated.Image
                        source={
                            menuOpen
                                ? require("../assets/close.png")
                                : require("../assets/hamburger.jpg")
                        }
                        style={[styles.hamburger, { transform: [{ rotate }] }]}
                    />
                </TouchableOpacity>

                {username && username !== "" ? ( // Eğer giriş yapılmışsa username'i göster
                    <View style={styles.userInfo}>
                        <Text onPress={() => navigation.navigate("AboutMe")} style={styles.title}>
                            {username}
                        </Text>

                        <TouchableOpacity onPress={handleLogout}>
                            <Image style={{ width: 16, height: 16 }} source={require("../assets/exit.png")} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
                        <Text style={styles.title}>Giriş Et</Text>
                    </TouchableOpacity>
                )}

                <Image source={require("../assets/delogo1.png")} style={styles.logo} />
            </View>

            {/* Menü İçeriği */}
            <Animated.View style={[styles.menu, { transform: [{ translateX }] }]}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
        fontWeight: "700",
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: "#F3F0FF",
    },
    logout: {
        fontSize: 14,
        color: "red",
        paddingLeft: 20,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 20,
        backgroundColor: "#F3F0FF",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#F3F0FF",
        borderRadius:20,
        paddingLeft:20,
        paddingRight:20
    },
    menu: {
        position: "absolute",
        left: 0,
        top: 100,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#F3F0FF",
        padding: 20,
        zIndex: 99999999,
    },
    menuItem: {
        color: "black",
        fontSize: 14,
        marginVertical: 10,
        paddingLeft: 20,
        width: 150,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
});

export default Header;
