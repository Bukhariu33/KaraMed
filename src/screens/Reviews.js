import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from '../componentts/styles';
import Feather from 'react-native-vector-icons/Feather'

const apiUrl = 'https://www.healthcare.gov/api/index.json';

const Reviews = ({navigation}) => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Assuming the terms are in the data array
        if (Array.isArray(data)) {
          setTerms(data);
        } else {
          console.error('Expected data.items to be an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  if (loading) {
    return (
      <View style={addedStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={addedStyles.container}>
      <View style={styles.home_header}>
                <View style={styles.align_items_center}>
                    <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" style={styles.btn_menu_icon}/>
                    </TouchableOpacity>
                    <Text style={styles.header_name}>Review Section</Text>
                </View>
            </View>
      
      <View style={{padding:15}}>
        <Text style={addedStyles.header}>Glossary Terms</Text>
      <FlatList
        data={terms} // Fetching and displaying all terms
        renderItem={({ item }) => (
          <TouchableOpacity style={addedStyles.itemContainer}>
            <Text style={addedStyles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.url}
      />
      </View>
    </View>
  );
};

const addedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#343a40',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    elevation: 2,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  definition: {
    fontSize: 14,
  },
});

export default Reviews;
