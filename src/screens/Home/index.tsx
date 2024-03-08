import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Rodrigo",
    "Diego",
    "Vini",
    "Biro",
    "Rafael",
    "Lucas",
    "Gustavo",
    "Mayk",
    "Guilherme",
    "Thiago",
    "Alexandre",
  ];

  function handleAddParticipant() {
    if (participants.includes("Rodrigo")) {
      Alert.alert("Erro", "Participante já adicionado");
      return;
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      "Remover participante",
      `Deseja remover o paricipante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert("Participante removido"),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sábado, 2 de março de 2024</Text>
      <View style={styles.form}>
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
