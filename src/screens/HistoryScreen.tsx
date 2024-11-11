import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const HistoryScreen = ({ navigation }) => {
  // TODO: Fetch actual scan history from storage or API
  const scanHistory = [
    { id: '1', date: '2023-05-01', result: 'Low Risk' },
    { id: '2', date: '2023-04-15', result: 'Medium Risk' },
    { id: '3', date: '2023-03-30', result: 'Low Risk' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Results', { scanId: item.id })}
    >
      <Text style={styles.itemDate}>{item.date}</Text>
      <Text style={styles.itemResult}>{item.result}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan History</Text>
      <FlatList
        data={scanHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemDate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemResult: {
    fontSize: 14,
    color: '#666',
  },
});

export default HistoryScreen;