import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';


function TelaListaProdutos({ navigation }) {
  // guarda as dimensões atuais da tela
  const [tela, setTela] = useState(Dimensions.get('window'));

  // hook para atualizar dimensões quando girar a tela
  useEffect(() => {
    const callback = ({ window }) => setTela(window);
    const subscription = Dimensions.addEventListener('change', callback);
    return () => subscription?.remove(); // remove listener quando desmontar
  }, []);

  // verifica se a tela está em modo paisagem
  const paisagem = tela.width > tela.height;

  // lista de produtos disponíveis
  const produtos = [
    {
      id: 1,
      nome: 'Camisa Azul',
      preco: 149.99,
      imagem: 'https://.../camisaazul.png',
      descricao: 'Camisa oficial azul do Ribeirense...',
      estoque: 15,
      categoria: 'Camisa',
    },
    // ... outros produtos
  ];

  // navegar para os detalhes de um produto
  const abrirDetalhesProduto = (produto) => {
    navigation.navigate('TelaDetalhes', {
      produtoSelecionado: produto,   // envia produto para a próxima tela
      origemNavegacao: 'lista_produtos',
      timestampVisita: Date.now(),   // salva hora da visita
    });
  };

  // renderização de cada item da lista
  const renderizarProduto = ({ item }) => (
    <TouchableOpacity
      style={estilos.itemProduto}
      onPress={() => abrirDetalhesProduto(item)}>
      {/* Imagem do produto */}
      <Image source={{ uri: item.imagem }} style={estilos.imagemProduto} />

      {/* informações do produto */}
      <View style={estilos.infoProduto}>
        <Text style={estilos.nomeProduto}>{item.nome}</Text>
        <Text style={estilos.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
        <Text style={estilos.descricaoProduto} numberOfLines={2}>
          {item.descricao}
        </Text>
      </View>

      {/* icone de seta à direita */}
      <Text style={estilos.setaDireita}>▶</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <SafeAreaView style={estilos.container}>
        {/* cabeçalho com logo e título */}
        <View style={estilos.header}>
          <Image
            source={{
              uri: 'https://i.ytimg.com/vi/xSUfdimXEbk/maxresdefault.jpg',
            }}
            style={estilos.logo}
          />
          <Text style={estilos.titulo}>RIBEIRENSE</Text>
        </View>

        {/* lista de produtos */}
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderizarProduto}
          showsVerticalScrollIndicator={false}
        />

        {/* feedback visual da rotação */}
        <View
          style={[
            estilos.containerRotacao,
            { backgroundColor: paisagem ? '#4CAF50' : '#1976D2' },
          ]}>
          <Text style={estilos.textoRotacao}>
            {paisagem ? 'Modo de paisagem detectado 😀' : 'Modo retrato 🙃'}
          </Text>
        </View>

        <View style={estilos.footer}>
          <Text style={estilos.titulo}>Projeto realizado por grupo 2</Text>
          <View style={estilos.lista}>
            <Text style={estilos.integrante}>• Agatha França</Text>
            <Text style={estilos.integrante}>• Ana Beatriz</Text>
            <Text style={estilos.integrante}>• Juan Lopes</Text>
            <Text style={estilos.integrante}>• Lucas Marin</Text>
            <Text style={estilos.integrante}>• Zayra França</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    marginTop: 6,
  },
  header: {
    backgroundColor: '#094fd3',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 220,
    height: 90,
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
  containerRotacao: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  textoRotacao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#094fd3',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lista: {
    marginTop: 4,
    paddingLeft: 12,
  },
  integrante: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 2,
  },
});
