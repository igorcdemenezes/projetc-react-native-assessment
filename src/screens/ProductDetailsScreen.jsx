import { Text, View, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native";

export default function ProductDetailsScreen({ product }) {
  const { name, description, price } = product;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>R$ {price}</Text>
        </View>
        <View style={styles.specificationContainer}>
          {Object.entries(product.technicalSpecifications).map(
            ([key, value]) => (
              <View key={key} style={styles.item}>
                <Text style={styles.title}>{key}:</Text>
                <Text>{value}</Text>
              </View>
            )
          )}
        </View>
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
    marginBottom: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  description: {
    color: "#585858",
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
  specificationContainer: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
  },
});
