import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const WishList = () => {
  const users = [
    { initials: 'NJ', name: 'NIKHIL J...', date: '07 Sept', status: 'NEW' },
    { initials: 'K', name: 'Keerthana', date: '12 Sept', status: 'WISH' },
    { initials: 'AA', name: 'Peter Pa...', date: 'Today', status: 'NEW' },
    { initials: 'PP', name: 'Peter Pa...', date: '15 Sept', status: 'B-DAY' },
    { initials: '+12', name: 'See more', date: '', status: '' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wish them</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user, index) => (
          <View key={index} style={styles.userCard}>
            <View style={[styles.avatar, { backgroundColor: getAvatarColor(user.status) }]}>
              <Text style={styles.initials}>{user.initials}</Text>
            </View>
            {user.status && (
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(user.status) }]}>
                <Text style={styles.statusText}>{user.status}</Text>
              </View>
            )}
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.date}>{user.date}</Text>
            
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const getAvatarColor = (status) => {
  switch (status) {
    case 'NEW': return '#E6E6FA'; // Light purple
    case 'WISH': return '#FFB6C1'; // Light pink
    case 'B-DAY': return '#ADD8E6'; // Light blue
    default: return '#D3D3D3'; // Light gray
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'NEW': return '#4B0082'; // Indigo
    case 'WISH': return '#FF69B4'; // Hot pink
    case 'B-DAY': return '#1E90FF'; // Dodger blue
    default: return '#808080'; // Gray
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
   
  },
  title: {
    marginLeft:10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  userCard: {
    alignItems: 'center',
    marginRight: 16,
    width: 70,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  initials: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 2,
  },
  date: {
    fontSize: 10,
    color: '#666',
  },
  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: -14,
  },
  statusText: {
    fontSize: 8,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default WishList;