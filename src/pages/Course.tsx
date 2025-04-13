import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MainLayout from "./MainLayout";
import VerifiedIcon from "../Icons";

const Course = () => {
    const data = [
        {
            id: 1,
            title: "A1-A2 Səviyyə",
            description: "Yeni başlayanlar üçün dərsliklər",
            duration: "Dərsliklər kurs tərəfindən hədiyyə",
            textDesc: "Ali Təhsilli müəllimlərimiz ilə 4 ay",
            textOnline: "Online və Offline dərslər",
            textGroup: "Grup və Fərdi dərslər",
            price: "200 Azn",
            image: require("../assets/a+.png")
        },
        {
            id: 2,
            title: "B1-B2 Səviyyə",
            description: "Orta səviyyə üçün mükəmməl dərsliklər",
            duration: "Dərsliklər kurs tərəfindən hədiyyə",
            textDesc: "Ali Təhsilli müəllimlərimiz ilə 5 ay",
            textOnline: "Online və Offline dərslər",
            textGroup: "Grup və Fərdi dərslər",
            price: "300 Azn",
            image: require("../assets/b+.png")
        },
        {
            id: 3,
            title: "C1-C2 Səviyyə",
            description: "Almanca əla danışanlar üçün dərsliklər",
            duration: "Dərsliklər kurs tərəfindən hədiyyə",
            textDesc: "Ali Təhsilli müəllimlərimiz ilə 5 ay",
            textOnline: "Online və Offline dərslər",
            textGroup: "Grup və Fərdi dərslər",
            price: "400 Azn",
            image: require("../assets/c+.png")
        },
        {
            id: 4,
            title: "İş Vizası",
            description: "İş yeri ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "2500 Euro",
            image: require("../assets/workicon.png")
        },
        {
            id: 5,
            title: "Təhsil Vizası",
            description: "Universitet ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "1500 Euro",
            image: require("../assets/studenticon.png")
        },
        {
            id: 6,
            title: "Ausbildung Vizası",
            description: "Ausbildung şirkəti ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "1500 Euro",
            image: require("../assets/ausbildungicon.png")
        },
        {
            id: 7,
            title: "Ailə Birləşimi Vizası",
            description: "Almaniya ilə razılıq",
            duration: "Sertifikatın alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "1700 Euro",
            image: require("../assets/familyicon.png")
        },
        {
            id: 8,
            title: "Praktikant Vizası",
            description: "Praktikum şirkəti ilə müsahibə",
            duration: "Müqavilənin alınması",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "2000 Euro",
            image: require("../assets/weiterbildungicon.png")
        },
        {
            id: 9,
            title: "Turist Vizası",
            description: "Schengen vizanın alınmağı",
            duration: "Səfirliyə hazırlıq",
            textDesc: "Sənədlərin yığılması",
            textOnline: "Viza dəstəyi",
            textGroup: "Ev ilə təmin olunma",
            price: "500 Euro",
            image: require("../assets/tourist.png")
        },

    ]
    return (
        <MainLayout>

            <Text>
                <View style={styles.controlBorders}>
                    {data.map((course) => (
                        <View style={styles.mapControl} key={course.id}>
                            <Image source={course.image} style={styles.images} />
                            <Text style={{ fontSize: 19, paddingLeft: 10, fontWeight: 700 }}>{course.title}</Text>
                            <View style={styles.textRow}>
                                <VerifiedIcon />
                                <Text style={styles.textMap}>{course.description}</Text>
                            </View>
                            <View style={styles.textRow}>
                                <VerifiedIcon />
                                <Text style={styles.textMap}>{course.duration}</Text>
                            </View>
                            <View style={styles.textRow}>
                                <VerifiedIcon />
                                <Text style={styles.textMap}>{course.textDesc}</Text>
                            </View>
                            <View style={styles.textRow}>
                                <VerifiedIcon />
                                <Text style={styles.textMap}>{course.textOnline}</Text>
                            </View>
                            <View style={styles.textRow}>
                                <VerifiedIcon />
                                <Text style={styles.textMap}>{course.textGroup}</Text>
                            </View>

                            <TouchableOpacity style={styles.buttonControl}>
                                <Text style={styles.buttonText}>{course.price}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </Text>
        </MainLayout>
    )
}
const styles = StyleSheet.create({
    mapControl: {
        padding: 20,
        borderWidth: 1,
        borderColor: "blue",
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        gap: 20,
        alignItems: "center", // <--- Bu sətir əlavə olundu
    },
    controlBorders: {
        width: "100%",
        gap: 20,
        paddingBottom: 20

    },
    textMap: {
        color: "black",
        fontSize: 16,
        width: "100%",
        paddingLeft: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 0

    },

    buttonControl: {
        backgroundColor: "#524FD5",
        padding: 10,
        borderRadius: 10,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 700,
        textAlign: "center",
    },
    images: {
        margin: 10,
        width: 80,
        height: 80,
    }
})
export default Course;