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
      imagem: 'https://lh6.googleusercontent.com/wLPViIiYWtdaPtwIou8_y1FPLMJGKw_EWBYdvZnw1Vn-Ed1ofSyxzPVjzXbBIVNttPxTJLLNtOJ-SnRkFdCZ7AFCF485eKmzMr9O5bF6VEfOQPZbrD9Rsz1psJi7ReaxW24E8At1kZTs4VktyO51UpdANe7koGzOKa2lDoLP020Be6J1SoY9HQ=w1280',
      descricao:
        'Camisa oficial azul do Ribeirense, modelo 2025. Tecido leve e respirável.',
      estoque: 15,
      categoria: 'Camisa',
    },
    {
      id: 2,
      nome: 'Camisa Branca',
      preco: 149.99,
      imagem: 'https://lh4.googleusercontent.com/ll_CkXC2pC3xLefRhSlabplhRgDE2M7274Jf-7mB3R2s0HrJvHD_xatBDVjYOh0nRY4Jj5UjSAjDjqtCSjEsODlg_Ob9hW6VzhFmZCBbK_co1SWC2A2qCrHYpAkoKwnk2lxAv6G3Zzrc_eRhLXQ5uuFU30lRd0DEpn56SmbuUt-r-iarvVHo2A=w1280',
      descricao:
        'Camisa reserva branca do Ribeirense, ideal para jogos fora de casa.',
      estoque: 12,
      categoria: 'Camisa',
    },
    {
      id: 3,
      nome: 'Camisa Preta',
      preco: 159.99,
      imagem: 'https://lh5.googleusercontent.com/_0QdoAkkphfVSIeZe-Vead7_hbOBIlxsacdVVW8UZ6uVmHnz29ZTdEAWGfFc2Y9UsDFJTTof-9v7onEOlX5vCYmHB2geJ8ZHjIRTlzw5LFoyYthX0XcUu48EYhiHJ02qwN1FVEC4G_HW4GFtY7DPgkEotzSsdm2pKEt4mMnvOpJGdZM2KYcS9A=w1280',
      descricao: 'Camisa preta do Ribeirense, edição limitada retrô.',
      estoque: 8,
      categoria: 'Camisa',
    },
    {
      id: 4,
      nome: 'Camisa Roxa - Goleiro',
      preco: 169.99,
      imagem: 'https://lh4.googleusercontent.com/4ohCK6_gKiHcqmycLmOy3f-a1TgJsKCTTZYeT7agmokcm_LumDECIPIOBaGc0gE--18Oi0WbQCdDf0WFt74mORep8E-hvN1LAoVNuVpmRWo27nIv7cApXD-4cwaIZuAKp_exYhYRUw1i66HoRPiQYaypvthp7sLD99T_r9aO27fhISj7oGA7NA=w1280',
      descricao:
        'Camisa roxa de goleiro do Ribeirense, design exclusivo da temporada.',
      estoque: 10,
      categoria: 'Camisa',
    },
    {
      id: 5,
      nome: 'Camisa eSports',
      preco: 139.99,
      imagem: 'https://lh3.googleusercontent.com/hVZgMtYhtwZx_XyEYq9gXe4e3Rwstcy5ekUlEkNPIBJrJ3qas0tMFwydhfQBTuA5yzG7C6QgtUUDGgvlBM9_brgueH0src5wGW4zAz8cHqGWwFWcNii83xGUxJW8alyGBr_S_DTsJDl7Hbflp_LJk-_qvx26yRMupehI9iKDLtmJYONV4hsTQg=w1280',
      descricao:
        'Camisa oficial da line eSports do Ribeirense, estilo moderno e casual.',
      estoque: 20,
      categoria: 'Camisa',
    },
    {
      id: 6,
      nome: 'Calção Azul',
      preco: 99.99,
      imagem: 'https://lh6.googleusercontent.com/QylPU771Eu9deVzchGW99YDcHCt-MRW7tven9TBF0azG_buPTt6wkVhACNFxpdeLb4sWdRGUPV3HlxWV9Jg3A0AYJBGmHG0Jufc8GNYp2guzX6mPtL0QAqc3kBv0GutqhgvQpRpww5TV9vTrMn8915gnei-z6hzwUslvncqvVr9HCWyzVAN4=w1280',
      descricao:
        'Calção azul do uniforme principal do Ribeirense, tecido dry-fit.',
      estoque: 25,
      categoria: 'Calção',
    },
    {
      id: 7,
      nome: 'Calção Branco',
      preco: 99.99,
      imagem: 'https://lh6.googleusercontent.com/mnN_QAR6j4toqz_X4244ilTgpDsbTbU8H4GQwab0h1N-zr1VCGIYVWdQKHsYUm_BovLAtGdq_Y9MQRMEsZvcX9dOdQzVdliphO5lxqBEteAqaheW73YWO85k8z8-qFAl0O3x0JWtcMB0Vm9FxOEywMcAKViM6EeHP9XBkcaYZzN_z1A9edRFVg=w1280',
      descricao:
        'Calção branco do uniforme reserva do Ribeirense, conforto e leveza.',
      estoque: 18,
      categoria: 'Calção',
    },
    {
      id: 8,
      nome: 'Calção Preto',
      preco: 109.99,
      imagem: 'https://lh5.googleusercontent.com/FPbUnAxG0hGNVHczEqN4Gz8vRQj5Z3csux98B78XovAuDhR3QWTZdDFZLACC6jVTtPQKA8_TXi-iGjBPbzzVRSMedQtTjBMAzYEHrjPeDxwtdDYVpYiKRrHtDWLEIqWhrK4TCzI5pFQZjWRdw1nvWsViXH1yTA7vQW1IVLdjVwtEPzISYN-6=w1280',
      descricao:
        'Calção preto edição especial do Ribeirense, combina com a camisa retrô.',
      estoque: 10,
      categoria: 'Calção',
    },
    {
      id: 9,
      nome: 'Calção Roxo - Goleiro',
      preco: 119.99,
      imagem:'https://lh3.googleusercontent.com/ZoR2wFp7JD5uFraIje0jOiLg_dWVGyF1Lqf5kxATp34_5qXcqoBNNVKn1VaP7W-k7k4HHk0r7Tl3U2YXmdNUW6fpv6MijV_TcAGU_cWEYbQ7we5VfPPY7CdOF-xbiNum-0oHqLhsq7wumz4_Q6HcxzR17vCtuz-Gr7uzqvwp5P_jcEOpJiHNDw=w1280',
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
