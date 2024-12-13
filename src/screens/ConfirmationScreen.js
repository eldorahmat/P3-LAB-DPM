import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ConfirmationScreen = ({ navigation, route }) => {
  const { quantity, totalPrice, orderName } = route.params;  // Menerima data dari OrderScreen
  const [isConfirmed, setIsConfirmed] = useState(false);  // Menyimpan status konfirmasi
  const [countdown, setCountdown] = useState(5);  // Menghitung mundur waktu

  useEffect(() => {
    // Update status konfirmasi setelah komponen dimuat
    const timer = setTimeout(() => {
      setIsConfirmed(true);  // Mengubah status konfirmasi
    }, 2000); // Status berubah setelah 2 detik

    // Countdown timer untuk memberikan informasi waktu
    const countdownTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Membersihkan timer saat komponen dibersihkan
    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isConfirmed ? 'Order Confirmed!' : 'Processing Your Order...'}
      </Text>

      {/* Menampilkan detail pesanan */}
      {!isConfirmed ? (
        <Text style={styles.message}>
          Please wait while we process your order. {countdown}s left.
        </Text>
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            Your order has been successfully placed!
          </Text>

          {/* Kontainer detail pesanan */}
          <View style={styles.orderDetailsContainer}>
            <Text style={styles.orderDetails}>Order: {orderName}</Text>
            <Text style={styles.orderDetails}>Quantity: {quantity}</Text>
            <Text style={styles.orderDetails}>
              Total Price: {totalPrice.toLocaleString()}
            </Text>
          </View>

          <Text style={styles.message}>Thank you for shopping with us!</Text>
        </View>
      )}

      {/* Tombol Kembali ke Halaman Utama */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OrderScreen')}
      >
        <Text style={styles.buttonText}>Go Back to Order</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#27ae60', // Warna hijau segar untuk pesan konfirmasi
    marginBottom: 20,
  },
  messageContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  orderDetailsContainer: {
    backgroundColor: 'white', // Latar belakang kontainer
    padding: 20,
    marginBottom: 20, // Jarak antar detail dan pesan terima kasih
    borderRadius: 8, // Sudut membulat
    shadowColor: '#bdc3c7', // Bayangan lembut untuk efek 3D
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // Efek bayangan di Android
    width: '100%', // Mengisi lebar kontainer
  },
  orderDetails: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',  // Teks akan sejajar kiri
    marginBottom: 10,  // Memberikan jarak antar baris
  },
  button: {
    backgroundColor: '#a42527',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
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

export default ConfirmationScreen;
