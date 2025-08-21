import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Import das imagens
import CamisaAzul from '../assets/CamisaAzul.png';
import CamisaBranca from '../assets/CamisaBranca.png';
import CamisaPreta from '../assets/CamisaPreta.png';
import CamisaRoxa from '../assets/CamisaRoxa.png';
import CamisaEsports from '../assets/CamisaeSports.png';
import CalcaoAzul from '../assets/CalcaoAzul.png';
import CalcaoBranco from '../assets/CalcaoBranco.png';
import CalcaoPreto from '../assets/CalcaoPreto.png';
import CalcaoRoxo from '../assets/CalcaoRoxo.png';
import CalcaoEsports from '../assets/CalcaoeSports.png';

function TelaListaProdutos({ navigation }) {
  const produtos = [
    {
      id: 1,
      nome: 'Camisa Azul',
      preco: 149.99,
      imagem: CamisaAzul,
      descricao:
        'Camisa oficial azul do Ribeirense, modelo 2025. Tecido leve e respirável.',
      estoque: 15,
      categoria: 'Camisa',
    },
    {
      id: 2,
      nome: 'Camisa Branca',
      preco: 149.99,
      imagem: CamisaBranca,
      descricao:
        'Camisa reserva branca do Ribeirense, ideal para jogos fora de casa.',
      estoque: 12,
      categoria: 'Camisa',
    },
    {
      id: 3,
      nome: 'Camisa Preta',
      preco: 159.99,
      imagem: CamisaPreta,
      descricao: 'Camisa preta do Ribeirense, edição limitada retrô.',
      estoque: 8,
      categoria: 'Camisa',
    },
    {
      id: 4,
      nome: 'Camisa Roxa - Goleiro',
      preco: 169.99,
      imagem: CamisaRoxa,
      descricao:
        'Camisa roxa de goleiro do Ribeirense, design exclusivo da temporada.',
      estoque: 10,
      categoria: 'Camisa',
    },
    {
      id: 5,
      nome: 'Camisa eSports',
      preco: 139.99,
      imagem: CamisaEsports,
      descricao:
        'Camisa oficial da line eSports do Ribeirense, estilo moderno e casual.',
      estoque: 20,
      categoria: 'Camisa',
    },
    {
      id: 6,
      nome: 'Calção Azul',
      preco: 99.99,
      imagem: CalcaoAzul,
      descricao:
        'Calção azul do uniforme principal do Ribeirense, tecido dry-fit.',
      estoque: 25,
      categoria: 'Calção',
    },
    {
      id: 7,
      nome: 'Calção Branco',
      preco: 99.99,
      imagem: CalcaoBranco,
      descricao:
        'Calção branco do uniforme reserva do Ribeirense, conforto e leveza.',
      estoque: 18,
      categoria: 'Calção',
    },
    {
      id: 8,
      nome: 'Calção Preto',
      preco: 109.99,
      imagem: CalcaoPreto,
      descricao:
        'Calção preto edição especial do Ribeirense, combina com a camisa retrô.',
      estoque: 10,
      categoria: 'Calção',
    },
    {
      id: 9,
      nome: 'Calção Roxo - Goleiro',
      preco: 119.99,
      imagem: CalcaoRoxo,
      descricao:
        'Calção roxo de goleiro do Ribeirense, resistente e confortável.',
      estoque: 14,
      categoria: 'Calção',
    },
    {
      id: 10,
      nome: 'Calção eSports',
      preco: 89.99,
      imagem: CalcaoEsports,
      descricao:
        'Calção do uniforme eSports do Ribeirense, design estilizado e leve.',
      estoque: 22,
      categoria: 'Calção',
    },
  ];

  const abrirDetalhesProduto = (produto) => {
    navigation.navigate('TelaDetalhes', {
      produtoSelecionado: produto,
      origemNavegacao: 'lista_produtos',
      timestampVisita: Date.now(),
    });
  };

  const renderizarProduto = ({ item }) => (
    <TouchableOpacity
      style={estilos.itemProduto}
      onPress={() => abrirDetalhesProduto(item)}>
      <Image source={item.imagem} style={estilos.imagemProduto} />
      <View style={estilos.infoProduto}>
        <Text style={estilos.nomeProduto}>{item.nome}</Text>
        <Text style={estilos.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
        <Text style={estilos.descricaoProduto} numberOfLines={2}>
          {item.descricao}
        </Text>
      </View>
      <Text style={estilos.setaDireita}>▶</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderizarProduto}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default TelaListaProdutos;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  itemProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  imagemProduto: {
    width: 100,
    height: 135,
    borderRadius: 8,
    marginRight: 12,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precoProduto: {
    fontSize: 14,
    color: '#009688',
  },
  descricaoProduto: {
    fontSize: 14,
    color: '#444',
    marginBottom: 14,
    marginTop: 5,
    lineHeight: 22,
  },
  setaDireita: {
    fontSize: 20,
    marginLeft: 8,
  },
});
