import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UserDashboard({ route }) {
  const { role } = route.params;

  const renderCard = (title, icon, value) => (
    <View style={styles.card}>
      <Ionicons name={icon} size={40} color="#FF9800" />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{role} Dashboard</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeMessage}>Welcome, User!</Text>
        <View style={styles.cardsContainer}>
          {renderCard('Orders', 'ios-cart', '5')}
          {renderCard('Wishlist', 'ios-heart', '12')}
          {renderCard('Rewards', 'ios-star', '150 pts')}
          {renderCard('Coupons', 'ios-pricetag', '3')}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#1a2a3a',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 16,
  },
  welcomeMessage: {
    fontSize: 18,
    color: '#1A237E',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#1A237E',
    marginTop: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF9800',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';
// import styles from './styles.js'

// export default function UserDashborad({ route }) {
//   const { token, role } = route.params;
//   const [dashboardData, setDashboardData] = useState(null);

//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/dashboard', {
//           headers: { 'x-auth-token': token }
//         });
//         setDashboardData(response.data);
//       } catch (error) {
//         console.error('Failed to fetch dashboard data', error);
//       }
//     };

//     fetchDashboardData();
//   }, [token]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{role} Dashboard</Text>
//       {dashboardData && (
//         <>
//           <Text style={styles.message}>{dashboardData.message}</Text>
//           <Text style={styles.data}>{dashboardData.data}</Text>
//         </>
//       )}
//     </View>
//   );
// }