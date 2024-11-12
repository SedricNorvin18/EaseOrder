import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, TextInput, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router'; 
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
import React from 'react';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "LobsterTwo-Regular": require("../assets/fonts/Lobster/LobsterTwo-Regular.ttf"),
    "LobsterTwo-Bold": require("../assets/fonts/Lobster/LobsterTwo-Bold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.title}>Log In or Sign up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

          
          <Pressable style={styles.btn}>
            <Link href="./home">
              <Text style={styles.btnText}>Log In</Text>
              </Link>
          </Pressable>
          

          <View style={styles.buttonSpacing} />

          <Pressable style={styles.btn2}>
            <Link href="./profile">
              <Text style={styles.btnText}>Sign Up</Text>
            </Link>
          </Pressable>
          
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
  },
  box: {
    width: '80%',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 25,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%', 
  },
  btn: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 100,
    paddingVertical:5,
    borderRadius:5,
  },
  btn2: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 92,
    paddingVertical:5,
    borderRadius:5,
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold'

  },
  buttonSpacing: {
    height: 15,
  },
});
