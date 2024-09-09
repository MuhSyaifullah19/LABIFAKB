import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput , TouchableOpacity ,Image, Alert, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import facebook from '../assets/Facebook.jpg'
import google from '../assets/Google.jpg'


const Signup = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Sign-In');
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
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <Text style={styles.teks}>Already have an acount ? 
          <TouchableOpacity style={styles.teks} onPress={goToLogin}>
            <Text style={{color:'blue'}}> Login!</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity style={styles.button} onPress={buttonPress}>
          <Text style={styles.buttonTeks}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.teks2}>Or sign up with acount sosial media</Text>
        <View style={styles.sosmedImage}>
          <TouchableOpacity onPress={openFacebookLoginPage}>
            <Image source={facebook} style = {styles.image} />
          </TouchableOpacity>
          <Image source={google} style = {styles.image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingLeft: 20,
    backgroundColor: '#F2CD5C',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold'
  },
  input: {
    height: 64,
    width: 343,
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
    textShadowColor: 'black',
  },
  teks: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
  },
  panah: {
    width : 30 , 
    height : 15,
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
  teks2: {
    marginTop: 20,
    textAlign: 'center',
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
  },
});

export default Signup;