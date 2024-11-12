import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

const Checkout = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { orderDetails = [], totalAmount = 0, resetOrder } = route.params || {};

  const [cashInput, setCashInput] = useState('');
  const [paymentMade, setPaymentMade] = useState(false);
  const [change, setChange] = useState(0);
  const [currentOrderDetails, setCurrentOrderDetails] = useState(orderDetails);
  const [currentTotalAmount, setCurrentTotalAmount] = useState(totalAmount);
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
  const [addressInput, setAddressInput] = useState('');
  const [contactInput, setContactInput] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setCurrentOrderDetails(orderDetails);
      setCurrentTotalAmount(totalAmount);
      setPaymentMade(false);
      setChange(0);
      setAddressInput('');
      setContactInput('');
    }, [orderDetails, totalAmount])
  );

  const handlePayment = () => {
    const cash = parseFloat(cashInput);
    if (isNaN(cash) || cash < currentTotalAmount) {
      Alert.alert("Insufficient Cash", "Please enter a valid amount that covers the total.");
    } else {
      const calculatedChange = cash - currentTotalAmount;
      setChange(calculatedChange);
      setPaymentMade(true);
      Alert.alert("Payment Successful", "Thank you for your order!");
    }
  };

  const handleOrderAgain = () => {
    setCurrentOrderDetails([]);
    setCurrentTotalAmount(0);
    setCashInput('');
    setChange(0);
    setPaymentMade(false);
    setAddressInput('');
    setContactInput('');

    if (resetOrder) resetOrder();

    navigation.reset({
      index: 0,
      routes: [{ name: 'menu' }],
    });
  };

  const handleCashOnDelivery = () => {
    if (!addressInput || !contactInput) {
      Alert.alert("Missing Information", "Please enter your address and contact number for cash on delivery.");
      return;
    }
    setPaymentMade(true);
    Alert.alert("Order Placed", `Thank you! Your order will be delivered to ${addressInput}. We will contact you at ${contactInput}.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.headerText}>Receipt</Text>

        <ScrollView style={styles.orderDetailsContainer}>
          {currentOrderDetails.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <Text style={styles.orderItemText}>{item.name}</Text>
              <Text style={styles.orderItemText}>Quantity: {item.quantity}</Text>
              <Text style={styles.orderItemText}>₱{(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.totalText}>Total Amount: ₱{currentTotalAmount.toFixed(2)}</Text>

        {!paymentMade ? (
          <View>
            <Text style={styles.optionHeader}>Payment Options</Text>
            <TouchableOpacity onPress={() => setIsCashOnDelivery(!isCashOnDelivery)}>
              <Text style={styles.toggleText}>
                {isCashOnDelivery ? 'Switch to Cash Payment' : 'Cash on Delivery'}
              </Text>
            </TouchableOpacity>

            {isCashOnDelivery ? (
              <View style={styles.deliverySection}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your address"
                  value={addressInput}
                  onChangeText={setAddressInput}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your contact number"
                  keyboardType="phone-pad"
                  value={contactInput}
                  onChangeText={setContactInput}
                />
                <TouchableOpacity style={styles.payButton} onPress={handleCashOnDelivery}>
                  <Text style={styles.buttonText}>Place Order</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.paymentSection}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter cash amount"
                  keyboardType="numeric"
                  value={cashInput}
                  onChangeText={setCashInput}
                />
                <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
                  <Text style={styles.buttonText}>Pay</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.changeSection}>
            <Text style={styles.changeText}>Change: ₱{change.toFixed(2)}</Text>
            <TouchableOpacity style={styles.orderAgainButton} onPress={handleOrderAgain}>
              <Text style={styles.buttonText}>Order Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  orderDetailsContainer: {
    maxHeight: 200,
    marginBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderItemText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentSection: {
    marginBottom: 20,
  },
  deliverySection: {
    marginBottom: 20,
  },
  optionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  toggleText: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  changeSection: {
    marginTop: 20,
  },
  changeText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4CAF50',
  },
  orderAgainButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Checkout;
