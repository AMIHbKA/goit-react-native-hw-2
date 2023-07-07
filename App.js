import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import Background from "./src/components/Background/Background";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { LoginScreenAdaptive } from "./src/Screens/LoginScreen/LoginScreenAdaptive";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { RegistrationScreenAdaptive } from "./src/Screens/RegistrationScreen/RegistrationScreenAdaptive";
import { pixels } from "./src/utility/adptivePixels";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* <RegistrationScreen /> */}
      <RegistrationScreenAdaptive />
      {/* <LoginScreenAdaptive /> */}
      {/* <Background /> */}
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
    </>
  );
}
