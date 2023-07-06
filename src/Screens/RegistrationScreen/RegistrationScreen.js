import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Avatar } from "../../components/Avatar/Avatar";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { Input } from "../../components/Input/Input";

const image = require("../../images/BG.png");

export const RegistrationScreen = () => {
  const handlePress = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={image} />
      <FormLayout>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={handlePress}>
            <View>
              <Avatar />
              <Text style={styles.text}>Реєстрація</Text>
              <View style={styles.border}>
                <Input
                  placeholder="Логін"
                  textContentType="username"
                  style={{ marginBottom: 16 }}
                />
                <Input
                  placeholder="Адреса електронної пошти"
                  textContentType="emailAddress"
                  style={{ marginBottom: 16 }}
                />
                <Input
                  placeholder="Пароль"
                  textContentType="password"
                  password
                />
              </View>
              <ButtonMain text="Зареєструватися" style={{ marginTop: 43 }} />
              <ButtonLink
                text="Вже є акаунт? Увійти"
                style={{ marginTop: 16, textAlign: "center" }}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </FormLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text: {
    marginTop: 60,
    marginBottom: 32,
    fontSize: 30,
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
