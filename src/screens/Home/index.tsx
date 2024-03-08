import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
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
    console.log("Adicionando participante");
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Removendo participante ${name}`);
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
            onRemove={() => handleRemoveParticipant("Rodrigo")}
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
