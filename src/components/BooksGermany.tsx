// BooksGermany.tsx
import React from "react";
import {
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import Wrapper from "./Wrapper";

const BooksGermany = () => {
    const data = [
        { id: 1, title: "Səviyyə:", content: "A1-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/A1" },
        { id: 2, title: "Səviyyə:", content: "A2-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/A2" },
        { id: 3, title: "Səviyyə:", content: "B1-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/B1" },
        { id: 4, title: "Səviyyə:", content: "B2-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/B2" },
        { id: 5, title: "Səviyyə:", content: "C1-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/C1" },
        { id: 6, title: "Səviyyə:", content: "C2-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/C2" },
        { id: 7, title: "Dərslik:", content: "FSP-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/FSP" },
        { id: 8, title: "Dərslik:", content: "Grammatika-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/Grammatik" },
        { id: 9, title: "Dərslik:", content: "Lüğətlər-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/Lugetler" },
        { id: 10, title: "Dərslik:", content: "Tibb-PDF", url: "https://disk.yandex.ru/d/-nlGoKSOG9247Q/Tibbi%20Kitablar" },
    ];

    const colors = [
        '#E0F7FA',  // A1 - açık mavi
        '#FFF9C4',  // A2 - pastel sarı
        '#C8E6C9',  // B1 - pastel yeşil
        '#D1C4E9',  // B2 - lila
        '#FFE0B2',  // C1 - açık turuncu
        '#FFCDD2',  // C2 - açık pembe
        '#B2DFDB',  // FSP - mint
        '#F8BBD0',  // Grammatika - pastel pembe
        '#D7CCC8',  // Lüğətlər - taş gri
        '#B3E5FC'   // Tibb - sağlık için açık mavi
    ];

    const screenWidth = Dimensions.get("window").width;

    return (
        <Wrapper>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>
                        📚 Dərsliklər
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
                    {data.map((item, index) => (
                        <View
                            key={item.id}
                            style={[styles.card, { backgroundColor: colors[index % colors.length], width: screenWidth * 0.7 }]}
                        >
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.cardContent}>{item.content}</Text>

                            <TouchableOpacity
                                style={styles.downloadButton}
                                onPress={() => Linking.openURL(item.url)}
                            >
                                <Text style={styles.downloadButtonText}>📥 Yüklə</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        width: 180,
        backgroundColor: "#F3F0FF",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        marginTop:16,
        textAlign: "center",
        alignItems: "center",
    },
    headerButtonText: {
        fontSize: 16,
        fontWeight: "500",

    },
 
    scrollContainer: {
       
    },
    card: {
        width: 250,
        margin: 15,
        marginLeft: 0,
        padding: 20,
        borderRadius: 20,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },

    cardButton: {
        backgroundColor: "#4F46E5",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: "flex-start",
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
        color: "#1E293B",
    },
    cardContent: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10,
        color: "#111827",
    },
    downloadButton: {
        backgroundColor: "#4F46E5",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignSelf: "flex-start",
    },
    downloadButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
});

export default BooksGermany;
