import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const Password =() => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
        <View >
            <Text style={styles.text}>Forgot Password</Text>
            <Text style={styles.teks3}>Pleas, Enter your email address, you will receive a link to create a new password via email.
            </Text>
            <TextInput style={styles.teks2} placeholder="Email" />
            <TouchableOpacity style={styles.buttonTouch}>
                <Text style={styles.buttonTeks}>Send</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2CD5C',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 100,
        paddingLeft: 20,
    },
    text: {
        fontSize: 34,
        fontWeight: 'bold'
    },
    teks2: {
        height: 64,
        width: "auto",
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20
    },
    buttonTouch: {
        backgroundColor: 'red', 
        borderRadius: 8, 
        paddingVertical: 10, 
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonTeks: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    teks3: {
        marginTop: 20,
    }
});

export default Password;