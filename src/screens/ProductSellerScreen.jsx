import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProductSellerScreen({ product }) {
  const vendorData = product.vendorData;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sellerInfo}>
          <Text style={styles.sellerName}>{vendorData.name}</Text>
          <Text style={styles.sellerEmail}>{vendorData.email}</Text>
          <Text style={styles.sellerPhone}>{vendorData.phone}</Text>
          <Text style={styles.sellerRating}>
            Avaliação: {vendorData.rating}/5
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  sellerInfo: {
    borderRadius: 5,
    shadowColor: "#0c0c0c",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.75,
    padding: 18,
    elevation: 3,
  },
  sellerName: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
  },
  sellerEmail: {
    fontSize: 16,
    color: "#7c7c7c",
    marginBottom: 10,
  },
  sellerPhone: {
    fontSize: 16,
    marginBottom: 8,
    color: "#7c7c7c",
  },
  sellerRating: {
    fontSize: 16,
    color: "#444",
  },
});
