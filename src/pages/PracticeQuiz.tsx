import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import Header from "../components/Header";
import quizData from '../assets/data/quizData.json'
import { QuestionType } from "../../QuestionType";
import { RootStackParamList } from "../../types";
type QuizScreenRouteProp = RouteProp<RootStackParamList, "PracticeQuiz">;

const PracticeQuiz = () => {
    const navigation = useNavigation();
    const route = useRoute<QuizScreenRouteProp>();
    const { level } = route.params;
    

    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    const [showScore, setShowScore] = useState(false);
    useEffect(() => {
        const shuffled = [...(quizData[level] || [])]
            .sort(() => 0.5 - Math.random())
            .slice(0, 10)
            .map((q, index) => ({
                ...q,
                id: index + 1,
            }));

        setQuestions(shuffled);
        setSelectedAnswers({});
        setShowScore(false);
    }, [level]);


    const calculateScore = () => {
        let score = 0;
        questions.forEach((q) => {
            if (selectedAnswers[q.id] === q.correct) {
                score++;
            }
        });
        return score;
    };

    const getPerformanceText = (score: number) => {
        if (score <= 4) return "Zəif";
        if (score <= 6) return "Orta";
        if (score <= 8) return "Yaxşı";
        return "Mükəmməl";
    };


    return (
        <View style={styles.container}>
            <View style={styles.fixedHeader}>
                <Header />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image style={styles.leftArrowImage} source={require("../assets/leftarrow.png")} />
                    <Text style={styles.leftBackText}>Geri</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>{level} səviyyə testi</Text>

                {questions.map((q) => (
                    <View key={q.id} style={styles.questionBox}>
                        <Text style={styles.questionText}>{q.id}. {q.question}</Text>
                        {q.options.map((option) => (
                            <TouchableOpacity
                                key={option}
                                onPress={() =>
                                    setSelectedAnswers({ ...selectedAnswers, [q.id]: option })
                                }
                                style={[
                                    styles.optionButton,
                                    selectedAnswers[q.id] === option && styles.selectedOption,
                                ]}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}

                <TouchableOpacity
                    onPress={() => setShowScore(true)}
                    style={styles.finishButton}
                >
                    <Text style={styles.finishButtonText}>Bitir və xalı hesabla</Text>
                </TouchableOpacity>

                {showScore && (
                    <View style={{ marginTop: 20, alignItems: "center" }}>
                        <Text style={styles.scoreText}>
                            Bütün düzgün cavablar: {calculateScore()} / {questions.length}
                        </Text>
                        <Text style={styles.performanceText}>
                            Nəticə: {getPerformanceText(calculateScore())}
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    fixedHeader: {
        backgroundColor: "#fff",
        padding: 20,
        paddingTop: 40, // for safe area (optional)
        zIndex: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    scrollContent: {
        padding: 20,
        paddingTop: 10,
        paddingBottom: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 20,
        color: "#524FD5",
    },
    questionBox: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: "#F0F0FF",
        borderRadius: 10,
    },
    questionText: {
        fontSize: 16,
        marginBottom: 10,
    },
    optionButton: {
        padding: 10,
        marginBottom: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    selectedOption: {
        backgroundColor: "#D3D3F3",
        borderColor: "#524FD5",
    },
    optionText: {
        fontSize: 15,
    },
    finishButton: {
        backgroundColor: "#524FD5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    finishButtonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 16,
    },
    scoreText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#444",
        marginTop: 20,
        textAlign: "center",
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
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
    performanceText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#524FD5",
        marginTop: 10,
    },
});


export default PracticeQuiz;
