import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Wrapper from "../components/Wrapper";
import MainLayout from "./MainLayout";
import { useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../../types";

const MeAbout = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = await AsyncStorage.getItem("token");

      try {
        const response = await axios.get("http://10.0.2.2:8086/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPrice(response.data.price);
        setStatus(response.data.status);
      } catch (error: any) {
        console.error("Kullanıcı bilgisi alınamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleUpdate = async () => {
    const token = await AsyncStorage.getItem("token");

    try {
      await axios.put(
        "http://10.0.2.2:8086/user/change-credentials",
        {
          username,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Alert.alert("Məlumatlar uğurla yeniləndi!");
    } catch (error) {
      console.error("Yeniləmə zamanı xəta baş verdi:", error);
      Alert.alert("Xəta baş verdi!");
    }
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5A55CA" />
        <Text style={styles.loadingText}>Yükleniyor...</Text>
      </View>
    );
  }
  const handleEmailChange = async () => {
    const token = await AsyncStorage.getItem("token");
  
    try {
      await axios.put(
        "http://10.0.2.2:8086/api/auth/change-email", // Backenddə yaratmalı olduğun endpoint
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Alert.alert("Yeni emailə OTP göndərildi. Zəhmət olmasa təsdiqləyin.");
      navigation.navigate("OtpPage",{email})
    } catch (error) {
      console.error("Email dəyişmə zamanı xəta baş verdi:", error);
      Alert.alert("Xəta baş verdi!");
    }
  };
  
  return (
    <MainLayout>
      <Wrapper>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.title}>İstifadəçi Məlumatı</Text>

            {/* Username */}
            <View style={styles.infoBox}>
              <Text style={styles.label}>👤 İstifadəçi Adı:</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                editable={editUsername}
                placeholder="Yeni istifadəçi adı"
              />
              <Button
                title={editUsername ? "Təsdiqlə" : "Dəyişdir"}
                onPress={async () => {
                  if (editUsername) await handleUpdate();
                  setEditUsername(!editUsername);
                }}
                color="#5A55CA"
              />
            </View>

            {/* Email */}
         

            {/* Price */}
            <View style={styles.infoBox}>
              <Text style={styles.label}>💵 Ödədiyiniz Məbləğ:</Text>
              <Text style={styles.input}>{price} manat</Text>
            </View>

            {/* Status */}
            <View style={styles.infoBox}>
              <Text style={styles.label}>🔒 Status:</Text>
              <Text style={styles.input}>{status}</Text>
            </View>

            {/* Password */}
            <View style={styles.infoBox}>
              <Text style={styles.label}>📧 Email:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                editable={editEmail}
                placeholder="Yeni email"
                keyboardType="email-address"
              />
              <Button
                title={editEmail ? "OTP ilə təsdiqlə" : "Dəyişdir"}
                onPress={async () => {
                  if (editEmail) {
                    await handleEmailChange();
                  }
                  setEditEmail(!editEmail);
                }}
                color="#5A55CA"
              />

            </View>
            <View style={styles.infoBox}>
              <Text style={styles.label}>🔐 Şifrə:</Text>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                editable={editPassword}
                placeholder="Yeni şifrə"
                secureTextEntry
              />
              <Button
                title={editPassword ? "Təsdiqlə" : "Dəyişdir"}
                onPress={async () => {
                  if (editPassword) await handleUpdate();
                  setEditPassword(!editPassword);
                }}
                color="#5A55CA"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Wrapper>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
    alignSelf: "center",
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginTop: 6,
    color: "#000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
});

export default MeAbout;
