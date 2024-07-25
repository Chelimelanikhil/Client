import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Announcements = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Announcements</Text>
    <View style={styles.cardContainer}>
      <View style={styles.announcement}>
        <View style={styles.announcementHeader}>
          {/* <Image 
            source={require('./user-avatar.png')} 
            style={styles.avatar} 
          /> */}
          <View>
            <Text style={styles.authorText}>SPY made an announcement</Text>
            <Text style={styles.dateText}>07 Sept</Text>
          </View>
        </View>
        <Text style={styles.content}>keka1</Text>
        <Text style={styles.content}>keka</Text>
        <View style={styles.acknowledgedContainer}>
          <Text style={styles.acknowledgedText}>Acknowledged on 12 Sept</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all announcements</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // Container for the whole component
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 8, // Align with card padding
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // for Android
  },
  announcement: {
    marginBottom: 16,
  },
  announcementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
    backgroundColor: '#f0f0f0', // Placeholder color
  },
  authorText: {
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
  },
  content: {
    marginLeft: 40,
    marginBottom: 4,
  },
  acknowledgedContainer: {
    marginLeft: 40,
    backgroundColor: '#e8f5e9',
    borderRadius: 4,
    padding: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  acknowledgedText: {
    fontSize: 12,
    color: '#4caf50',
  },
  seeAll: {
    color: '#1a73e8',
    fontSize: 14,
    marginTop: 8,
  },
});

export default Announcements;