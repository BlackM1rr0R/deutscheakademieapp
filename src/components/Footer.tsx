import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../types";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const menuItems = [
    { name: "Home", label: "Ana Səhifə", icon: require("../assets/homeicon.png") },
    { name: "Course", label: "Kurslar", icon: require("../assets/bookicon.png") },
    { name: "About", label: "Haqqımızda", icon: require("../assets/personalcard.png") },
    { name: "Contact", label: "Əlaqə", icon: require("../assets/userprofile.png") },
    { name: "Profile", label: "Profil", icon: require("../assets/mobile.png") },
];

export const Footer = () => {
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute(); // aktiv route

    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e0e0e0"
        }}>
            {menuItems.map((item, index) => {
                const isActive = route.name === item.name;
                const tintColor = isActive ? "#524FD5" : "#888";
                const labelColor = isActive ? "#524FD5" : "#888";

                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate(item.name as keyof RootStackParamList)}
                        style={{ alignItems: "center" }}
                    >
                        <Image source={item.icon} style={{ width: 26, height: 26, tintColor }} />
                        <Text style={{ fontSize: 12, color: labelColor, marginTop: 4 }}>{item.label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
