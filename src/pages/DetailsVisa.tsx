import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import MainLayout from "./MainLayout";
  import Wrapper from "../components/Wrapper";
  import { useRoute } from "@react-navigation/native";
  
  const DetailsVisa = () => {
    const route = useRoute();
    const { item } = route.params;
  
    return (
      <MainLayout>
        <Wrapper>
          <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{item.title}</Text>
  
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ətraflı məlumat</Text>
              <Text style={styles.sectionText}>{item.detailsvisa}</Text>
            </View>
  
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Konsulluq prosesi</Text>
              <Text style={styles.sectionText}>{item.consolvise}</Text>
            </View>
  
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Vizanın mahiyyəti</Text>
              <Text style={styles.sectionText}>{item.textVisa}</Text>
            </View>
          </ScrollView>
        </Wrapper>
      </MainLayout>
    );
  };
  
  const styles = StyleSheet.create({
    scrollContainer: {
      paddingBottom: 30,
    },
    title: {
      fontSize: 22,
      fontWeight: "700",
      color: "#524FD5",
      textAlign: "center",
      marginBottom: 20,
    },
    section: {
      backgroundColor: "#F3F0FF",
      borderRadius: 16,
      padding: 20,
      marginBottom: 20,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#333",
      marginBottom: 10,
    },
    sectionText: {
      fontSize: 16,
      lineHeight: 24,
      color: "#444",
      textAlign: "justify",
    },
  });
  
  export default DetailsVisa;
  