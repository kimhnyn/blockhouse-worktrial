import { Text, View, StyleSheet } from "react-native";
import UserSignUpForm from "./_components/UserSignUpForm";

export default function Index() {
  return(
    <View style={styles.homeStyle}>
        <UserSignUpForm />
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