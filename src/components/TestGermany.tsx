import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Wrapper from "./Wrapper";

const TestGermany = () => {
    return (
        <>
            <Wrapper>

                <ScrollView>
                    <View style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>
                            Yeniliklər
                        </Text>
                    </View>
                </ScrollView >

            </Wrapper>
            <View style={styles.controlBorder}>

                <View style={styles.leftText}>
                    <Text style={{ color: "#524FD5", fontSize: 16, fontWeight: "700", fontFamily: "Plus Jakarta Sans" }}>
                        Alman Dili
                    </Text>
                    <Text style={{ color: "#444444", fontSize: 14, fontWeight: "700", fontFamily: "Plus Jakarta Sans" }}>
                        səviyyəni öyrən
                    </Text>
                    <View style={styles.testButton}>
                        <Text style={{ color: "white", fontSize: 14, fontWeight: "600", fontFamily: "Plus Jakarta Sans" }}>
                            Testə başla
                        </Text>
                    </View>
                </View>
                <View >
                    <Image style={{ width: 90, height: 90 }} source={require("../assets/deutschetest1.png")} alt="" />
                </View>

            </View>

        </>

    )
}
const styles = StyleSheet.create({
    headerButton: {
        marginTop: 20,
        width: 120,
        backgroundColor: "#F3F0FF",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        textAlign: "center",
        alignItems: "center",
    },
    headerButtonText: {
        fontSize: 16,
        fontWeight: "500",

    },
    controlBorder: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "94%",
        margin: "auto",
        alignSelf: "center",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#fff", // Kölgə görünməsi üçün vacibdir
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Android üçün kölgə
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    testButton: {
        marginTop: 10,
        backgroundColor: "#524FD5",
        width: 100,
        alignItems: "center",
        padding: 10,
        borderRadius: 12
    },
    leftText: {
        padding: 0,
        margin: 0,
        alignItems:"center",
        justifyContent: "center",
    }

})
export default TestGermany;