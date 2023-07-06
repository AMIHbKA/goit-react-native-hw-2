import { StyleSheet, View } from "react-native";

export const FormLayout = ({ children, height }) => {
  return (
    <View style={[styles.Layout, { height: height || "72%" }]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  Layout: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
  },
});
