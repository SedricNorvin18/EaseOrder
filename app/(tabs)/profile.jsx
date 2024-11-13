import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/346617600_915993242954839_7738308730381367328_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFgGiJr6zmlBDe9AjM4DgaGiX1tX0hAVWKJfW1fSEBVYiv7Oik0I2q9K8gvHwPT1DCrOeVEbexi5HzOQyLciz6K&_nc_ohc=9EGr4lRhtgoQ7kNvgF4DgTw&_nc_ht=scontent.fceb1-1.fna&_nc_gid=A7wIUecxFdzd4lfkCP57eON&oh=00_AYATjf28ZqF-HNfhG5La8wQGI9QndCEMrvAzqvQ0C_TQcQ&oe=670A8BF1' }}
          style={styles.profileImage}
        />
        <View style={styles.bioContainer}>
          <Text style={styles.userName}>Sedric Norvin Cabiles</Text>
          <Text style={styles.userBio}>A passionate developer and tech enthusiast.</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>Account Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>sedric.norvin12@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoText}>Toledo City, Cebu</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>+63 912 345 6789</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Date of Birth:</Text>
          <Text style={styles.infoText}>November 18, 1995</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender:</Text>
          <Text style={styles.infoText}>Male</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Membership Status:</Text>
          <Text style={styles.infoText}>Gold Member</Text>
        </View>
      </View>
      
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Your Orders:</Text>
        {/* Placeholder for ordered items */}
        <Text style={styles.orderItem}>1x Burger</Text>
        <Text style={styles.orderItem}>2x Pizza</Text>
        <Text style={styles.orderItem}>3x Salad</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    marginTop: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20, // Add some space between image and text
  },
  bioContainer: {
    flex: 1, // Take up the remaining space
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  userBio: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  infoHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  footerContainer: {
    marginTop: 20,
    backgroundColor: '#FFFAE6', // Changed background color for visibility
    borderRadius: 20,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  orderItem: {
    fontSize: 16,
    color: '#666',
  },
});

export default Profile;
