import React, { useState, useEffect } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  senha: string;
}

const Perfil = () => {
  const route = useRoute();
  const routeParams = route.params as User;

  const [id, setId] = useState(routeParams.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  async function loadUser(): Promise<void> {
    const response = await api.get(`users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.senha);
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function handleEditProfile() {
    try {
      const user = {
        id: id,
        name: name,
        email: email,
        senha: password,
      };

      const userUpdate = await api.put("users", user);

      setName(userUpdate.data.name);
      setEmail(userUpdate.data.email);
      setPassword(userUpdate.data.senha);

      Alert.alert(
        "Salvo com sucesso!",
        "Você já pode voltar a utilizar a aplicação."
      );

      loadUser();
    } catch (error) {
      Alert.alert(
        "Erro na atualização",
        "Ocorreu um erro ao atualizar os dados, tente novamente."
      );
    }
  }

  async function handleDeleteProfile() {
    try {
      const user_id = id;

      console.log("USER_ID", id);

      await api.delete(`users/${user_id}`);

      Alert.alert(
        "Conta deletada com sucesso!",
        "Esperamos que retorne em breve."
      );
      handleNavigateToHome();
    } catch (error) {
      Alert.alert(
        "Erro ao excluir conta",
        "Ocorreu um erro ao excluir a conta, tente novamente."
      );
    }
  }

  function handleNavigateToHome() {
    navigation.navigate("Home");
  }

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color="#34cb79" />
            <Text>Voltar</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Editar perfil</Text>
            <Text style={styles.description}>
              Edite as informações que julgar necessário.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o e-mail"
            value={name}
            autoCorrect={false}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite o e-mail"
            value={email}
            autoCorrect={false}
            onChangeText={setEmail}
          />

          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Digite a senha"
            value={password}
            autoCorrect={false}
            onChangeText={setPassword}
          />
          <RectButton style={styles.button} onPress={handleEditProfile}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="save" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Salvar</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleDeleteProfile}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="trash-2" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Excluir conta</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#322153",
    fontSize: 32,
    fontFamily: "Ubuntu_700Bold",
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: "#6C6C80",
    fontSize: 16,
    marginTop: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#34CB79",
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "#FFF",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
});

export default Perfil;
