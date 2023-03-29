import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';

export default function Alphabet()
{
  return(
  <ScrollView>  
    <View style={styles.container}>
      <Text  style={styles.titulo}>Alphabet Inc.</Text>
      <Image style={styles.img} source={require('../assets/google.jpg')}/>
      <Text style={styles.explic}>A Alphabet é uma empresa multinacional, com receita anual de $257,637B para 2021. Após a reestruturação pela qual o Google passou em 2015, foi fundada a Alphabet Inc., que se tornou a empresa-mãe dos negócios do Google. </Text>
      <FlatList 
        data={arrayTimes}
        renderItem={({item})=>
        <View>
          <Text style={styles.subTitulo}>{item.produtos_poulares}</Text>
          <Text style={styles.subTitulo}>{item.valor_de_mercado}</Text>
          <Text style={styles.subTitulo}>{item.número_de_funcionários}</Text>
        </View>}
      />   
    </View>
  </ScrollView>  
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
    fontSize: 40,
    color: '#e8e8e5',
    fontFamily: 'Lato_400Regular',
    marginTop: 20,
    marginBottom: 20, 
    textAlign: 'center'
  },
  img:
  {
    width: 250, 
    height: 240,
  },
  subTitulo:
  {
    fontSize: 20,
    color: '#e8e8e5',
    marginTop: 15
  },
  explic:
  {
    fontSize: 20,
    color: '#e8e8e5',
    marginTop: 50
  }
});

const arrayTimes =[
  {produtos_poulares: 'Produto Populares: Android, Google, YouTube.',
    valor_de_mercado: 'Valor de Mercado: $1.581,72 Bi',
    número_de_funcionários: 'Número de Funcionários: 186.779',
  },
];