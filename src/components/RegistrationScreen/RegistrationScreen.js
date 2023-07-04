import { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AddPhotoIcon, HomeIcon } from "../UI/icons";

const image = require("../../images/BG.png");
export const RegistrationScreen = () => {
  const [showPassword, setShowPasswor] = useState(false);

  return (
    <ImageBackground style={styles.background} source={image}>
      <View style={styles.formLoyut}>
        <View style={styles.wrapper}>
          <Image style={styles.photo}></Image>
          <TouchableOpacity style={styles.button}>
            <AddPhotoIcon />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Реєстрація</Text>
        <View
          style={{
            borderWidth: 1,
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
          <TextInput
            style={[styles.input, styles.inputWithoutMargin]}
            placeholder="Пароль"
            placeholderTextColor="#BDBDBD"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
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
  wrapper: {
    alignItems: "center",
  },
  button: {
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
});
