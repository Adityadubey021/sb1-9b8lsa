import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ResultsScreen = ({ route, navigation }) => {
  const { photo } = route.params;

  // TODO: Implement AI analysis here

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.uri }} style={styles.image} />
      <Text style={styles.title}>Scan Results</Text>
      <Text style={styles.result}>Glaucoma Risk: Low</Text>
      <Text style={styles.result}>IOP: Normal</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Specialist')}
      >
        <Text style={styles.buttonText}>Consult Specialist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ResultsScreen;