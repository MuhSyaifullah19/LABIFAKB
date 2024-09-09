import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Linking, Alert } from 'react-native';

import Facebook from '../assets/Facebook.jpg'
import Google from '../assets/Google.jpg';

const Signin = ({navigation}) => {
  const goToPassword = () => {
    navigation.navigate('Forgot Password');
  }

  const buttonPress = () => {
    Alert.alert('Button Pressed', 'You Presssed the Button!')
  }

  const openFacebookLoginPage = () => {
    const facebookLoginUrl = 'https://www.facebook.com/login';
    Linking.openURL(facebookLoginUrl);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <Text style={styles.login}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <View>
          <TouchableOpacity onPress={goToPassword}>
            <Text style={styles.buttonTeks2}>Forgot your pasword?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={buttonPress}>
          <Text style={styles.buttonTeks}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.teks2}>Or login with social account</Text>
        <View style={styles.sosmedImage}>
          <TouchableOpacity onPress={openFacebookLoginPage}>
            <Image source={Facebook} style = {styles.image} />
          </TouchableOpacity>
          <Image source={Google} style = {styles.image} />
        </View>
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
  login: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  input: {
    height: 64,
    width: 320,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10
  },
  teks2: {
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
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
  buttonTeks2: {
    marginTop: 20,
    marginBottom: 20,
    color: "black",
    textAlign: "right",
    fontWeight: "bold",
  },
  sosmedImage: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width : 35,
    height : 35,
    resizeMode: 'contain',
  },
});

export default Signin;