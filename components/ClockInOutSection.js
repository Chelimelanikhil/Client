// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ClockInOutSection = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.clockColumn}>
//         <Text style={styles.label}>Clock In</Text>
//         <Text style={styles.time}>08.00 AM</Text>
//         <Text style={styles.status}>Done at 07:58 AM</Text>
//       </View>
//       <View style={styles.clockColumn}>
//         <Text style={styles.label}>Clock Out</Text>
//         <Text style={styles.time}>05.00 PM</Text>
//         <View style={styles.notYetBadge}>
//           <Text style={styles.notYetText}>Not yet</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#ffffff',
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   clockColumn: {
//     alignItems: 'flex-start',
//   },
//   label: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   time: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 4,
//   },
//   status: {
//     fontSize: 12,
//     color: '#4CAF50',
//   },
//   notYetBadge: {
//     backgroundColor: '#000',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   notYetText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });

// export default ClockInOutSection;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClockInOutSection = ({ clockInTime, clockOutTime, clockInStatus }) => {
  return (
    <View style={styles.container}>
      <View style={styles.clockColumn}>
        <Text style={styles.label}>Clock In</Text>
        {clockInTime ? (
          <>
            <Text style={styles.time}>{clockInTime}</Text>
            <Text style={styles.status}>{clockInStatus}</Text>
          </>
        ) : (
          <View style={styles.notYetBadge}>
            <Text style={styles.notYetText}>Not yet</Text>
          </View>
        )}
      </View>
      <View style={styles.clockColumn}>
        <Text style={styles.label}>Clock Out</Text>
        {clockOutTime ? (
          <Text style={styles.time}>{clockOutTime}</Text>
        ) : (
          <View style={styles.notYetBadge}>
            <Text style={styles.notYetText}>Not yet</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  clockColumn: {
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    color: '#4CAF50',
  },
  notYetBadge: {
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  notYetText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ClockInOutSection;
