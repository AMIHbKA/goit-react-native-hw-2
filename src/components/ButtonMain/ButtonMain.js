import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonMain = (props) => {
  return (
    <TouchableOpacity style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});
