import { Animated, Image, ScrollView, StyleSheet, Text, View, Easing } from "react-native";
import MainLayout from "./MainLayout";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/native";

// Define your route parameters
type RouteParams = {
  student?: any;
};

type ContactRouteProp = RouteProp<{ Contact: RouteParams }, 'Contact'>;

const Contact = () => {
  const data = [
    {
        id: 1,
        title: "Ausbildung",
        content: "Tofig Abdullayev",
        description: "Almaniyada peşə təhsili almaq istəyən şəxslərə verilir. Bu viza vasitəsilə, namizədlər Almaniyada seçdikləri bir peşə sahəsində həm təcrübi, həm də nəzəri biliklər əldə edə bilərlər. Peşə təhsili proqramları müxtəlif sahələrdə mövcuddur və tələbələrə öz ixtisaslarına uyğun bilik və bacarıqlar qazanmaq imkanı verir."
    },
    {
        id: 2,
        title: "İş",
        content: "Məhəmməd Şahverdiyev",
        description: "Almaniyada peşə təhsili almaq istəyən şəxslərə verilir. Bu viza vasitəsilə, namizədlər Almaniyada seçdikləri bir peşə sahəsində həm təcrübi, həm də nəzəri biliklər əldə edə bilərlər. Peşə təhsili proqramları müxtəlif sahələrdə mövcuddur və tələbələrə öz ixtisaslarına uyğun bilik və bacarıqlar qazanmaq imkanı verir."
    },
    {
        id: 3,
        title: "Təhsil",
        content: "Hüseyn Allahverdiyev",
        description: "Almaniyada ali təhsil almaq istəyən xarici tələbələrə verilən viza növüdür. Bu viza, Almaniyanın universitetlərində və digər təhsil müəssisələrində təhsil almaq üçün tələb olunan hüquqi statusu təmin edir. Təhsil vizası ilə tələbələr təhsillərini davam etdirmək və Almaniyada yaşamaq imkanına malik olurlar."
    },
    {
        id: 4,
        title: "Ailə Birləşimi",
        content: "Ənvər Axundov",
        description: "Almaniyada yaşayan bir ailə üzvünün yanına köçmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza ailə üzvlərinin birlikdə yaşaması üçün hüquqi zəmin yaradır və onların Almaniyada yaşayaraq ailə həyatlarını davam etdirməsinə imkan verir."
    },
    {
        id: 5,
        title: "Weiterbildung",
        content: "Niyazi Piriyev",
        description: "Almaniyada peşəkar inkişaf və ya ixtisasartırma kurslarında iştirak etmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza, şəxslərin öz sahələrində əlavə bilik və bacarıqlar qazanmasını təmin edir və onların karyera imkanlarını artırır."
    },
    {
        id: 6,
        title: "Turist",
        content: "Nəzrin Qurbanova",
        description: "Qısa müddətlik səfərlər üçün Almaniyaya səyahət etmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza, turistlərə Almaniyanın tarixi yerlərini, mədəniyyətini, təbiətini və şəhərlərini kəşf etmək üçün imkan yaradır."
    },
    {
        id: 7,
        title: "Şans Kartı",
        content: "Azər Quliyev",
        description: "Almaniyada iş imkanlarını araşdırmaq və iş tapmaq istəyən xarici vətəndaşlara verilən xüsusi bir viza növüdür. Bu viza, şəxslərə Almaniyada müəyyən müddət ərzində yaşamaq və iş bazarında uyğun iş tapmaq imkanı verir."
    },
]

  // Animated values
  const [animated450, setAnimated450] = useState(new Animated.Value(0));
  const [animated242, setAnimated242] = useState(new Animated.Value(0));
  const [animated100, setAnimated100] = useState(new Animated.Value(0));
  const [animated50, setAnimated50] = useState(new Animated.Value(0));

  // Use the route hook with the correctly typed RouteParams
  const route = useRoute<ContactRouteProp>();
  const { student } = route.params || {};

  // Function to animate numbers
  const animateNumbers = (numValue: Animated.Value) => {
    return Animated.timing(numValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    });
  };

  useEffect(() => {
    // Start animations when the component mounts
    Animated.parallel([
      animateNumbers(animated450),
      animateNumbers(animated242),
      animateNumbers(animated100),
      animateNumbers(animated50),
    ]).start();
  }, []);

  // Interpolated values for animated numbers
  const count450 = animated450.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 450],
  });

  const count242 = animated242.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 242],
  });

  const count100 = animated100.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const count50 = animated50.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  return (
    <MainLayout>
      <Wrapper>
        <ScrollView>
          {/* Image and Text components */}
          <View style={styles.imageControl}>
            <Image source={require("../assets/haggimizda.png")} />
          </View>
          <View style={styles.textControl}>
            <View style={styles.textEdit}>
              <View style={styles.almanText}>
                <Text style={styles.orginalText}>Alman Dilini Online</Text>
              </View>
              <Text style={styles.moreText}>Və Offline</Text>
              <Text style={styles.moreText}>Öyrənməyə Unikal Yanaşma</Text>
              <View style={styles.redLine} />
            </View>
          </View>
          <Text style={styles.ugurText}>Uğurlarımız Haqqında</Text>
          <View style={styles.controlBoxs}>
            <View style={styles.boxs}>
              <Animated.Text style={styles.numberText}>{count450}+</Animated.Text>
              <Text style={styles.textAbout}>Tələbəmiz</Text>
            </View>
            <View style={styles.boxs}>
              <Animated.Text style={styles.numberText}>{count242}+</Animated.Text>
              <Text style={styles.textAbout}>Qəbulumuz</Text>
            </View>
            <View style={styles.boxs}>
              <Animated.Text style={styles.numberText}>{count100}+</Animated.Text>
              <Text style={styles.textAbout}>Almaniyada</Text>
            </View>
            <View style={styles.boxs}>
              <Animated.Text style={styles.numberText}>{count50}+</Animated.Text>
              <Text style={styles.textAbout}>Sertifikatlı</Text>
            </View>
          </View>

          <Text style={styles.ugurText}>Tələbələrimizin Rəyləri</Text>

          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {student ? (
              data.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.cardTitle}>Adı: {item.content}</Text>
                  <Text style={styles.cardTitle}>Sahəsi: {item.title}</Text>
                  <Text ellipsizeMode="tail" numberOfLines={5} style={styles.cardDescription}>
                    {item.description}
                  </Text>
                </View>
              ))
            ) : (
              data.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.cardTitle}>Adı: {item.content}</Text>
                  <Text style={styles.cardTitle}>Sahəsi: {item.title}</Text>
                  <Text ellipsizeMode="tail" numberOfLines={5} style={styles.cardDescription}>
                    {item.description}
                  </Text>
                </View>
              ))
            )}
          </ScrollView>

          <Text style={styles.ugurText}>Qısa məlumat</Text>
          <Text style={styles.descriptionText}>
            Deutsche Akademie Baku 2023-cü ildən fəaliyyət göstərən və alman dilini öyrənmək, Almaniyada yaşamaq, işləmək və təhsil almaq istəyən şəxslərə tam dəstək göstərən bir kurs və konsultasiya mərkəzidir.
          </Text>
          {/* Additional content here */}
        </ScrollView>
      </Wrapper>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  imageControl: {
    backgroundColor: "#F3F0FF",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 28,
    color: "#333",
    fontFamily: "Plus Jakarta Sans",
    marginBottom: 15,
  },
  textControl: {
    marginTop: 20,
  },
  textEdit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    fontWeight: "700",
    color: "gray",
    lineHeight: 50,
    fontFamily: "Plus Jakarta Sans",
    fontSize: 34,
    textAlign: "center",
  },
  orginalText: {
    fontWeight: "700",
    color: "black",
    lineHeight: 50,
    fontFamily: "Plus Jakarta Sans",
    fontSize: 34,
    textAlign: "center",
    zIndex: 999999,
  },
  almanText: {
    backgroundColor: "#F3F0FF",
    width: 300,
    position: "relative",
  },
  redLine: {
    position: "absolute",
    top: 10,
    left: 30,
    right: 0,
    height: 30,
    backgroundColor: "#F9E8CD",
    width: 300,
    borderRadius: 20,
  },
  ugurText: {
    fontWeight: "700",
    color: "black",
    lineHeight: 50,
    fontFamily: "Plus Jakarta Sans",
    fontSize: 16,
    marginTop: 20,
  },
  controlBoxs: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    alignItems: "center",
    gap: 20,
  },
  numberText: {
    fontWeight: "700",
    fontSize: 24,
    color: "black",
  },
  textAbout: {
    fontWeight: "600",
    fontSize: 16,
    color: "black",
  },
  boxs: {
    backgroundColor: "#F3F0FF",
    width: "45%",
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 250,
    margin: 15,
    marginLeft: 0,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F3F0FF",
    borderWidth: 0.5,
    borderColor: "#dedede",
  },
  cardTitle: {
    fontWeight: "700",
    fontSize: 18,
    color: "black",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});

export default Contact;
