import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const TestPraktik = () => {
    const navigation = useNavigation<NavigationProp>();

    const levels = ["A1", "A2", "B1", "B2", "C1"];

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Səviyyəni seç</Text>
                {levels.map((level) => (
                    <TouchableOpacity
                        key={level}
                        style={styles.button}
                        onPress={() => navigation.navigate("PracticeQuiz", { level })}
                    >
                        <Text style={styles.buttonText}>{level} səviyyə</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#524FD5",
        padding: 15,
        borderRadius: 10,
        width: "80%",
        marginVertical: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default TestPraktik;
