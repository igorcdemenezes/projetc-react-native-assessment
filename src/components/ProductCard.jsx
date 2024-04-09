import { View, Text, Image, StyleSheet } from "react-native";

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
  },
});
