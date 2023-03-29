import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Amazon from './amazon';
import Apple from './apple';
import Alphabet from './alphabet';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Amazon" component={Amazon}/>
        <Stack.Screen name="Apple" component={Apple}/>
        <Stack.Screen name="Alphabet" component={Alphabet}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}