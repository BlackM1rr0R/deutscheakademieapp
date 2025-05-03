import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import { useState } from "react";
import axios from "axios";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type OtpPageProps = {
    route: RouteProp<RootStackParamList, "OtpPage">;
    navigation: NativeStackNavigationProp<RootStackParamList>;
};

const OtpPage: React.FC<OtpPageProps> = ({ route, navigation }) => {
    const [otp, setOtp] = useState("");
    const { email } = route.params;

    const handleVerify = async () => {
        try {
            const response = await axios.post(
                `http://10.0.2.2:8086/api/auth/verify?email=${email}&otp=${otp}` // Query parametreleri
            );
    
            if (response.status === 200 && response.data === "Email uğurla təsdiqləndi") {
                Alert.alert("Uğurlu", "OTP təsdiqləndi");
                navigation.navigate("LoginPage"); // Başarıyla giriş sayfasına yönlendir
            } else {
                Alert.alert("Xəta", response.data || "Bir şeyler yanlış gitti.");
            }
        } catch (error: any) {
            console.error("OTP doğrulama xətası:", error);
            Alert.alert("Xəta", error.response?.data || "Doğrulama zamanı problem oldu.");
        }
    };
    

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.emailText}>{email}</Text>

            <TextInput
                style={styles.input}
                placeholder="OTP kodunu daxil edin"
                onChangeText={setOtp}
                value={otp}
                keyboardType="numeric"
            />
            <Button title="Təsdiqlə" onPress={handleVerify} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
    },
    emailText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
});

export default OtpPage;
