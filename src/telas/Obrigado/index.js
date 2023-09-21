import { Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"

import useTextos from "../../hooks/useTextos"
import Topo from "../../componentes/Topo"

import sucesso from '../../assets/sucesso.png'
import VoltarSVG from '../../assets/voltar.svg'

export default function Obrigado() {
  const route = useRoute()
  const navigation = useNavigation();
  
  const {
    mensagemCompra,
    topoCompra,
    tituloCompra,
    botaoHomeCompra,
    botaoProdutorCompra
  } = useTextos();

  const compra = route.params.compra
  const mensagemCompleta = mensagemCompra?.replace('$NOME', compra.nome);

  const TopoLista = () => {
    return <View style={estilos.tela}>
      <View style={estilos.topo}>
        <TouchableOpacity
          style={estilos.topoVoltar}
          onPress={() => navigation.goBack()}>
          <VoltarSVG />
        </TouchableOpacity>
        <Text style={estilos.topoTexto}>{topoCompra}</Text>
      </View>
      <Topo imagem={sucesso} />
      <View style={estilos.textos}>
        <Text style={estilos.titulo}>{tituloCompra}</Text>
        <Text style={estilos.mensagem}>{mensagemCompleta}</Text>
        <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.popToTop()}>
          <Text style={estilos.textoBotao}>{botaoHomeCompra}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[estilos.botao, estilos.botaoProdutor]}
          onPress={() => navigation.pop(2)}
          >
          <Text style={[estilos.textoBotao, estilos.textoBotaoProdutor]}>{botaoProdutorCompra}</Text>
        </TouchableOpacity>
      </View>
    </View>
  }

  return <FlatList
    ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  topo: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topoTexto: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topoVoltar: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
  },
  conteudo: {
    zIndex: 0,
  },
  sucesso: {
    width: "100%",
    height: undefined,
    aspectRatio: 360 / 351,
  },
  textos: {
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: "#464646",
  },
  mensagem: {
    color: "#A3A3A3",
    fontSize: 22,
    lineHeight: 26,
  },
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
  botaoProdutor: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  textoBotaoProdutor: {
    color: "#464646",
  },
});