import {
    Alert,
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../types";
import { loginUser } from "../assets/api/AllApi";
const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState(""); // düzeltildi
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await loginUser(email, password); // <-- düzeltildi
    
            if (response) {
                console.log("Giriş başarılı:", response.data);

                navigation.navigate("Home");
            } else {
                Alert.alert("Hata", "Email veya şifre yanlış!");
            }
    
        } catch (error: unknown) {
            console.error("API hatası:", error);
    
            if (error instanceof AxiosError) {
                if (error.response) {
                    if (error.response.status === 401) {
                        Alert.alert("Hata", "Email veya şifre yanlış!");
                    } else if (error.response.data && error.response.data.message) {
                        Alert.alert("Hata", error.response.data.message);
                    } else {
                        Alert.alert("Hata", "Bağlantı problemi oldu!");
                    }
                } else {
                    Alert.alert("Hata", "Bağlantı problemi oldu!");
                }
            } else {
                Alert.alert("Hata", "Bilinmeyen bir hata oluştu!");
            }
        }
    };
    



    return (
        <SafeAreaView style={styles.container}>
            <Wrapper>
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={require("../assets/delogo1.png")}
                    />

                    <TextInput
                        placeholder="İstifadəçi adınız:"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholderTextColor="#888"
                        autoCapitalize="none"
                    />
                    <TextInput
                        placeholder="Şifrəniz:"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholderTextColor="#888"
                        secureTextEntry
                    />

                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <Button title="Daxil ol" onPress={handleLogin} color="#007AFF" />
                        </View>

                        <View style={styles.button}>
                            <Button
                                title="Qeydiyyatdan keçin"
                                onPress={() => navigation.navigate("RegisterPage")}
                                color="#34C759"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Ana səhifə"
                                onPress={() => navigation.navigate("Home")}
                                color="black"
                            />
                        </View>
                    </View>
                </View>
            </Wrapper>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    input: {
        width: "100%",
        maxWidth: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    buttonWrapper: {
        width: "100%",
        maxWidth: 300,
        marginTop: 10,
    },
    button: {
        marginBottom: 10,
    },
});

export default LoginScreen;
