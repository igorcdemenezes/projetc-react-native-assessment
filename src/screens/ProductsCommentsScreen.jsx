import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProductCommentsScreen({ product }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {product.comments.map((comment, index) => (
          <View key={index}>
            <Text>Usuário: {comment.user}</Text>
            <Text>Comentário: {comment.comment}</Text>
            <Text>Nota: {comment.rating}</Text>
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
  image: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
});
