import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, ScrollView, ImageBackground } 
from 'react-native';
import * as Location from 'expo-location';

export default function FormScreen( {navigation} : {navigation: any} ) {
    const [location, setLocation] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        observacao: ''
    });

    useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation('Permissão negada');
        return;
      }
      
    })();
  }, []);

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground 
        source={require('../assets/vivasegura-imagem-fundo.png')}
        style={styles.background}
    >
      <Text style={styles.title}>Formulário de Segurança</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={formData.nome}
        onChangeText={(text) => setFormData({ ...formData, nome: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone para contato"
        keyboardType="phone-pad"
        value={formData.telefone}
        onChangeText={(text) => setFormData({ ...formData, telefone: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Localização atual"
        value={location}
        editable={false}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Observação"
        multiline
        value={formData.observacao}
        onChangeText={(text) => setFormData({ ...formData, observacao: text })}
      />

      <Button title="Enviar" onPress={() => console.log(formData)} color="#1569e7" />
      <Button title="Voltar" onPress={() => navigation.goBack()} color="#999" />
        </ImageBackground>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
  },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff'
  },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
  },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10
  }
});
