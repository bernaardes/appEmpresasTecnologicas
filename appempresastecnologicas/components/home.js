import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';

export default function Home(props)
{
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> As 3 melhores Empresa de Tecnologia do Mundo</Text>
      <Image  style={styles.img} source={require('../assets/trabalho.jpg')}/>

      <Text style={styles.explic}>Quase todas as empresas – não importa em qual indústria elas estão originalmente – dependem de empresas de tecnologia de uma forma ou de outra. Pode ser hardware, software, serviços/ferramentas online, soluções de segurança cibernética… Segue abaixo uma lista com as 3 melhores empresas deste nicho: </Text>
      
        <TouchableOpacity style={styles.links1} onPress={()=>{props.navigation.navigate('Amazon')}}>
          <Text style={styles.texto}>Amazon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links2} onPress={()=>{props.navigation.navigate('Apple')}}>
          <Text style={styles.texto}>Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.links3} onPress={()=>{props.navigation.navigate('Alphabet')}}>
          <Text style={styles.texto}>Alphabet Inc.</Text>
        </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#474a51',
    padding: 8,
    alignItems: 'center', 
  },
  titulo:
  {
    fontSize: 30,
    color: '#e8e8e5',
    fontFamily: 'Lato_400Regular',
    marginTop: 20,
    marginBottom: 20, 
    textAlign: 'center'
  },
  links1:
  {
    fontSize: 20,
    marginTop: 10,  
    textAlign: 'center',
    backgroundColor: '#211b15',
    borderRadius: 12,
  },
  links2:
  {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    backgroundColor: '#211b15',
    borderRadius: 12,
  },
  links3:
  {
    fontSize: 20,
    marginTop: 10, 
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#211b15',
    borderRadius: 12,
  },
  img:
  {
    width: 250,
    height: 240,
    bottom: 10,
  },
  texto:
  {
    fontSize: 20,
    color: '#e8e8e5',
    
  },
  explic:
  {
    fontSize: 20,
    color: '#e8e8e5',
    alignItems: 'center', 
    
  }
});