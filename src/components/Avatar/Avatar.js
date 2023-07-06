import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { AddPhotoIcon, DelPhotoIcon } from "../UI/icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export const Avatar = () => {
  const [image, setImage] = useState(null);

  const handleAddPress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleDelPress = () => setImage(null);

  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: image }}></Image>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={image ? handleDelPress : handleAddPress}
      >
        {image ? <DelPhotoIcon /> : <AddPhotoIcon />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  photo: {
    position: "absolute",
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
  },
  buttonAdd: {
    justifyContent: "center",
    alignItems: "center",
    top: 15,
    left: 60,
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  border: {
    borderWidth: 2,
    borderColor: "black",
  },
});
