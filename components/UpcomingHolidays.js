import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HolidayCard = ({ date, name, color }) => (
  <View style={[styles.card, { backgroundColor: color }]}>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const UpcomingHolidays = () => {
  const holidays = [
    { date: '15', name: 'Independence Day', color: '#FF6B6B' },
    { date: '22', name: 'Eid al-Adha', color: '#4ECDC4' },
    { date: '05', name: 'Teachers Day', color: '#45B7D1' },
    { date: '14', name: 'Diwali', color: '#FFA07A' },
    // Add more holidays as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Holidays</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {holidays.map((holiday, index) => (
          <HolidayCard key={index} {...holiday} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  card: {
    width: 120,
    height: 120,
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
});

export default UpcomingHolidays;