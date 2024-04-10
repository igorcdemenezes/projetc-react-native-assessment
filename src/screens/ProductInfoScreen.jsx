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
