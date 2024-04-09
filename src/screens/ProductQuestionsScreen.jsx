import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProductQuestionsScreen({ product }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {product.questions.map((question, index) => (
          <View key={index}>
            <Text>{question.date}</Text>
            <Text>{question.user}</Text>
            <Text>Usuário: {question.question}:</Text>
            <Text>R: {question.answer}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
