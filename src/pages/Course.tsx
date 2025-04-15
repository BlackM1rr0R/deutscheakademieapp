import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import MainLayout from "./MainLayout";
import VerifiedIcon from "../Icons";
import Wrapper from "../components/Wrapper";
import { useState } from "react";


const Course = () => {
    const data = [
        {
            id: 1,
            title: "A1-A2 səviyyə",
            description: "Yeni başlayanlar üçün dərsliklər",
            duration: "Dərsliklər kurs tərəfindən hədiyyə",
            textDesc: "Ali Təhsilli müəllimlərimiz ilə 4 ay",
            textOnline: "Online və Offline dərslər",
            textGroup: "Grup və Fərdi dərslər",
            price: "200 Azn",

        },
        {
            id: 2,
            title: "B1-B2 səviyyə",
            description: "Orta səviyyə üçün mükəmməl dərsliklər",
            duration: "Dərsliklər kurs tərəfindən hədiyyə",
            textDesc: "Ali Təhsilli müəllimlərimiz ilə 5 ay",
            textOnline: "Online və Offline dərslər",
            textGroup: "Grup və Fərdi dərslər",
            price: "300 Azn",

        },
        {
            id: 3,
            title: "C1-C2 səviyyə",
            description: "Almanca əla danışanlar üçün dərsliklər",
            duration: "Dərsliklər kurs tərəfindən hədiyyə",
            textDesc: "Ali Təhsilli müəllimlərimiz ilə 5 ay",
            textOnline: "Online və Offline dərslər",
            textGroup: "Grup və Fərdi dərslər",
            price: "400 Azn",

        }
        

    ]
    const renderItem = ({ item }) => (
        <Pressable
            style={({ pressed }) => [
                styles.mapControl,
                pressed && styles.hoveredStyle
            ]}
        >
            <Text style={styles.courseTitle}>{item.title}</Text>

            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.description}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.duration}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.textDesc}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.textOnline}</Text>
            </View>
            <View style={styles.textRow}>
                <View style={styles.circleIcon} />
                <Text style={styles.textMap}>{item.textGroup}</Text>
            </View>
            <TouchableOpacity style={styles.buttonControl}>
                <Text style={styles.buttonText}>{item.price}</Text>
            </TouchableOpacity>
        </Pressable>
    );

    return (
        <MainLayout>
            <Wrapper>
                <View style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Kurslar</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.controlBorders}
                />
            </Wrapper>
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    headerButton: {
        width: 120,
        backgroundColor: "#F3F0FF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginBottom: 20,
    },
    headerButtonText: {
        fontSize: 16,
        fontWeight: "500",
    },
    mapControl: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
        marginBottom: 20,
    },
    hoveredStyle: {
        backgroundColor: "#E6E0FF",
    },
    controlBorders: {
        backgroundColor: "white",
        width: "98%",
        alignSelf: "center",
        paddingBottom: 20,
    },
    courseTitle: {
        fontSize: 19,
        fontWeight: "700",
        marginBottom: 10,
        textAlign: "left",
    },
    textMap: {
        color: "black",
        fontSize: 16,
        flex: 1,
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    buttonControl: {
        backgroundColor: "#524FD5",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
    },
    circleIcon: {
        width: 7,
        height: 7,
        borderRadius: 10,
        backgroundColor: "gray",
        marginRight: 8,
    },
});
export default Course;