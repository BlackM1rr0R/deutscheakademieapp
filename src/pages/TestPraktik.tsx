import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
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
            <ScrollView contentContainerStyle={styles.container}>
                <Header />

                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.leftArrowImage} source={require("../assets/leftarrow.png")} />
                    <Text style={styles.leftBackText}>Geri</Text>
                </TouchableOpacity>

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
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        height: "100%",
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 20,
        color: "#524FD5",
    },
    button: {
        backgroundColor: "#524FD5",
        padding: 15,
        borderRadius: 10,
        width: "80%",
        marginVertical: 8,
        alignItems: "center",
        alignSelf: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    leftArrowImage: {
        width: 16,
        height: 16,
    },
    leftBackText: {
        fontSize: 24,
        fontWeight: "600",
        color: "#524FD5",
        marginLeft: 10,
    },
});

export default TestPraktik;
