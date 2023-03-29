import * as React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';

export default function Amazon()
{
  return(
  <ScrollView>   
    <View style={styles.container}>
      <Text  style={styles.titulo}>Amazon</Text> 
      <Image style={styles.img} source={require('../assets/amazon.jpg')}/>
      <Text style={styles.explic}>A Amazon, uma das empresas mais valiosas do mundo, foi fundada em 1994 por Jeff Bezos. Inicialmente um mercado online, a empresa começou a produzir seus próprios dispositivos tecnológicos e a oferecer serviços de nuvem ao longo do tempo. Além de ser a 6ª maior empresa do mundo na lista da Forbes, está entre as 25 melhores empresas de tecnologia e TI para se trabalhar, também conhecidas como os melhores locais de trabalho!</Text>
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
  {produtos_poulares: 'Produto Populares: Amazon Store, Amazon Prime, Amazon Web Services (AWS), Alexa, Twitch, Goodreads',
    valor_de_mercado: 'Valor de Mercado: $1.468,4 Bi',
    número_de_funcionários: 'Número de Funcionários: 1.608.000',
  },
];