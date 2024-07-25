// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native'; 

// const CheckInOut = () => {
//     const navigation = useNavigation();
//     const [selectedMode, setSelectedMode] = useState('home');
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//       <TouchableOpacity onPress={() => navigation.goBack()}> 
//           <Icon name="arrow-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Attendance</Text>
//         <Icon name="person" size={24} color="#000" />
//       </View>
      
//       <View style={styles.locationContainer}>
//         <Icon name="location-on" size={20} color="red" />
//         <Text style={styles.locationText}>California Rosemont, House 222, Block D, Basunti, Dhaka 1212.</Text>
//         <TouchableOpacity>
//           <Icon name="refresh" size={20} color="#4285F4" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.modeContainer}>
//       <Text style={styles.modeTitle}>Choose your remote mode</Text>
//   <View style={styles.modeToggle}>
//     <TouchableOpacity 
//       style={[styles.modeButton, selectedMode === 'home' && styles.activeMode]}
//       onPress={() => setSelectedMode('home')}
//     >
//       <Icon name="home" size={20} color={selectedMode === 'home' ? '#4285F4' : '#fff'} />
//       <Text style={[styles.modeButtonText, selectedMode === 'home' && styles.activeModeText]}>Home</Text>
//     </TouchableOpacity>
//     <TouchableOpacity 
//       style={[styles.modeButton, selectedMode === 'office' && styles.activeMode]}
//       onPress={() => setSelectedMode('office')}
//     >
//       <Icon name="business" size={20} color={selectedMode === 'office' ? '#4285F4' : '#fff'} />
//       <Text style={[styles.modeButtonText, selectedMode === 'office' && styles.activeModeText]}>Office</Text>
//     </TouchableOpacity>
//   </View>
// </View>
      
//       <View style={styles.timeContainer}>
//         <Text style={styles.time}>04:34</Text>
//         <Text style={styles.timePeriod}>PM</Text>
//       </View>
//       <Text style={styles.date}>Wednesday, June 8, 2022</Text>
      
//       <TouchableOpacity style={styles.checkOutButton}>
//         <Icon name="touch-app" size={44} color="#fff" />
//         <Text style={styles.checkOutText}>Check Out</Text>
//       </TouchableOpacity>
      
//       <View style={styles.footerContainer}>
//         <View style={styles.footerItem}>
//           <Icon name="access-time" size={24} color="#000" />
//           <Text>9:12 AM</Text>
//           <Text>Check In</Text>
//         </View>
//         <View style={styles.footerItem}>
//           <Icon name="access-time" size={24} color="#000" />
//           <Text>--:--</Text>
//           <Text>Check Out</Text>
//         </View>
//         <View style={styles.footerItem}>
//           <Icon name="timer" size={24} color="#000" />
//           <Text>--:--</Text>
//           <Text>Working Hrs</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   modeContainer:{
//     display:'flex',
//     alignItems:'center'

//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#E8F0FE',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   locationText: {
//     flex: 1,
//     marginHorizontal: 10,
//     fontSize: 12,
//   },
//   modeToggle: {
//     flexDirection: 'row',
//     backgroundColor: '#4285F4',
//     borderRadius: 25,
//     marginTop: 10,
//     padding: 4,
//     width:'70%',
//   },
//   modeButton: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 21,
//   },
//   activeMode: {
//     backgroundColor: '#fff',
//   },
//   modeTitle: {
//     fontWeight: 'bold',
//   },
//   modeButtonText: {
//     marginLeft: 5,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   activeModeText: {
//     color: '#4285F4',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     alignItems: 'baseline',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   time: {
//     fontSize: 48,
//     fontWeight: 'bold',
//   },
//   timePeriod: {
//     fontSize: 24,
//     marginLeft: 5,
//   },
//   date: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   checkOutButton: {
   
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#E91E63',
//     padding: 15,
//     borderRadius: 100,
//     marginBottom: 20,
//     width: 200,
//     height: 200,
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   checkOutText: {
//     marginTop:10,
//     color: '#fff',
//     marginLeft: 10,
//     fontSize: 18,
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   footerItem: {
//     alignItems: 'center',
//   },
// });


// export default CheckInOut;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

// const CheckInOut = () => {
//     const navigation = useNavigation();
//     const [selectedMode, setSelectedMode] = useState('home');
//     const [checkInTime, setCheckInTime] = useState(null);
//     const [checkOutTime, setCheckOutTime] = useState(null);
//     const [workingHours, setWorkingHours] = useState(null);
//     const [timer, setTimer] = useState(null);

//     const getCurrentTime = () => {
//         const now = new Date();
//         return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     const calculateWorkingHours = (checkIn, checkOut) => {
//         if (!checkIn || !checkOut) return '--:--'; // Handle missing times

//         const [checkInHour, checkInMinute] = checkIn.split(':').map(Number);
//         const [checkOutHour, checkOutMinute] = checkOut.split(':').map(Number);

//         const checkInDate = new Date();
//         checkInDate.setHours(checkInHour, checkInMinute, 0, 0);
//         const checkOutDate = new Date();
//         checkOutDate.setHours(checkOutHour, checkOutMinute, 0, 0);

//         const diff = checkOutDate - checkInDate;
//         if (diff < 0) return 'Error'; // Handle invalid time range

//         const hours = Math.floor(diff / (1000 * 60 * 60));
//         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         return `${hours} hrs ${minutes} mins`;
//     };

//     useEffect(() => {
//         if (checkInTime && !checkOutTime) {
//             const interval = setInterval(() => {
//                 const now = new Date();
//                 const [checkInHour, checkInMinute] = checkInTime.split(':').map(Number);
//                 const checkInDate = new Date();
//                 checkInDate.setHours(checkInHour, checkInMinute, 0, 0);

//                 const diff = now - checkInDate;
//                 const hours = Math.floor(diff / (1000 * 60 * 60));
//                 const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//                 setTimer(`${hours} hrs ${minutes} mins`);
//             }, 1000);
//             return () => clearInterval(interval);
//         }
//     }, [checkInTime, checkOutTime]);

//     const handleCheckIn = () => {
//         const currentTime = getCurrentTime();

//         setCheckInTime(currentTime);
//         setWorkingHours(null); 
//     };

//     const handleCheckOut = () => {
//         const currentTime = getCurrentTime();
//         setCheckOutTime(currentTime);
//         const calculatedWorkingHours = calculateWorkingHours(checkInTime, currentTime);
//         setWorkingHours(calculatedWorkingHours);
//         setTimer(null); // Stop the timer when checking out
//     };

//     const isDoneForToday = checkInTime && checkOutTime;

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                     <Icon name="arrow-back" size={24} color="#000" />
//                 </TouchableOpacity>
//                 <Text style={styles.headerTitle}>Attendance</Text>
//                 <Icon name="person" size={24} color="#000" />
//             </View>

//             <View style={styles.locationContainer}>
//                 <Icon name="location-on" size={20} color="red" />
//                 <Text style={styles.locationText}>California Rosemont, House 222, Block D, Basunti, Dhaka 1212.</Text>
//                 <TouchableOpacity>
//                     <Icon name="refresh" size={20} color="#4285F4" />
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.modeContainer}>
//                 <Text style={styles.modeTitle}>Choose your remote mode</Text>
//                 <View style={styles.modeToggle}>
//                     <TouchableOpacity
//                         style={[styles.modeButton, selectedMode === 'home' && styles.activeMode]}
//                         onPress={() => setSelectedMode('home')}
//                     >
//                         <Icon name="home" size={20} color={selectedMode === 'home' ? '#4285F4' : '#fff'} />
//                         <Text style={[styles.modeButtonText, selectedMode === 'home' && styles.activeModeText]}>Home</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[styles.modeButton, selectedMode === 'office' && styles.activeMode]}
//                         onPress={() => setSelectedMode('office')}
//                     >
//                         <Icon name="business" size={20} color={selectedMode === 'office' ? '#4285F4' : '#fff'} />
//                         <Text style={[styles.modeButtonText, selectedMode === 'office' && styles.activeModeText]}>Office</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             <View style={styles.timeContainer}>
//                 <Text style={styles.time}>04:34</Text>
//                 <Text style={styles.timePeriod}>PM</Text>
//             </View>
//             <Text style={styles.date}>Wednesday, June 8, 2022</Text>

//             {!isDoneForToday ? (
//                 !checkInTime ? (
//                     <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
//                         <Icon name="touch-app" size={44} color="#fff" />
//                         <Text style={styles.checkInText}>Check In</Text>
//                     </TouchableOpacity>
//                 ) : (
//                     <TouchableOpacity style={styles.checkOutButton} onPress={handleCheckOut}>
//                         <Icon name="touch-app" size={44} color="#fff" />
//                         <Text style={styles.checkOutText}>Check Out</Text>
//                     </TouchableOpacity>
//                 )
//             ) : (
//                <View style={styles.doneContainers}>
//                  <View style={styles.doneContainer}>
//                     <Icon name="check-circle" size={24} color="#fff" />
//                     <Text style={styles.doneText}>Done for Today</Text>
//                 </View>
//                 </View>
//             )}

//             <View style={styles.footerContainer}>
//                 <View style={styles.footerItem}>
//                     <Icon name="access-time" size={24} color="#000" />
//                     <Text>{checkInTime ? checkInTime : '--:--'}</Text>
//                     <Text>Check In</Text>
//                 </View>
//                 <View style={styles.footerItem}>
//                     <Icon name="access-time" size={24} color="#000" />
//                     <Text>{checkOutTime ? checkOutTime : '--:--'}</Text>
//                     <Text>Check Out</Text>
//                 </View>
//                 <View style={styles.footerItem}>
//                     <Icon name="timer" size={24} color="#000" />
//                     <Text>{workingHours || timer || '--:--'}</Text>
//                     <Text>Working Hrs</Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     modeContainer: {
//         display: 'flex',
//         alignItems: 'center',
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     headerTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     locationContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#E8F0FE',
//         padding: 10,
//         borderRadius: 5,
//         marginBottom: 20,
//     },
//     locationText: {
//         flex: 1,
//         marginHorizontal: 10,
//         fontSize: 12,
//     },
//     modeToggle: {
//         flexDirection: 'row',
//         backgroundColor: '#4285F4',
//         borderRadius: 25,
//         marginTop: 10,
//         padding: 4,
//         width: '70%',
//     },
//     modeButton: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 8,
//         paddingHorizontal: 12,
//         borderRadius: 21,
//     },
//     activeMode: {
//         backgroundColor: '#fff',
//     },
//     modeTitle: {
//         fontWeight: 'bold',
//     },
//     modeButtonText: {
//         marginLeft: 5,
//         color: '#fff',
//         fontWeight: '500',
//     },
//     activeModeText: {
//         color: '#4285F4',
//     },
//     timeContainer: {
//         flexDirection: 'row',
//         alignItems: 'baseline',
//         justifyContent: 'center',
//         marginBottom: 5,
//     },
//     time: {
//         fontSize: 48,
//         fontWeight: 'bold',
//     },
//     timePeriod: {
//         fontSize: 24,
//         marginLeft: 5,
//     },
//     date: {
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     checkInButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#4CAF50',
//         padding: 15,
//         borderRadius: 100,
//         marginBottom: 20,
//         width: 200,
//         height: 200,
//         alignSelf: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 20,
//         elevation: 10,
//     },
//     checkInText: {
//         marginTop: 10,
//         color: '#fff',
//         fontSize: 18,
//     },
//     checkOutButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#E91E63',
//         padding: 15,
//         borderRadius: 100,
//         marginBottom: 20,
//         width: 200,
//         height: 200,
//         alignSelf: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 20,
//         elevation: 10,
//     },
//     checkOutText: {
//         marginTop: 10,
//         color: '#fff',
//         fontSize: 18,
//     },
//     doneContainer: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#4CAF50',
//       padding: 15,
//       borderRadius: 100,
//       marginBottom: 20,
//       width: 200,
//       height: 200,
       
        
//     },
//     doneContainers:{
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     doneText: {
//         marginTop: 10,
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     footerContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: 20,
//     },
//     footerItem: {
//         alignItems: 'center',
//     },
// });

// export default CheckInOut;


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const CheckInOut = () => {
  const navigation = useNavigation();
  const [selectedMode, setSelectedMode] = useState('home');
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [workingHours, setWorkingHours] = useState(null);
  const [timer, setTimer] = useState(null);

  const getCurrentTime = () => {
    return new Date();
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

 
  

const fetchCheckInOutTimes = async () => {
  try {
 
    const response = await axios.get('https://192.168.0.183:7153/GetTodaysCheckinCheckoutDetails/GetTodaysDetails?tenantId=1&employeeId=1');
    const data = response.data;
    console.log(data);
    if (data.checkInTime) {
      setCheckInTime(new Date(data.checkInTime));
    }
    if (data.checkOutTime) {
      setCheckOutTime(new Date(data.checkOutTime));
    }
    // ... rest of the code
  } catch (error) {
    console.error('Fetch error:', error);
    // ... error handling
  }
};
  useEffect(() => {
    fetchCheckInOutTimes();
  }, []);

  const calculateDuration = (startTime, endTime) => {
    const duration = (endTime - startTime) / 1000; // Duration in seconds
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = Math.floor(duration % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleCheckIn = () => {
    const currentTime = getCurrentTime();
    setCheckInTime(currentTime);
    setCheckOutTime(null);
    setWorkingHours('00:00:00');
    
    // Start the timer
    setTimer(setInterval(() => {
      setWorkingHours(prevHours => calculateDuration(currentTime, getCurrentTime()));
    }, 1000));
  };

  const handleCheckOut = () => {
    const currentTime = getCurrentTime();
    setCheckOutTime(currentTime);
    if (checkInTime) {
      const duration = calculateDuration(checkInTime, currentTime);
      setWorkingHours(duration);
    }
    // Stop the timer
    clearInterval(timer);
    setTimer(null);
  };

  useEffect(() => {
    // Clean up the timer when the component unmounts
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timer]);

  const isDoneForToday = checkInTime && checkOutTime;

  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Attendance</Text>
              <Icon name="person" size={24} color="#000" />
          </View>

          <View style={styles.locationContainer}>
              <Icon name="location-on" size={20} color="red" />
              <Text style={styles.locationText}>California Rosemont, House 222, Block D, Basunti, Dhaka 1212.</Text>
              <TouchableOpacity>
                  <Icon name="refresh" size={20} color="#4285F4" />
              </TouchableOpacity>
          </View>

          <View style={styles.modeContainer}>
              <Text style={styles.modeTitle}>Choose your remote mode</Text>
              <View style={styles.modeToggle}>
                  <TouchableOpacity
                      style={[styles.modeButton, selectedMode === 'home' && styles.activeMode]}
                      onPress={() => setSelectedMode('home')}
                  >
                      <Icon name="home" size={20} color={selectedMode === 'home' ? '#4285F4' : '#fff'} />
                      <Text style={[styles.modeButtonText, selectedMode === 'home' && styles.activeModeText]}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={[styles.modeButton, selectedMode === 'office' && styles.activeMode]}
                      onPress={() => setSelectedMode('office')}
                  >
                      <Icon name="business" size={20} color={selectedMode === 'office' ? '#4285F4' : '#fff'} />
                      <Text style={[styles.modeButtonText, selectedMode === 'office' && styles.activeModeText]}>Office</Text>
                  </TouchableOpacity>
              </View>
          </View>

          <View style={styles.timeContainer}>
              <Text style={styles.time}>04:34</Text>
              <Text style={styles.timePeriod}>PM</Text>
          </View>
          <Text style={styles.date}>Wednesday, June 8, 2022</Text>

          {!isDoneForToday ? (
              !checkInTime ? (
                  <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
                      <Icon name="touch-app" size={44} color="#fff" />
                      <Text style={styles.checkInText}>Check In</Text>
                  </TouchableOpacity>
              ) : (
                  <TouchableOpacity style={styles.checkOutButton} onPress={handleCheckOut}>
                      <Icon name="touch-app" size={44} color="#fff" />
                      <Text style={styles.checkOutText}>Check Out</Text>
                  </TouchableOpacity>
              )
          ) : (
              <View style={styles.doneContainers}>
                  <View style={styles.doneContainer}>
                      <Icon name="check-circle" size={24} color="#fff" />
                      <Text style={styles.doneText}>Done for Today</Text>
                  </View>
              </View>
          )}

<View style={styles.footerContainer}>
        <View style={styles.footerItem}>
          <Icon name="access-time" size={24} color="#000" />
          <Text>{checkInTime ? formatTime(checkInTime) : '--:--'}</Text>
          <Text>Check In</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="access-time" size={24} color="#000" />
          <Text>{checkOutTime ? formatTime(checkOutTime) : '--:--'}</Text>
          <Text>Check Out</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="timer" size={24} color="#000" />
          <Text>{workingHours || '--:--:--'}</Text>
          <Text>Working Hrs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    modeContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F0FE',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    locationText: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 12,
    },
    modeToggle: {
        flexDirection: 'row',
        backgroundColor: '#4285F4',
        borderRadius: 25,
        marginTop: 10,
        padding: 4,
        width: '70%',
    },
    modeButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 21,
    },
    activeMode: {
        backgroundColor: '#fff',
    },
    modeTitle: {
        fontWeight: 'bold',
    },
    modeButtonText: {
        marginLeft: 5,
        color: '#fff',
        fontWeight: '500',
    },
    activeModeText: {
        color: '#4285F4',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
        marginBottom: 5,
    },
    time: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    timePeriod: {
        fontSize: 24,
        marginLeft: 5,
    },
    date: {
        textAlign: 'center',
        marginBottom: 20,
    },
    checkInButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 100,
        marginBottom: 20,
        width: 200,
        height: 200,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    checkInText: {
        marginTop: 10,
        color: '#fff',
        fontSize: 18,
    },
    checkOutButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DA8FA7',
        padding: 15,
        borderRadius: 100,
        marginBottom: 20,
        width: 200,
        height: 200,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    checkOutText: {
        marginTop: 10,
        color: '#fff',
        fontSize: 18,
    },
    doneContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 100,
      marginBottom: 20,
      width: 200,
      height: 200,
    },
    doneContainers:{
      justifyContent: 'center',
      alignItems: 'center',

    },
    doneText: {
        marginTop: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    footerItem: {
        alignItems: 'center',
    },
});

export default CheckInOut;
