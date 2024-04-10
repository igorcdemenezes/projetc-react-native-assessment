import { View, FlatList, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import mockData from "../mock.json";

export default function ProductListScreen() {
  const navigation = useNavigation();

  const handleProduct = (product) => {
    navigation.navigate("Informações gerais", { product });
  };

  const productList = Object.keys(mockData).map((key) => ({
    id: key,
    ...mockData[key],
  }));

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={productList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProduct(item)}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
