import { Stack } from "expo-router";
import Login from "./(pages)/login/page";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{ title:"Sign Up" }}/>
      <Stack.Screen name="login" options={{ title: "Log In" }}/>
    </Stack>
  )
}
