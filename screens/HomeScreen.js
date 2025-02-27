import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, Animated, Image } from "react-native";

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
    imagem: require("../assets/o_hierofante.jpg"),
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
    <View style={styles.container}>
      <Text style={styles.title}>Carta do Dia</Text>
      <Button title="Sortear Carta" onPress={sortearCarta} />
      <View style={styles.cartaContainer}>
        <Animated.View
          style={[styles.carta, { transform: [{ rotateY: interpolatedFlip }] }]}
        >
          {!mostrarCarta ? (
            <View style={styles.verso} />
          ) : (
            <View style={styles.frente}>
              <Image source={cartaSorteada.imagem} style={styles.cartaImagem} />
              <Text style={styles.cartaNome}>{cartaSorteada.nome}</Text>
              <Text style={styles.cartaSignificado}>
                {cartaSorteada.significado}
              </Text>
            </View>
          )}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  cartaContainer: {
    marginTop: 20,
    width: 200,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  carta: {
    width: 200,
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  frente: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  verso: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
  },
  cartaImagem: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  cartaNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  cartaSignificado: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    textAlign: "center",
  },
});

export default HomeScreen;
