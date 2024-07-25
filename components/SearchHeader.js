import React from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';

const SearchHeader = ({ navigation, route, options }) => {
  const [search, setSearch] = React.useState('');

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerContent: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default SearchHeader;