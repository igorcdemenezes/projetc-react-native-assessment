import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ProductSellerScreen({ product }) {
  const vendorData = product.vendorData; // Assumindo que vendorData é um objeto de vendedor

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text>{vendorData.name}</Text>
          <Text>{vendorData.email}</Text>
          <Text>{vendorData.phone}</Text>
          <Text>{vendorData.rating}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
