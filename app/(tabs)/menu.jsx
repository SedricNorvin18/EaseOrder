import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  const foodImages = {
    burger: require('../../assets/images/Burger.jpg'),
    pizza: require('../../assets/images/pizza.jpg'),
    pasta: require('../../assets/images/pasta.jpg'),
    sushi: require('../../assets/images/sushi.jpg'),
    salad: require('../../assets/images/salad.jpg'),
    tacos: require('../../assets/images/tacos.jpg'),
    wings: require('../../assets/images/wings.jpg'),
    hotdog: require('../../assets/images/hotdog.jpg'),
  };

  const drinkImages = {
    cola: require('../../assets/images/cola.png'),
    lemonade: require('../../assets/images/lemonade.png'),
    icedTea: require('../../assets/images/icedTea.png'),
    juice: require('../../assets/images/juice.png'),
    water: require('../../assets/images/water.png'),
  };

  const foodItems = [
    { name: 'Burger', price: 329.45, image: foodImages.burger },
    { name: 'Pizza', price: 494.45, image: foodImages.pizza },
    { name: 'Pasta', price: 411.95, image: foodImages.pasta },
    { name: 'Sushi', price: 714.45, image: foodImages.sushi },
    { name: 'Salad', price: 274.55, image: foodImages.salad },
    { name: 'Tacos', price: 356.95, image: foodImages.tacos },
    { name: 'Chicken Wings', price: 549.45, image: foodImages.wings },
    { name: 'Hot Dog', price: 219.45, image: foodImages.hotdog },
  ];

  const drinkItems = [
    { name: 'Cola', price: 30.00, image: drinkImages.cola },
    { name: 'Lemonade', price: 45.00, image: drinkImages.lemonade },
    { name: 'Iced Tea', price: 55.00, image: drinkImages.icedTea },
    { name: 'Juice', price: 60.00, image: drinkImages.juice },
    { name: 'Water', price: 20.00, image: drinkImages.water },
  ];

  const [quantities, setQuantities] = useState(Array(foodItems.length + drinkItems.length).fill(0));

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const totalOrders = quantities.reduce((acc, curr) => acc + curr, 0);
  const totalAmount = quantities.reduce((acc, curr, index) => {
    const price = index < foodItems.length ? foodItems[index].price : drinkItems[index - foodItems.length].price;
    return acc + (curr * price);
  }, 0);

  // Reset function to clear the quantities
  const resetOrder = () => {
    setQuantities(Array(foodItems.length + drinkItems.length).fill(0));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Food Menu</Text>
      </View>
      {foodItems.map((item, index) => (
        <View key={index} style={styles.boxContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleDecrease(index)} style={styles.circleButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantities[index]}</Text>
            <TouchableOpacity onPress={() => handleIncrease(index)} style={styles.circleButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Drinks Menu</Text>
      </View>
      {drinkItems.map((item, index) => (
        <View key={index + foodItems.length} style={styles.boxContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => handleDecrease(index + foodItems.length)} style={styles.circleButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantities[index + foodItems.length]}</Text>
            <TouchableOpacity onPress={() => handleIncrease(index + foodItems.length)} style={styles.circleButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Orders: {totalOrders}</Text>
        <Text style={styles.totalText}>Total Amount: ₱{totalAmount.toFixed(2)}</Text>
      </View>

      <View style={styles.orderedItemsContainer}>
        <Text style={styles.orderedItemsHeader}>Ordered Items</Text>
        {foodItems.concat(drinkItems).map((item, index) => {
          if (quantities[index] > 0) {
            return (
              <View key={index} style={styles.orderedItem}>
                <Text style={styles.orderedItemText}>{item.name}</Text>
                <Text style={styles.orderedItemText}>Quantity: {quantities[index]}</Text>
              </View>
            );
          }
          return null;
        })}

        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() =>
            navigation.navigate('checkout', {
              orderDetails: foodItems.concat(drinkItems)
                .map((item, index) => ({
                  name: item.name,
                  quantity: quantities[index],
                  price: index < foodItems.length ? foodItems[index].price : drinkItems[index - foodItems.length].price,
                }))
                .filter((item) => item.quantity > 0), // Filter out zero quantities
              totalAmount: totalAmount,
              resetOrder: resetOrder, // Pass the resetOrder function
            })
          }
        >
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  scrollContent: {
    paddingBottom: 40,
    paddingTop: 50,
  },
  headerContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'LobsterTwo-Regular'
  },
  boxContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  textContainer: {
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: 10,
  },
  itemName: {
    fontSize: 20,
    fontFamily: 'LobsterTwo-Bold'
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderedItemsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  orderedItemsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderedItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  orderedItemText: {
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
}});

export default Menu;
