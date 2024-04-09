import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductDetailsScreen from "./ProductDetailsScreen";
import ProductCommentsScreen from "./ProductsCommentsScreen";
import ProductQuestionsScreen from "./ProductQuestionsScreen";
import ProductSellerScreen from "./ProductSellerScreen";

const Tab = createBottomTabNavigator();

export default function ProductInfoScreen({ route }) {
  const { product } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Detalhes">
        {() => <ProductDetailsScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name="Vendedor">
        {() => <ProductSellerScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name="Perguntas">
        {() => <ProductQuestionsScreen product={product} />}
      </Tab.Screen>
      <Tab.Screen name="Comentários">
        {() => <ProductCommentsScreen product={product} />}
      </Tab.Screen>
    </Tab.Navigator>
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
