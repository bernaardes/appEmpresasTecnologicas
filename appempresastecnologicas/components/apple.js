import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';

export default function Apple()
{
  return(
  <ScrollView>  
    <View style={styles.container}>
      <Text  style={styles.titulo}>Apple</Text>
      <Image style={styles.img} source={require('../assets/apple.jpg')}/>
      <Text style={styles.explic}>Outro gigante tecnológico em nossa lista é a Apple, o que não é muito surpreendente. Especializada em eletrônica, software e serviços on-line, a receita anual da Apple foi de $365.817B no ano passado, em 2021. A empresa foi fundada por Steve Jobs, Steve Wozniak, e Ronald Wayne em 1976. Desde então, a Apple tem produzido vários dispositivos tecnológicos, desde computadores até artigos de uso. </Text>
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
  {produtos_poulares: 'Produto Populares: iPhone, iPad, Apple Watch, AirPods, MacBook',
    valor_de_mercado: 'Valor de Mercado: $2.640,32 Bi',
    número_de_funcionários: 'Número de Funcionários: 164.000',
  },
];