import React, { useState, useRef } from "react";
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
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  async function handleSignUp() {
    try {
      const user = {
        name: name,
        email: email,
        password: password,
      };

      await api.post("users", user);

      Alert.alert(
        "Cadastro realizado com sucesso!",
        "Você já pode fazer login na aplicação."
      );

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Erro no cadastro",
        "Ocorreu um erro ao fazer o cadastro, tente novamente."
      );
    }
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
            <Text style={styles.title}>Cadastro de usuário</Text>
            <Text style={styles.description}>
              Preencha todos os campos para criar uma nova conta.
            </Text>
          </View>
        </View>
        <Form ref={formRef} onSubmit={handleSignUp}>
          <View style={styles.footer}>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome"
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

            <RectButton
              style={styles.button}
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="log-in" color="#FFF" size={24} />
                </Text>
              </View>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </RectButton>
          </View>
        </Form>
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

export default CreateAccount;
