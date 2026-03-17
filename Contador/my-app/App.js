import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Contador React Native
      </Text>
         
      <Text style={styles.texto}>
        {contador}
      </Text>

      <Button
        title="+1"
        onPress={() => setContador(contador + 1)}
      />

      <Button
        title="-1"
        onPress={() => setContador(contador - 1)}
      />

      <Button
        title="Zerar"
        onPress={() => setContador(0)}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    fontSize: 40,
    marginBottom: 20,
    color: '#ffffff',
  },
});