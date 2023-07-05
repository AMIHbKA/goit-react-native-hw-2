import { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const image = require("../../images/BG.png");

export const RegistrationScreen2 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <Image style={styles.backgroundImage} source={image} />
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
