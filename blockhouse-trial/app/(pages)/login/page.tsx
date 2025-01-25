import { Text, View, StyleSheet } from "react-native";
import UserLoginForm from "@/app/_components/UserLoginForm";

export default function Login() {
  return(
    <View style={styles.homeStyle}>
        <UserLoginForm />
    </View>
);
}

const styles = StyleSheet.create({
    homeStyle: {
        height: '100%',
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})