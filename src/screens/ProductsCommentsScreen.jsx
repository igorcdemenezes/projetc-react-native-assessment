import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProductCommentsScreen({ product }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {product.comments.map((comment, index) => (
          <View key={index}>
            <Text style={styles.userComment}>Usuário: {comment.user}</Text>
            <Text style={styles.commentComment}>
              Comentário: {comment.comment}
            </Text>
            <Text style={styles.ratingComment}>Nota: {comment.rating}/5</Text>
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
  userComment: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  commentComment: {
    fontSize: 14,
    marginBottom: 8,
  },
  ratingComment: {
    fontSize: 14,
    color: "#333",
  },
});
