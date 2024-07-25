// // // Home.js

// // import React from 'react';
// // import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you've installed this package
// // import WishList from '../components/WishList';
// // import Announcements from '../components/Announcements';
// // import UpcomingHolidays from '../components/UpcomingHolidays';
// // import Header from './Header';

// // const Home = () => {
// //   const getCurrentDate = () => {
// //     const date = new Date();
// //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
// //     return date.toLocaleDateString('en-US', options);
// //   };

// //   const actions = [
// //     { name: 'Apply Leave', icon: 'calendar-plus', color: '#FF6347' },
// //     { name: 'Payslip', icon: 'file-document', color: '#4682B4' },
// //     { name: 'My Approvals', icon: 'check-circle-outline', color: '#32CD32' },
// //     { name: 'My Requests', icon: 'clipboard-list-outline', color: '#FFD700' },
// //     { name: 'Reimbursement', icon: 'currency-usd', color: '#FF4500' },
// //     { name: 'Attendance Logs', icon: 'clipboard-check-outline', color: '#6A5ACD' },
// //     { name: 'HR Policies', icon: 'file-document-outline', color: '#DC143C' },
// //     { name: 'Tasks', icon: 'checkbox-marked-circle-outline', color: '#20B2AA' },
// //     { name: 'Create Request', icon: 'plus-box', color: '#8A2BE2' },
// //     { name: 'Counseling', icon: 'account-question-outline', color: '#32CD32' },
// //     { name: 'Holidays', icon: 'calendar', color: '#FF4500' },
// //     { name: 'Other', icon: 'dots-horizontal', color: '#808080' },
// //   ];

// //   return (
// //     <View style={styles.container}>
// //       <View>
// //         <Header />
// //       </View>

// //       <ScrollView>
// //         <View style={styles.overviewCard}>
// //           <Text style={styles.dateText}>Today's Overview</Text>
// //           <Text style={styles.dateText}>{getCurrentDate()}</Text>
// //           <View style={styles.checks}>
// //             <View style={styles.clockInOut}>
// //               <View style={styles.clockColumn}>
// //                 <Text style={styles.clockLabel}>Clock In</Text>
// //                 <Text style={styles.timeText}>08.00 AM</Text>
// //                 <View style={styles.statusContainer}>
// //                   <Text style={styles.statusText}>Done at 07:58 AM</Text>
// //                 </View>
// //               </View>
// //               <View style={styles.divider} />
// //               <View style={styles.clockColumn}>
// //                 <Text style={styles.clockLabel}>Clock Out</Text>
// //                 <Text style={styles.timeText}>05.00 PM</Text>
// //                 <View style={styles.notYetBadge}>
// //                   <Text style={styles.notYetText}>Not yet</Text>
// //                 </View>
// //               </View>
// //             </View>
// //           </View>
// //         </View>

// //         <View style={styles.quickActions}>
// //           {actions.map((action, index) => (
// //             <TouchableOpacity key={index} style={styles.actionButton}>
// //               <View style={styles.iconContainer}>
// //                 <MaterialCommunityIcons name={action.icon} size={30} color={action.color} />
// //               </View>
// //               <Text style={styles.actionText}>{action.name}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>

// //         <View>
// //           <WishList />
// //         </View>
// //         <View style={styles.announcement}>
// //           <Announcements />
// //         </View>
// //         <View style={styles.announcement}>
// //           <UpcomingHolidays />
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f9f8fa',
// //   },
// //   checks: {
// //     borderRadius: 16,
// //     backgroundColor: '#f9f8fa',
// //     padding: 20,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     padding: 16,
// //     backgroundColor: '#fff',
// //   },
// //   profilePic: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 12,
// //   },
// //   headerText: {
// //     flex: 1,
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   overviewCard: {
// //     backgroundColor: '#fff',
// //     margin: 16,
// //     padding: 16,
// //     borderRadius: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 3,
// //   },
// //   dateText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginBottom: 12,
// //   },
// //   clockInOut: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   divider: {
// //     width: 1,
// //     height: '100%',
// //     backgroundColor: '#ddd',
// //     marginHorizontal: 10,
// //   },
// //   clockColumn: {
// //     alignItems: 'center',
// //   },
// //   clockLabel: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 4,
// //   },
// //   timeText: {
// //     fontSize: 26,
// //     fontWeight: 'bold',
// //     color: '#000',
// //     marginBottom: 4,
// //   },
// //   statusContainer: {
// //     backgroundColor: 'white', // Light green background
// //     paddingHorizontal: 10,
// //     paddingVertical: 4,
// //     borderRadius: 16, // Rounded corners for pill shape
// //     elevation: 1, // For Android shadow
// //   },
// //   statusText: {
// //     fontSize: 12,
// //     color: '#4CAF50', // Green text color
// //     fontWeight: '500',
// //     padding: 5,
// //   },
// //   notYetBadge: {
// //     backgroundColor: '#000',
// //     paddingHorizontal: 8,
// //     paddingVertical: 2,
// //     borderRadius: 12,
// //   },
// //   notYetText: {
// //     textAlign: 'center',
// //     width: 80,
// //     color: '#fff',
// //     fontSize: 12,
// //     fontWeight: 'bold',
// //     padding: 5,
// //   },
// //   quickActions: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between',
// //     marginVertical: 16,
// //     paddingHorizontal: 16,
// //   },
// //   actionButton: {
// //     alignItems: 'center',
// //     width: '22%', // Adjust width for proper alignment of 4 items per row
// //     marginVertical: 8,
// //   },
// //   iconContainer: {
// //     backgroundColor: '#fff',
// //     padding: 12,
// //     borderRadius: 16,
// //     marginBottom: 4,
// //     elevation: 3,
// //   },
// //   actionText: {
// //     fontSize: 12,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   announcement: {
// //     flex: 1,
// //     padding: 16,
// //   },
// // });

// // export default Home;


// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import WishList from '../components/WishList';
// import Announcements from '../components/Announcements';
// import UpcomingHolidays from '../components/UpcomingHolidays';
// import Header from './Header';

// const Home = ({ navigation }) => {
//   const getCurrentDate = () => {
//     const date = new Date();
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   const actions = [
//     { name: 'Apply Leave', icon: 'calendar-plus', color: '#FF6347', screen: 'ApplyLeave' },
//     { name: 'Payslip', icon: 'file-document', color: '#4682B4', screen: 'Payslip' },
//     { name: 'My Approvals', icon: 'check-circle-outline', color: '#32CD32', screen: 'MyApprovals' },
//     { name: 'My Requests', icon: 'clipboard-list-outline', color: '#FFD700', screen: 'MyRequests' },
//     { name: 'Reimbursement', icon: 'currency-usd', color: '#FF4500', screen: 'Reimbursement' },
//     { name: 'Attendance Logs', icon: 'clipboard-check-outline', color: '#6A5ACD', screen: 'AttendanceLogs' },
//     { name: 'HR Policies', icon: 'file-document-outline', color: '#DC143C', screen: 'HRPolicies' },
//     { name: 'Tasks', icon: 'checkbox-marked-circle-outline', color: '#20B2AA', screen: 'Tasks' },
//     { name: 'Create Request', icon: 'plus-box', color: '#8A2BE2', screen: 'CreateRequest' },
//     { name: 'Counseling', icon: 'account-question-outline', color: '#32CD32', screen: 'Counseling' },
//     { name: 'Holidays', icon: 'calendar', color: '#FF4500', screen: 'Holidays' },
//     { name: 'Other', icon: 'dots-horizontal', color: '#808080', screen: 'Other' },
//   ];
//   const clockInTime = '08.00 AM';
//   const clockOutTime = null; // Assume clock-out time is not yet available
//   const clockInStatus = 'Done at 07:58 AM';

//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <View style={styles.overviewCard}>
//           <Text style={styles.dateText}>Today's Overview</Text>
//           <Text style={styles.dateText}>{getCurrentDate()}</Text>
//           <View style={styles.checks}>
//             <View style={styles.clockInOut}>
//               <View style={styles.clockColumn}>
//                 <Text style={styles.clockLabel}>Clock In</Text>
//                 <Text style={styles.timeText}>08.00 AM</Text>
//                 <View style={styles.statusContainer}>
//                   <Text style={styles.statusText}>Done at 07:58 AM</Text>
//                 </View>
//               </View>
//               <View style={styles.divider} />
//               <View style={styles.clockColumn}>
//                 <Text style={styles.clockLabel}>Clock Out</Text>
//                 <Text style={styles.timeText}>05.00 PM</Text>
//                 <View style={styles.notYetBadge}>
//                   <Text style={styles.notYetText}>Not yet</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.quickActions}>
//           {actions.map((action, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.actionButton}
//               onPress={() => navigation.navigate(action.screen)}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name={action.icon} size={30} color={action.color} />
//               </View>
//               <Text style={styles.actionText}>{action.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View>
//           <WishList />
//         </View>
//         <View style={styles.announcement}>
//           <Announcements />
//         </View>
//         <View style={styles.announcement}>
//           <UpcomingHolidays />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f8fa',
//   },
//   checks: {
//     borderRadius: 16,
//     backgroundColor: '#f9f8fa',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   profilePic: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   headerText: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   overviewCard: {
//     backgroundColor: '#fff',
//     margin: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   dateText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   clockInOut: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   divider: {
//     width: 1,
//     height: '100%',
//     backgroundColor: '#ddd',
//     marginHorizontal: 10,
//   },
//   clockColumn: {
//     alignItems: 'center',
//   },
//   clockLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   timeText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 4,
//   },
//   statusContainer: {
//     backgroundColor: 'white', // Light green background
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 16, // Rounded corners for pill shape
//     elevation: 1, // For Android shadow
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#4CAF50', // Green text color
//     fontWeight: '500',
//     padding: 5,
//   },
//   notYetBadge: {
//     backgroundColor: '#000',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   notYetText: {
//     textAlign: 'center',
//     width: 80,
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//     padding: 5,
//   },
//   quickActions: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//     paddingHorizontal: 16,
//   },
//   actionButton: {
//     alignItems: 'center',
//     width: '22%', // Adjust width for proper alignment of 4 items per row
//     marginVertical: 8,
//   },
//   iconContainer: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 4,
//     elevation: 3,
//   },
//   actionText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   announcement: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default Home;


// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import WishList from '../components/WishList';
// import Announcements from '../components/Announcements';
// import UpcomingHolidays from '../components/UpcomingHolidays';
// import Header from './Header';

// const Home = ({ navigation }) => {
//   const getCurrentDate = () => {
//     const date = new Date();
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   const actions = [
//     { name: 'Apply Leave', icon: 'calendar-plus', color: '#FF6347', screen: 'ApplyLeave' },
//     { name: 'Payslip', icon: 'file-document', color: '#4682B4', screen: 'Payslip' },
//     { name: 'My Approvals', icon: 'check-circle-outline', color: '#32CD32', screen: 'MyApprovals' },
//     { name: 'My Requests', icon: 'clipboard-list-outline', color: '#FFD700', screen: 'MyRequests' },
//     { name: 'Reimbursement', icon: 'currency-usd', color: '#FF4500', screen: 'Reimbursement' },
//     { name: 'Attendance Logs', icon: 'clipboard-check-outline', color: '#6A5ACD', screen: 'AttendanceLogs' },
//     { name: 'HR Policies', icon: 'file-document-outline', color: '#DC143C', screen: 'HRPolicies' },
//     { name: 'Tasks', icon: 'checkbox-marked-circle-outline', color: '#20B2AA', screen: 'Tasks' },
//     { name: 'Create Request', icon: 'plus-box', color: '#8A2BE2', screen: 'CreateRequest' },
//     { name: 'Counseling', icon: 'account-question-outline', color: '#32CD32', screen: 'Counseling' },
//     { name: 'Holidays', icon: 'calendar', color: '#FF4500', screen: 'Holidays' },
//     { name: 'Other', icon: 'dots-horizontal', color: '#808080', screen: 'Other' },
//   ];

//   const clockInTime = '08.00 AM';
//   const clockOutTime = '06:30 PM'; // Assume clock-out time is available
//   const clockInStatus = null;
//   const clockOutStatus = null;


//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <View style={styles.overviewCard}>
//           <Text style={styles.dateText}>Today's Overview</Text>
//           <Text style={styles.dateText}>{getCurrentDate()}</Text>
//           <View style={styles.checks}>
//             <View style={styles.clockInOut}>
//               <View style={styles.clockColumn}>
//                 <Text style={styles.clockLabel}>Clock In</Text>
//                 <Text style={styles.timeText}>
//                   {clockInTime ? clockInTime : 'Not yet'}
//                 </Text>
//                 <View style={styles.statusContainer}>
//                   <Text style={styles.statusText}>
//                   {clockInStatus ? clockInStatus : 'Not yet'}
//                   </Text>
//                 </View>
//               </View>
//               <View style={styles.divider} />
//               <View style={styles.clockColumn}>
//                 <Text style={styles.clockLabel}>Clock Out</Text>
//                 <Text style={styles.timeText}>
//                   {clockOutTime ? clockOutTime : 'Not yet'}
//                 </Text>
//                 <View style={styles.statusContainer}>
//                   <Text style={styles.statusText}>
//                   {clockOutStatus ? clockOutStatus : 'Not yet'}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.quickActions}>
//           {actions.map((action, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.actionButton}
//               onPress={() => navigation.navigate(action.screen)}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name={action.icon} size={30} color={action.color} />
//               </View>
//               <Text style={styles.actionText}>{action.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View>
//           <WishList />
//         </View>
//         <View style={styles.announcement}>
//           <Announcements />
//         </View>
//         <View style={styles.announcement}>
//           <UpcomingHolidays />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f8fa',
//   },
//   checks: {
//     borderRadius: 16,
//     backgroundColor: '#f9f8fa',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   profilePic: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   headerText: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   overviewCard: {
//     backgroundColor: '#fff',
//     margin: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   dateText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   clockInOut: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   divider: {
//     width: 1,
//     height: '100%',
//     backgroundColor: '#ddd',
//     marginHorizontal: 10,
//   },
//   clockColumn: {
//     alignItems: 'center',
//   },
//   clockLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   timeText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 4,
//   },
//   statusContainer: {
//     backgroundColor: 'white', // Light green background
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 16, // Rounded corners for pill shape
//     elevation: 1, // For Android shadow
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#4CAF50', // Green text color
//     fontWeight: '500',
//     padding: 5,
//   },
//   notYetBadge: {
//     backgroundColor: '#000',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   notYetText: {
//     textAlign: 'center',
//     width: 80,
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//     padding: 5,
//   },
//   quickActions: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//     paddingHorizontal: 16,
//   },
//   actionButton: {
//     alignItems: 'center',
//     width: '22%', // Adjust width for proper alignment of 4 items per row
//     marginVertical: 8,
//   },
//   iconContainer: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 4,
//     elevation: 3,
//   },
//   actionText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   announcement: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default Home;

// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import WishList from '../components/WishList';
// import Announcements from '../components/Announcements';
// import UpcomingHolidays from '../components/UpcomingHolidays';
// import Header from './Header';

// const Home = ({ navigation }) => {
//   const getCurrentDate = () => {
//     const date = new Date();
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return date.toLocaleDateString('en-US', options);
//   };

//   const actions = [
//     { name: 'Apply Leave', icon: 'calendar-plus', color: '#FF6347', screen: 'ApplyLeave' },
//     { name: 'Payslip', icon: 'file-document', color: '#4682B4', screen: 'Payslip' },
//     { name: 'My Approvals', icon: 'check-circle-outline', color: '#32CD32', screen: 'MyApprovals' },
//     { name: 'My Requests', icon: 'clipboard-list-outline', color: '#FFD700', screen: 'MyRequests' },
//     { name: 'Reimbursement', icon: 'currency-usd', color: '#FF4500', screen: 'Reimbursement' },
//     { name: 'Attendance Logs', icon: 'clipboard-check-outline', color: '#6A5ACD', screen: 'AttendanceLogs' },
//     { name: 'HR Policies', icon: 'file-document-outline', color: '#DC143C', screen: 'HRPolicies' },
//     { name: 'Tasks', icon: 'checkbox-marked-circle-outline', color: '#20B2AA', screen: 'Tasks' },
//     { name: 'Create Request', icon: 'plus-box', color: '#8A2BE2', screen: 'CreateRequest' },
//     { name: 'Counseling', icon: 'account-question-outline', color: '#32CD32', screen: 'Counseling' },
//     { name: 'Holidays', icon: 'calendar', color: '#FF4500', screen: 'Holidays' },
//     { name: 'Other', icon: 'dots-horizontal', color: '#808080', screen: 'Other' },
//   ];

//   const clockInTime = '08.00 AM';
//   const clockOutTime = '06:30 PM'; // Assume clock-out time is available
//   const clockInStatus = '08.00 AM';
//   const clockOutStatus = null;

//   return (
//     <View style={styles.container}>
//       <Header />
//       <ScrollView>
//         <View style={styles.overviewCard}>
//           <Text style={styles.dateText}>Today's Overview</Text>
//           <Text style={styles.dateText}>{getCurrentDate()}</Text>
//           <View style={styles.checks}>
//             <View style={styles.clockInOut}>
//               <View style={styles.clockColumn}>
//                 <Text style={styles.clockLabel}>Clock In</Text>
//                 <Text
//                   style={[
//                     styles.timeText,
//                     !clockInTime && styles.notYetTime
//                   ]}
//                 >
//                   {clockInTime ? clockInTime : 'Not yet'}
//                 </Text>
//                 <View
//                   style={[
//                     styles.statusContainer,
//                     !clockInStatus && styles.notYetStatus
//                   ]}
//                 >
//                   <Text
//                     style={[
//                       styles.statusText,
//                       !clockInStatus && styles.notYetStatusText
//                     ]}
//                   >
//                      {clockInStatus ? `Done at ${clockInStatus}` : 'Not yet'}
//                   </Text>
//                 </View>
//               </View>
//               <View style={styles.divider} />
//               <View style={styles.clockColumn}>
//                 <Text style={styles.clockLabel}>Clock Out</Text>
//                 <Text
//                   style={[
//                     styles.timeText,
//                     !clockOutTime && styles.notYetTime
//                   ]}
//                 >
//                   {clockOutTime ? clockOutTime : 'Not yet'}
//                 </Text>
//                 <View
//                   style={[
//                     styles.statusContainer,
//                     !clockOutStatus && styles.notYetStatus
//                   ]}
//                 >
//                   <Text
//                     style={[
//                       styles.statusText,
//                       !clockOutStatus && styles.notYetStatusText
//                     ]}
//                   >
//                      {clockOutStatus ? `Done at ${clockOutStatus}` : 'Not yet'}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.quickActions}>
//           {actions.map((action, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.actionButton}
//               onPress={() => navigation.navigate(action.screen)}
//             >
//               <View style={styles.iconContainer}>
//                 <MaterialCommunityIcons name={action.icon} size={30} color={action.color} />
//               </View>
//               <Text style={styles.actionText}>{action.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View>
//           <WishList />
//         </View>
//         <View style={styles.announcement}>
//           <Announcements />
//         </View>
//         <View style={styles.announcement}>
//           <UpcomingHolidays />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f8fa',
//   },
//   checks: {
//     borderRadius: 16,
//     backgroundColor: '#f9f8fa',
//     padding: 20,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   profilePic: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   headerText: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   overviewCard: {
//     backgroundColor: '#fff',
//     margin: 16,
//     padding: 16,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   dateText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   clockInOut: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   divider: {
//     width: 1,
//     height: '100%',
//     backgroundColor: '#ddd',
//     marginHorizontal: 10,
//   },
//   clockColumn: {
//     alignItems: 'center',
//   },
//   clockLabel: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   timeText: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 4,
//   },
//   notYetTime: {
//     color: '#888', // Gray color for "Not yet"
//   },
//   statusContainer: {
//     backgroundColor: 'white', // Light green background
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 16, // Rounded corners for pill shape
//     elevation: 1, // For Android shadow
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#4CAF50', // Green text color
//     fontWeight: '500',
//     padding: 5,
//   },
//   notYetStatus: {
//     backgroundColor: '#000',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   notYetStatusText: {
//     color: '#fff', 
//   },
//   quickActions: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginVertical: 16,
//     paddingHorizontal: 16,
//   },
//   actionButton: {
//     alignItems: 'center',
//     width: '22%', // Adjust width for proper alignment of 4 items per row
//     marginVertical: 8,
//   },
//   iconContainer: {
//     backgroundColor: '#fff',
//     padding: 12,
//     borderRadius: 16,
//     marginBottom: 4,
//     elevation: 3,
//   },
//   actionText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   announcement: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default Home;

import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WishList from '../components/WishList';
import Announcements from '../components/Announcements';
import UpcomingHolidays from '../components/UpcomingHolidays';
import Header from './Header';

const Home = ({ navigation }) => {


  const actions = [
    { name: 'In/Out', icon: 'clock', color: '#add8e6', screen: 'CheckInOut' },
    { name: 'Apply Leave', icon: 'calendar-plus', color: '#FF6347', screen: 'ApplyLeave' },
    { name: 'Payslip', icon: 'file-document', color: '#4682B4', screen: 'Payslip' },
    { name: 'My Approvals', icon: 'check-circle-outline', color: '#32CD32', screen: 'MyApprovals' },
    { name: 'My Requests', icon: 'clipboard-list-outline', color: '#FFD700', screen: 'MyRequests' },
    { name: 'Reimbursement', icon: 'currency-usd', color: '#FF4500', screen: 'Reimbursement' },
    { name: 'Attendance Logs', icon: 'clipboard-check-outline', color: '#6A5ACD', screen: 'AttendanceLogs' },
    { name: 'HR Policies', icon: 'file-document-outline', color: '#DC143C', screen: 'HRPolicies' },
    { name: 'Tasks', icon: 'checkbox-marked-circle-outline', color: '#20B2AA', screen: 'Tasks' },
    { name: 'Create Request', icon: 'plus-box', color: '#8A2BE2', screen: 'CreateRequest' },
    { name: 'Counseling', icon: 'account-question-outline', color: '#32CD32', screen: 'Counseling' },
    { name: 'Holidays', icon: 'calendar', color: '#FF4500', screen: 'Holidays' },
    { name: 'Other', icon: 'dots-horizontal', color: '#808080', screen: 'Other' },
  ];

 


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.quickActions}>
          {actions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionButton}
              onPress={() => navigation.navigate(action.screen)}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name={action.icon} size={30} color={action.color} />
              </View>
              <Text style={styles.actionText}>{action.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <WishList />
        </View>
        <View style={styles.announcement}>
          <Announcements />
        </View>
        <View style={styles.announcement}>
          <UpcomingHolidays />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f8fa',
  },
  checks: {
    borderRadius: 16,
    backgroundColor: '#f9f8fa',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  overviewCard: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  clockInOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ddd',
    marginHorizontal: 10,
  },
  clockColumn: {
    alignItems: 'center',
  },
  clockLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  statusContainer: {
    backgroundColor: 'white', // Light green background
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16, // Rounded corners for pill shape
    elevation: 1, // For Android shadow
  },
  statusText: {
    fontSize: 12,
    color: '#4CAF50', // Green text color
    fontWeight: '500',
    padding: 5,
  },
  notYetBadge: {
    backgroundColor: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  notYetText: {
    textAlign: 'center',
    width: 80,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  actionButton: {
    alignItems: 'center',
    width: '22%', // Adjust width for proper alignment of 4 items per row
    marginVertical: 8,
  },
  iconContainer: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 16,
    marginBottom: 4,
    elevation: 3,
  },
  actionText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  announcement: {
    flex: 1,
    padding: 16,
  },
});

export default Home;
