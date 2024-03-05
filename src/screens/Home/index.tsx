import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  function handleAddParticipant() {
    console.log("Adicionando participante");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sábado, 2 de março de 2024</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor={"#6B6B6B"}
        // keyboardType="email-address" É possível selecionar qual o tipo de teclado que será exibido para facilitar a vida do usuário
      />
      <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
