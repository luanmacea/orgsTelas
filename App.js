import { StatusBar, SafeAreaView } from 'react-native';

import useProdutores from './src/hooks/useProdutores';
import AppRotas from './src/rotas/AppRotas';

export default function App() {
  return <SafeAreaView style={{ flex: 1 }}>
    <StatusBar />
    <AppRotas />
  </SafeAreaView>
}