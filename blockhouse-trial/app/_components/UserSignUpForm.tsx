import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function UserSignUpForm() {
    
    // handling form logic
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signUpStatus, setSignUpStatus] = useState(false);

    const handleSignIn = () => {
        // validation logic
        //
    }

    return (
        <View style={styles.container}>
            <Text style={styles.defaultText}>SignUp Form</Text>
            <TextInput
                placeholder="Username"
                placeholderTextColor= '#737373'
                onChangeText={setUsername}
                value={username}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor= '#737373'
                onChangeText={setPassword}
                value={password}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.defaultText}>Already signed up?</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 250,
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 65,
        paddingVertical: 60,
        padding: 16,
        gap: 12,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        backgroundColor: '#7a7a7a',
        color: '#bababa',
    },
    input: {
        borderColor: '#bfbfbf',
        borderStyle: 'solid',
        borderWidth: 1,
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    defaultText: {
        color: '#ffffff',

    }
})