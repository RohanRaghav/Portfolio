import React from 'react';
import { Text, StyleSheet, View, Image, FlatList, SafeAreaView, Dimensions } from 'react-native';

export default function Interpersonal() {
  const skillsData = [
    {
      id: '1',
      skill: 'Creativity',
      imageUrl: require('../assets/Creative.webp'), // Corrected image import
    },
    {
      id: '2',
      skill: 'Leadership',
      imageUrl: require('../assets/Leadership.webp'),
    },
    {
      id: '3',
      skill: 'Adaptable & Agile',
      imageUrl: require('../assets/Adaptable.webp'),
    },
    {
      id: '4',
      skill: 'Receptive & Resourceful',
      imageUrl: require('../assets/Abc.jpeg'),
    },
    {
      id: '5',
      skill: 'Time & Team Management',
      imageUrl: require('../assets/Time.jpeg'),
    },
    {
      id: '6',
      skill: 'Strong Organizational Skills',
      imageUrl: require('../assets/Organize.jpeg'),
    },
    {
      id: '7',
      skill: 'Problem Solving',
      imageUrl: require('../assets/Problem.jpeg'),
    },
    {
      id: '8',
      skill: 'Critical Thinking',
      imageUrl: require('../assets/Critical.jpeg'),
    },
    {
      id: '9',
      skill: 'Content Writing',
      imageUrl: require('../assets/content.jpeg'),
    },
    {
      id: '10',
      skill: 'Conflict Management',
      imageUrl: require('../assets/Conflict.webp'),
    },
  ];

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 60) / numColumns; // Adjust width based on screen size and padding

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={item.imageUrl} style={styles.image} />
      <Text style={styles.skill}>{item.skill}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={skillsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // To make the image round
    marginBottom: 10,
  },
  skill: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
