import { StyleSheet, Text, View } from "react-native"
import MainLayout from "./MainLayout";
import Wrapper from "../components/Wrapper";
import MapView, { Marker } from "react-native-maps";


const Profile = () => {
    return (
        <MainLayout>
            <Wrapper>

                <View style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Bizimlə əlaqə</Text>
                </View>
                <View style={styles.controlBoxs}>
                    <View style={styles.boxsOne}>
                        <Text style={styles.firstText}>İş saatları</Text>
                        <Text style={styles.twoText}>09:00-18:00</Text>
                    </View>
                    <View style={styles.boxsOne}>
                        <Text style={styles.firstText}>Elektron poçt</Text>
                        <Text style={styles.twoText}>deutscheakademiebaku@gmail.com</Text>
                    </View>
                    <View style={styles.boxsOne}>
                        <Text style={styles.firstText}>Telefon</Text>
                        <Text style={styles.twoText}>AZE: +994993020101</Text>
                        <Text style={styles.twoText}>DE: +491777464647</Text>
                    </View>
                </View>
                <View style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Ünvan</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 40.4093,
                            longitude: 49.8671,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 40.4093, longitude: 49.8671 }}
                            title="Deutsche Akademie Baku"
                            description="Nərimanov, Bakı"
                        />
                    </MapView>
                </View>

            </Wrapper>
        </MainLayout>
    )
}
const styles = StyleSheet.create({
    headerButton: {
        width: 150,
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
    controlBoxs: {
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 0.1,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
        marginBottom: 20
    },
    boxsOne: {
        padding: 14,
        gap: 8
    },
    firstText: {
        color: "#5B0AA2",
        fontSize: 18,
        lineHeight: 16,
        fontWeight: 500
    },
    twoText: {
        color: "gray",
        fontSize: 14,
        fontWeight: 500
    },
    mapContainer: {
        height: 250,
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 20,
      },
      
      map: {
        ...StyleSheet.absoluteFillObject,
      },
      
})
export default Profile;