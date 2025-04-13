// AboutComp.tsx
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Wrapper from "./Wrapper";

const AboutComp = () => {
  const data = [
    {
      id: 1,
      title: "Ausbildung",
      content: "Vizası",
      description: "Almaniyada peşə təhsili almaq istəyən şəxslərə verilir. Bu viza vasitəsilə, namizədlər Almaniyada seçdikləri bir peşə sahəsində həm təcrübi, həm də nəzəri biliklər əldə edə bilərlər. Peşə təhsili proqramları müxtəlif sahələrdə mövcuddur və tələbələrə öz ixtisaslarına uyğun bilik və bacarıqlar qazanmaq imkanı verir."
    },
    {
      id: 2,
      title: "İş",
      content: "Vizası",
      description: "Almaniyada peşə təhsili almaq istəyən şəxslərə verilir. Bu viza vasitəsilə, namizədlər Almaniyada seçdikləri bir peşə sahəsində həm təcrübi, həm də nəzəri biliklər əldə edə bilərlər. Peşə təhsili proqramları müxtəlif sahələrdə mövcuddur və tələbələrə öz ixtisaslarına uyğun bilik və bacarıqlar qazanmaq imkanı verir."
    },
    {
      id: 3,
      title: "Təhsil",
      content: "Vizası",
      description: "Almaniyada ali təhsil almaq istəyən xarici tələbələrə verilən viza növüdür. Bu viza, Almaniyanın universitetlərində və digər təhsil müəssisələrində təhsil almaq üçün tələb olunan hüquqi statusu təmin edir. Təhsil vizası ilə tələbələr təhsillərini davam etdirmək və Almaniyada yaşamaq imkanına malik olurlar."
    },
    {
      id: 4,
      title: "Ailə Birləşimi",
      content: "Vizası",
      description: "Almaniyada yaşayan bir ailə üzvünün yanına köçmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza ailə üzvlərinin birlikdə yaşaması üçün hüquqi zəmin yaradır və onların Almaniyada yaşayaraq ailə həyatlarını davam etdirməsinə imkan verir."
    },
    {
      id: 5,
      title: "Weiterbildung",
      content: "Vizası",
      description: "Almaniyada peşəkar inkişaf və ya ixtisasartırma kurslarında iştirak etmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza, şəxslərin öz sahələrində əlavə bilik və bacarıqlar qazanmasını təmin edir və onların karyera imkanlarını artırır."
    },
    {
      id: 6,
      title: "Turist",
      content: "Vizası",
      description: "Qısa müddətlik səfərlər üçün Almaniyaya səyahət etmək istəyən xarici vətəndaşlara verilən viza növüdür. Bu viza, turistlərə Almaniyanın tarixi yerlərini, mədəniyyətini, təbiətini və şəhərlərini kəşf etmək üçün imkan yaradır."
    },
    {
      id: 7,
      title: "Şans Kartı",
      content: "Vizası",
      description: "Almaniyada iş imkanlarını araşdırmaq və iş tapmaq istəyən xarici vətəndaşlara verilən xüsusi bir viza növüdür. Bu viza, şəxslərə Almaniyada müəyyən müddət ərzində yaşamaq və iş bazarında uyğun iş tapmaq imkanı verir."
    },
  ]
  const colors = ['#F6E8CD', '#DBD6F3', '#DCFCE7', '#FDE68A', '#E9D5FF', '#CFFAFE', '#FCD34D'];

  return (
    <Wrapper>
      <ScrollView style={{ flex: 1 }}>
        <View >
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>
              Xidmətlərimiz
            </Text>
          </View>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => (
              <View key={item.id} style={[styles.card, { backgroundColor: colors[index % colors.length] }]}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardTitle}>{item.content}</Text>
                <Text  ellipsizeMode="tail" numberOfLines={5} style={styles.cardDescription}>{item.description}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </Wrapper>

  );
};
const styles = StyleSheet.create({
  headerButton: {
    marginTop: 20,
    width: 140,
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
  card: {
    width: 250,
    margin: 15,
    marginLeft: 0,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Plus Jakarta Sans"
  },
  cardDescription: {
    marginTop:10,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Plus Jakarta Sans"

  }
});

export default AboutComp;
