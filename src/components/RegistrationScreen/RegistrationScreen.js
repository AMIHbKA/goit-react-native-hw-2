import { useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AddPhotoIcon, HomeIcon } from "../UI/icons";

const image = require("../../images/BG.png");

export const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={image}>
        <View style={styles.formLoyut}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <View style={styles.wrapper}>
                  <Image style={styles.photo}></Image>
                  <TouchableOpacity style={styles.buttonAddPhoto}>
                    <AddPhotoIcon />
                  </TouchableOpacity>
                </View>
                <Text style={styles.text}>Реєстрація</Text>
                <View
                  style={{
                    marginTop: 33,
                  }}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                  />
                  <View style={{ borderWidth: 1 }}>
                    <TextInput
                      style={[styles.input, styles.inputWithoutMargin]}
                      placeholder="Пароль"
                      placeholderTextColor="#BDBDBD"
                      secureTextEntry={!showPassword}
                    />
                    <Pressable onPress={handleShowPassword}>
                      <Text
                        style={[styles.buttonShowPassword, styles.textStyle1]}
                      >
                        Показати
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonRegisterText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Pressable>
            <Text style={[styles.textStyle1, styles.registerTextPosition]}>
              Вже є акаунт? Увійти
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },

  photo: {
    position: "absolute",
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
  },
  formLoyut: {
    flex: 0.68,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 70,
    fontSize: 30,
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
  textStyle1: {
    color: "#1B4371",
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
  },
  buttonAddPhoto: {
    justifyContent: "center",
    alignItems: "center",
    top: 15,
    left: 60,
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    padding: 16,
    height: 50,
    color: "#BDBDBD",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 1.2,
  },
  inputWithoutMargin: {
    marginBottom: 0,
  },
  buttonShowPassword: {
    position: "absolute",
    bottom: 15,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRegister: {
    marginTop: 43,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonRegisterText: {
    textAlign: "center",
    color: "#fff",
  },
  registerTextPosition: {
    marginTop: 16,
    textAlign: "center",
  },
});
