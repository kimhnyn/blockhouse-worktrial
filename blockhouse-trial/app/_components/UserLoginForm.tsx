import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from "react";
import { Link } from "expo-router";



export default function UserLoginForm() {
    
    // handling form logic
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    // const [formValid, setFormValid] = useState(false);
    // const [signUpStatus, setSignUpStatus] = useState(false);

    const validateUsername = () => {
        if (username.length >= 8 && username) {
            setUsernameValid(true);
        } else {
            setUsernameValid(false);
        }
    }

    const validatePassword = () => {
        if ((password.length >= 8) && (/[a-z]/.test(password)) && (/[A-Z]/.test(password)) && (/[^a-zA-Z0-9]/).test(password) && password ) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }

    // const validatePasswordMatch = () => {
    //     if (passwordValid && (password === confirmPassword)) {
    //         setConfirmPasswordValid(true);
    //     } else {
    //         setConfirmPasswordValid(false);
    //     }
    // }

    const handleLogin = () => {
        if (password && username && passwordValid && passwordValid && usernameValid) {
            Alert.alert('Successfully signed up!');
        } else {
            Alert.alert('Username or password invalid.')
        }
        // validation logic
        // if passwords don't match the text turns red 
    }
    // if password is not set, then don't display the text
    // if password is not 
    return (
        <View style={styles.container}>
            <Text style={styles.defaultText}>Log In</Text>
            <Text style={styles.inputHeader}>Username</Text>
            <TextInput
                placeholder="e.g. JohnnySmith0"
                placeholderTextColor= '#737373'
                onChangeText={setUsername}
                value={username}
                style={[styles.input, !usernameValid && username && styles.errorInput]}
                onBlur={() => validateUsername()}
            />
            {/* error text */}
            {!usernameValid && username && <Text style={styles.errorText}>Valid usernames contain 8 or more alphanumeric characters.</Text>}

            <Text style={styles.inputHeader}>Password</Text>
            <TextInput
                placeholder="Enter password"
                placeholderTextColor= '#737373'
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                style={[styles.input, !passwordValid && password && styles.errorInput]}
                onBlur={() => validatePassword()}
            />
            {/* error text */}
            {!passwordValid && password && <Text style={styles.errorText}>Passwords need to have 8 or more characters, at least one lowercase, at least one uppercase, and at least one special character.</Text>}

{/* 
            <Text style={styles.defaultText}>Confirm Password</Text>
            <TextInput
                placeholder="Enter password again"
                placeholderTextColor= '#737373'
                secureTextEntry
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                style={[styles.input, !confirmPasswordValid && confirmPassword && styles.errorInput]}
                onBlur={() => validatePasswordMatch()}
            />
            {/* error text */}
        

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.defaultText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.defaultText}></Text> 
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 250,
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: '#ffffff',
    },
    errorInput: {
        borderColor: '#FF0000',
        color: '#FF0000'
    },
    errorText: {
        color: '#FF0000',
    },
    defaultText: {
        color: '#ffffff',

    },
    inputHeader: {
        textAlign: 'left',
        fontSize: 10,
        color: '#ffffff',
        justifyContent: 'flex-start',
    }
})