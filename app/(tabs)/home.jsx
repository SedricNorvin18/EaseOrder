import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import index from '../index'

const Home = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleStartOrder = () => {
    navigation.navigate('menu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image 
          source={require('../../assets/images/logo.png')} // Update the path to your logo
          style={styles.logo} 
        />
        <Text className="font-loregular text-lg mb-8">Welcome to OrderEase!</Text>
        <TouchableOpacity onPress={handleStartOrder} style={styles.button}>
          <Text style={styles.buttonText}>Start Order</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
    marginBottom: 50,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Home;
