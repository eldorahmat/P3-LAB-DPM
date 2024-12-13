import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const OrderScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState(2);  
  const [selectedItem, setSelectedItem] = useState(null); 
  const menuItems = [
    { id: '1', name: 'Beat Esp 2017 (std ytta)', price: 15000000, image: require('../../assets/motor.jpg') },
    { id: '2', name: 'Aerox Abs 2020 (kiporno)', price: 28000000, image: require('../../assets/motor2.jpg') },
    { id: '3', name: 'Nmax 2022 (standar)', price: 32000000, image: require('../../assets/motor1.jpg') },
  ];

  const totalPrice = selectedItem ? selectedItem.price * quantity : 0;

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Motor Second Terbaik</Text>


      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleSelectItem(item)}
          >
            <Text style={styles.menuItemText}>{item.name}</Text>
            <Text style={styles.menuItemPrice}>{item.price.toLocaleString()}</Text>
          </TouchableOpacity>
        )}
      />

      {selectedItem && (
        <View style={styles.orderDetails}>
          <Text style={styles.orderText}>Order: {selectedItem.name}</Text>

          <View style={styles.quantityContainer}>
            <Text style={styles.orderText}>Quantity: {quantity}</Text>
            <Image
              source={selectedItem.image} 
              style={styles.image}
            />
          </View>

          <Text style={styles.orderText}>Price per item: {selectedItem.price.toLocaleString()}</Text>

          <View style={styles.priceContainer}>
            <Text style={styles.orderText}>Total Price: {totalPrice.toLocaleString()}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button1} onPress={handleSubtract}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button1} onPress={handleAdd}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ConfirmationScreen', {
            quantity: quantity,
            totalPrice: totalPrice,
            orderName: selectedItem ? selectedItem.name : '',
          });
        }}
      >
        <Text style={styles.buttonText}>Pesan Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9',
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 80,
    marginTop:40,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItemText: {
    fontSize: 18,
    color: '#555',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#999',
  },
  orderDetails: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: 350,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  orderText: {
    fontSize: 18,
    color: '#555',
    paddingVertical: 0,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 120,  
  },
  priceContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#a42527',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  button1: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2, 
    shadowColor: '#2980b9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
