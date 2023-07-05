import { StyleSheet, TextInput } from "react-native";

export const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor="#BDBDBD"
    />
  );
};

const styles = StyleSheet.create({
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
});
