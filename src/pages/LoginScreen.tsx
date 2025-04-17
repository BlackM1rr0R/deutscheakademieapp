import { Alert, Button, Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import Wrapper from "../components/Wrapper";

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Wrapper style={styles.wrapper}>
                <View style={styles.content}>
                    <Image style={styles.image} source={require("../assets/delogo1.png")} />
                    
                    <TextInput
                        placeholder="İstifadəçi adınız:"
                        style={styles.input}
                        placeholderTextColor="#888"
                    />
                    <TextInput
                        placeholder="Şifrəniz:"
                        style={styles.input}
                        placeholderTextColor="#888"
                        secureTextEntry
                    />

                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <Button
                                title="Daxil ol"
                                onPress={() => Alert.alert("Daxil ol düyməsi klikləndi")}
                                color="#007AFF"
                            />
                        </View>

                        <View style={styles.button}>
                            <Button
                                title="Qeydiyyatdan keçin"
                                onPress={() => Alert.alert("Qeydiyyat düyməsi klikləndi")}
                                color="#34C759"
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
    wrapper: {
        flex: 1,
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
