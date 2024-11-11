import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const SpecialistScreen = () => {
  // TODO: Fetch actual specialist list from API
  const specialists = [
    { id: '1', name: 'Dr. John Doe', specialty: 'Glaucoma Specialist' },
    { id: '2', name: 'Dr. Jane Smith', specialty: 'Retina Specialist' },
    { id: '3', name: 'Dr. Mike Johnson', specialty: 'General Ophthalmologist' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemSpecialty}>{item.specialty}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iSpecialist Platform</Text>
      <Text style={styles.subtitle}>Connect with Eye Specialists</Text>
      <FlatList
        data={specialists}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemSpecialty: {
    fontSize: 14,
    color: '#666',
  },
});

export default SpecialistScreen;