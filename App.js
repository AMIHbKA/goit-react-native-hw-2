import { StatusBar } from "expo-status-bar";
import { LoginScreenAdaptive } from "./src/Screens/LoginScreen/LoginScreenAdaptive";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { RegistrationScreenAdaptive } from "./src/Screens/RegistrationScreen/RegistrationScreenAdaptive";

export default function App() {
  return (
    <>
      <StatusBar />
      {/* <RegistrationScreenAdaptive /> */}
      <LoginScreenAdaptive />
      {/* <PostsScreen /> */}
    </>
  );
}
