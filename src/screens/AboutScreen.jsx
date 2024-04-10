import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre Nossa Loja</Text>
        <Text style={styles.description}>
          Somos uma loja dedicada a fornecer os melhores produtos de informática
          para nossos clientes. Com uma vasta gama de produtos que incluem
          computadores, laptops, periféricos e acessórios, estamos comprometidos
          em atender às necessidades de nossos clientes com produtos de alta
          qualidade e excelente atendimento ao cliente.
        </Text>
        <Text style={styles.contact}>Entre em Contato Conosco:</Text>
        <Text style={styles.contactInfo}>
          Email: contato@lojadeinformatica.com
        </Text>
        <Text style={styles.contactInfo}>Telefone: (11)91111-1111</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "auto",
    height: 200,
  },
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    color: "#585858",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "justify",
  },
  contact: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  contactInfo: {
    color: "#585858",
    fontSize: 16,
    textAlign: "center",
  },
});
