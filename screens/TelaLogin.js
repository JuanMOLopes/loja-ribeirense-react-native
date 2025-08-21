import React, { useState } from 'react';
import {
  View,            
  Text,            
  TextInput, // Campo de entrada de texto
  TouchableOpacity, // respondam a toques -> animação que reduz a opacidade
  StyleSheet,
  Modal, // Componente para exibir janelas modais
  ActivityIndicator 
} from 'react-native';

function TelaLogin({ navigation }) { // para navegação entre telas


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions
} from 'react-native';

function TelaLogin({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemModal, setMensagemModal] = useState('');
  const [loginConcluido, setLoginConcluido] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para o ActivityIndicator


  // Rotação da tela
  const [tela, setTela] = useState(Dimensions.get('window'));

  useEffect(() => {
    const callback = ({ window }) => setTela(window);
    const subscription = Dimensions.addEventListener('change', callback);
    return () => subscription?.remove();
  }, []);

  const paisagem = tela.width > tela.height;


  const usuarioValido = [
    { usuario: 'aluno', senha: '123' }
  ];


 // Função que vai validar o login , se os campos não forem preenchidos, vai aparecer a mensagem definida
  const realizarLogin = () => {
    if (!usuario || !senha) {
      setMensagemModal('⚠️ Preencha usuário e senha');
      return;
    }

    const usuarioEncontrado = usuarioValido.find(
      user => user.usuario === usuario && user.senha === senha
    );



  // Se encontrou o usuário válido
    if (usuarioEncontrado) {
  // Monta um objeto com dados que podem ser enviados para a próxima tela

      const dadosParaEnviar = {
        usuario: {
          ...usuarioEncontrado, // copia os dados do usuário
          senha: undefined // remove a senha por segurança
        },
      };

 // Define a mensagem de sucesso no modal

    if (usuarioEncontrado) {
      const dadosParaEnviar = {
        usuario: { ...usuarioEncontrado, senha: undefined }
      };


      setMensagemModal('✅ Login concluído');
      setLoginConcluido(true);
      setLoading(true); //  Mostra o ActivityIndicator


 // Aguarda 2 segundos e navega para a tela de lista de produtos
      setTimeout(() => {
        setMensagemModal('');
        setLoading(false); 
        navigation.navigate('TelaListaProdutos', dadosParaEnviar);
      }, 2000);
    } else {
         // Se não encontrou o usuário, mostra mensagem de erro

      setTimeout(() => {
        setMensagemModal('');
        navigation.navigate('TelaListaProdutos', dadosParaEnviar);
      }, 2000);
    } else {

      setMensagemModal('❌ Usuário ou senha incorretos');
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🔐 Login</Text>
      <Text style={estilos.subtitulo}>Entre na sua conta</Text>

      <TextInput
        style={estilos.input}
        placeholder="usuário"
        value={usuario}
        onChangeText={setUsuario}
        keyboardType="default"
      />

      <TextInput
        style={estilos.input}
        placeholder="sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={estilos.botaoLogin} onPress={realizarLogin}>
        <Text style={estilos.textoBotaoLogin}>👉 Entrar</Text>
      </TouchableOpacity>


      <Text style={estilos.dicaLogin}>
        💡 Dica: use aluno | 123
      </Text>

      <Modal
        transparent 

      <Text style={estilos.dicaLogin}>💡 Dica: use aluno | 123</Text>

      {/* Modal que mostra mensagens */}
      <Modal
        transparent

        animationType="fade"
        visible={!!mensagemModal}
      >
        <View style={estilos.modalContainer}>
          <View style={estilos.modalBox}>
            <Text style={estilos.modalTexto}>{mensagemModal}</Text>


            {loading && <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 10 }} />} {/* <-- Loader */}

            {!loginConcluido && (
              <TouchableOpacity
                style={estilos.modalBotao}
                onPress={() => setMensagemModal('')}
              >
                <Text style={estilos.modalBotaoTexto}>Fechar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>

      {/* Feedback de rotação sempre visível */}
      <View style={[estilos.containerRotacao, { backgroundColor: paisagem ? '#4CAF50' : '#1976D2' }]}>
        <Text style={estilos.textoRotacao}>
          {paisagem ? 'Modo de paisagem detectado 😀' : 'Modo retrato 🙃'}
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  },
  botaoLogin: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBotaoLogin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  dicaLogin: {
    marginTop: 15,
    fontSize: 12,
    color: '#888'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: '70%'
  },
  modalTexto: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center'
  },
  modalBotao: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
  modalBotaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },
  containerRotacao: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 8
  },
  textoRotacao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4
  },
});

export default TelaLogin;
