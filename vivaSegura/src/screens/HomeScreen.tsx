import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

export default function HomeScreen({ navigation }: { navigation: any }) {
    return (
    <ImageBackground 
        source={require('../assets/vivasegura-imagem-fundo.png')}
        style={styles.background}
        >
        <View style={styles.container}>
            <Image 
            source={require('../assets/logo-vivaSegura.png')}
            style={styles.logo}
            />
            <Text style={styles.text}>Ative Sua Segurança</Text>
            <Button 
            title='Ativar' 
            onPress={() => navigation.navigate('form')}
            color={"#1569e7"}
            />
        </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: -50,
    borderRadius: 20,
  },

  text: {
    color: '#1569e7ff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    backgroundColor:'#ffffffff',
    borderRadius: 5,
  },
});