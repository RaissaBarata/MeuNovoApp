import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
} from "react-native";

// Todos os Arcanos Maiores com links ou locais de imagens
const arcanosMaiores = [
  {
    nome: "O Louco",
    significado: "Início de jornada, novas oportunidades.",
    imagem: require("../assets/o_louco.jpg"),
  },
  {
    nome: "O Mago",
    significado: "Poder, habilidade, criatividade.",
    imagem: require("../assets/o_mago.jpg"),
  },
  {
    nome: "A Sacerdotisa",
    significado: "Intuição, mistério, sabedoria.",
    imagem: require("../assets/a_sacerdotisa.jpg"),
  },
  {
    nome: "A Imperatriz",
    significado: "Fertilidade, criação, nutrição.",
    imagem: require("../assets/a_imperatriz.jpg"),
  },
  {
    nome: "O Imperador",
    significado: "Poder, controle, estrutura.",
    imagem: require("../assets/o_imperador.jpg"),
  },
  {
    nome: "O Hierofante",
    significado: "Tradição, ensino, sabedoria.",
    imagem: require("../assets/o_papa.jpg"),
  },
  {
    nome: "Os Amantes",
    significado: "Escolhas, amor, harmonia.",
    imagem: require("../assets/os_amantes.jpg"),
  },
  {
    nome: "O Carro",
    significado: "Vitória, progresso, controle.",
    imagem: require("../assets/o_carro.jpg"),
  },
  {
    nome: "A Força",
    significado: "Coragem, determinação, autoconfiança.",
    imagem: require("../assets/a_forca.jpg"),
  },
  {
    nome: "O Eremita",
    significado: "Reflexão, introspecção, busca interior.",
    imagem: require("../assets/o_eremita.jpg"),
  },
  {
    nome: "A Roda da Fortuna",
    significado: "Mudança, destino, ciclos.",
    imagem: require("../assets/a_rodadafortuna.jpg"),
  },
  {
    nome: "A Justiça",
    significado: "Equilíbrio, justiça, verdade.",
    imagem: require("../assets/a_justica.jpg"),
  },
  {
    nome: "O Enforcado",
    significado: "Sacrifício, nova perspectiva, paciência.",
    imagem: require("../assets/o_enforcado.jpg"),
  },
  {
    nome: "A Morte",
    significado: "Transformação, fim de ciclo, renovação.",
    imagem: require("../assets/a_morte.jpg"),
  },
  {
    nome: "A Temperança",
    significado: "Equilíbrio, paciência, harmonia.",
    imagem: require("../assets/a_temperanca.jpg"),
  },
  {
    nome: "O Diabo",
    significado: "Tentação, vícios, ilusões.",
    imagem: require("../assets/o_diabo.jpg"),
  },
  {
    nome: "A Torre",
    significado: "Destruição, revelação, mudança abrupta.",
    imagem: require("../assets/a_torre.jpg"),
  },
  {
    nome: "A Estrela",
    significado: "Esperança, cura, inspiração.",
    imagem: require("../assets/a_estrela.jpg"),
  },
  {
    nome: "A Lua",
    significado: "Mistérios, ilusões, intuição.",
    imagem: require("../assets/a_lua.jpg"),
  },
  {
    nome: "O Sol",
    significado: "Sucesso, vitalidade, felicidade.",
    imagem: require("../assets/o_sol.jpg"),
  },
  {
    nome: "O Julgamento",
    significado: "Renascimento, revelação, julgamento.",
    imagem: require("../assets/o_julgamento.jpg"),
  },
  {
    nome: "O Mundo",
    significado: "Conclusão, realização, harmonia.",
    imagem: require("../assets/o_mundo.jpg"),
  },
];

const HomeScreen = () => {
  const [cartaSorteada, setCartaSorteada] = useState(null);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const sortearCarta = () => {
    setMostrarCarta(false);
    const indiceAleatorio = Math.floor(Math.random() * arcanosMaiores.length);

    Animated.timing(flipAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setCartaSorteada(arcanosMaiores[indiceAleatorio]);
      setMostrarCarta(true);

      flipAnim.setValue(0);
    });
  };

  const interpolatedFlip = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <View style={styles.cartaContainer}>
          <Animated.View
            style={[
              styles.carta,
              { transform: [{ rotateY: interpolatedFlip }] },
            ]}
          >
            {!mostrarCarta ? (
              <View style={styles.verso} />
            ) : (
              <View style={styles.frente}>
                <Image
                  source={cartaSorteada.imagem}
                  style={styles.cartaImagem}
                />
                <Text style={styles.cartaNome}>{cartaSorteada.nome}</Text>
                <Text style={styles.cartaSignificado}>
                  {cartaSorteada.significado}
                </Text>
              </View>
            )}
          </Animated.View>
        </View>
        <TouchableOpacity style={styles.button} onPress={sortearCarta}>
          <Text style={styles.buttonText}>Sortear Carta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  cartaContainer: {
    marginTop: 100,
    width: "90%",
    height: 550,
    alignItems: "center",
    justifyContent: "center",
  },
  carta: {
    width: "100%",
    height: "600px",
    borderRadius: 20,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 5,
    borderColor: "#FFF",
  },
  cartaImagem: {
    width: "300px",
    height: "500px",
    borderRadius: 15, // Ajuste o borderRadius para combinar com a moldura
  },
  infoContainer: {
    width: "90%",
    marginTop: 100,
    alignItems: "center",
  },
  cartaNome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  cartaSignificado: {
    fontSize: 18,
    color: "#CCC",
    textAlign: "center",
    marginBottom: 10,
  },
  cartaConselho: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    fontStyle: "italic",
  },
  verso: {
    width: "100%",
    height: "100%",
    backgroundColor: "#444",
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
