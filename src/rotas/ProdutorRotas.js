import {} from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Produtor from '../telas/Produtor';
import Home from '../telas/Home';
import Cesta from '../telas/Cesta';
import Obrigado from '../telas/Obrigado';

const Stack = createNativeStackNavigator();


export default function ProdutorRotas({ ComponentePrincipal = Home}) {
  return <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
    <Stack.Screen name="Produtor" component={Produtor} />
    <Stack.Screen name='Cesta' component={Cesta} />
    <Stack.Screen name='Obrigado' component={Obrigado} />
  </Stack.Navigator>
}