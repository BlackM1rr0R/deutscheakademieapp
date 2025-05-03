import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';

const API_KEY = "http://10.0.2.2:8086";

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_KEY}/api/auth/signin`, {
            email: email,
            password: password,
        });

        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("username", response.data.username);
        Alert.alert("Giriş edildi");

        return response; // ✅ Bu satır artık handleLogin'de "response" olarak döner
    } catch (error) {
        throw error;
    }
};


// Kullanıcı kaydını gerçekleştiren fonksiyon
export const registerUser = async (username, password, email) => {
    try {
        const response = await axios.post(`${API_KEY}/api/auth/signup`, {
            username,
            password,
            email
        });

        console.log('Register response:', response.data);  // Kaydolma cevabını konsola yazdır
    } catch (error) {
        console.error('Register error:', error.response?.data || error.message);  // Hata mesajı
    }
};

// Kullanıcı bilgilerini getiren fonksiyon
export const getUserInfo = async (token, username) => {
    try {
        const response = await axios.get(`${API_KEY}/user/info?username=${username}`, {
            headers: {
                Authorization: `Bearer ${token}`  // Authorization header ile token gönderiliyor
            }
        });

        console.log('User Info:', response.data);  // Kullanıcı bilgilerini konsola yazdır
    } catch (error) {
        console.error('Get User Info error:', error.response?.data || error.message);  // Hata mesajı
    }
};

// Kullanıcı durumunu güncelleyen fonksiyon
export const updateUserStatus = async (token, username, status) => {
    try {
        const response = await axios.put(`${API_KEY}/user/update-status`, null, {
            params: { username, status },
            headers: {
                Authorization: `Bearer ${token}`  // Authorization header ile token gönderiliyor
            }
        });

        console.log('Updated user:', response.data);  // Güncellenmiş kullanıcı bilgisini konsola yazdır
    } catch (error) {
        console.error('Update status error:', error.response?.data || error.message);  // Hata mesajı
    }
};
