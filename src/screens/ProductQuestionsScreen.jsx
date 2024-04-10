import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProductQuestionsScreen({ product }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {product.questions.map((question, index) => (
          <View key={index}>
            <Text style={styles.questionUser}>Usuário: {question.user}</Text>
            <Text style={styles.questionDate}>{question.date}</Text>
            <Text style={styles.questionQuestion}>{question.question}:</Text>
            <Text style={styles.questionAnswer}>
              Resposta: {question.answer}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  questionUser: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  questionDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  questionQuestion: {
    fontSize: 14,
    marginBottom: 8,
  },
  questionAnswer: {
    fontSize: 14,
    color: "#333",
  },
});
