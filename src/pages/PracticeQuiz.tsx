import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import Header from "../components/Header";
import quizData from '../assets/data/quizData.json'
type QuizScreenRouteProp = RouteProp<RootStackParamList, "PracticeQuiz">;

const PracticeQuiz = () => {
    const route = useRoute<QuizScreenRouteProp>();
    const { level } = route.params;

    const questions = quizData[level] || [];



    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
    const [showScore, setShowScore] = useState(false);

    const calculateScore = () => {
        let score = 0;
        questions.forEach((q) => {
            if (selectedAnswers[q.id] === q.correct) {
                score++;
            }
        });
        return score;
    };

    return (
        <>
            <Header />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{level} səviyyə testi</Text>

                {questions.map((q) => (
                    <View key={q.id} style={styles.questionBox}>
                        <Text style={styles.questionText}>{q.question}</Text>
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
                    <Text style={styles.scoreText}>
                        Bütün düzgün cavablar: {calculateScore()} / {questions.length}
                    </Text>
                )}
            </ScrollView>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 100,
        backgroundColor: "#fff",
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
});

export default PracticeQuiz;
