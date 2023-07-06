import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export const Input = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const textInputProps = {
    ...props,
    style: [styles.input, props.style, isFocused && styles.focused],
    placeholderTextColor: "#BDBDBD",
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  return props.password ? (
    <View>
      <TextInput {...textInputProps} secureTextEntry={!showPassword} />
      <Pressable onPress={handleShowPassword}>
        <Text style={styles.buttonShowPassword}>Показати</Text>
      </Pressable>
    </View>
  ) : (
    <TextInput {...textInputProps} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    height: 50,
    width: "100%",
    color: "#000",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 1.2,
  },
  focused: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
  },
  buttonShowPassword: {
    position: "absolute",
    bottom: 15,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
    color: "#1B4371",
  },
});
