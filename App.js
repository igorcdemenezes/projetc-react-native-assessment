import { NavigationContainer } from '@react-navigation/native';
import ProductsListScreen from "./src/screens/ProductsListScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './src/screens/AboutScreen';
import ProductInfoScreen from './src/screens/ProductInfoScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Produtos" component={ProductsListScreen} />
        <Drawer.Screen name="Sobre nós" component={AboutScreen} />
        <Drawer.Screen name="Informações gerais" component={ProductInfoScreen} options={{
          drawerItemStyle: {
            display: 'none'
          },
          drawerLabel: () => null
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
