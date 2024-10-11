import React from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, Linking, SafeAreaView, Dimensions } from 'react-native';

export default function Projects() {
  const projectData = [
    {
      id: '1',
      title: 'StockPred',
      description: 'Initiated a pioneering project focused on stock market predictions and pattern recognition using the powerful Gated Recurrent Unit (GRU) machine learning algorithm. This cutting-edge solution aims to provide accurate forecasts and insights into market trends, enabling informed investment decisions.',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFkbpL5xr3RrQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719823658628?e=1729281600&v=beta&t=ym2KrRBh0_iJtGISU-fYc09jDkChNUTiu4T8l7K2670',
      link: 'https://github.com/your-profile/project1',
    },
    {
      id: '2',
      title: 'Human Machine collaboration on brain tumor diagnosis',
      description: 'Spearheaded the development of an advanced Brain Tumor Diagnosis Machine, integrating cutting-edge machine learning algorithms to enhance the accuracy of brain tumor diagnoses through medical imaging. This innovative solution combines the latest advancements in artificial intelligence with medical expertise to deliver precise and reliable results.',
      imageUrl: 'https://www.kaggleusercontent.com/kf/174739770/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..2bsnL7qcaX27F_paSkAZzg.DyBfdqfPbfSxbTjTMmHiJ6euvGt7oS8JNrQZdTlbMhGpSwbKw3eSVkli3SUZaxs2QErwI2QWxkPPr0YPAmkGfRcXnHEFoDgdbRrBr20xWNQy0L5xlIkxHfbeV_2TEWfzEom8VPCSCrf4gOjzF25QZVIYy9uSxN1Otk7v2-tT6KZvUutfiqnmGBJyDTk_id49nmMe2U5z75eV5uxgtfAe2tTjncwDfF4mm9hZQqKWY-LBlJ5ngFfUk7R3iv9Oaxp-bw-E_sayb4bAnWXu7m-4gJDVu-Xtb-__hqLCORuuJ1bfe0n-qDRqd1wCrZrc-ygMu-sK8QZcWspLEKVjmY59EkD4XohqAHha8tM3vpIvSOZQAxHYNiUu4e5rOkD1sVP-hjkM50iDpwAGeQujdphBLr9egtetBtzTFy5M4YaiTx7fgIcNqEwGCjWiKM102yoMNb7_TA-qquz4kvfa9pyjxejvMI4nIle20mR30nfww9VCcRrPYGbZrrvWSzRfSPOrIz5R56h2j4MJoiEfoFuwLltuhYj35T4HCeMZfHSBwYZiEY_qsulqDdkuxxCU_sKwst_gCBtZty-eNMgC3o-himtfBiWfzqFhEkh9gLrvCemhhP9lPZC0-48niLiO1DblPvn-0v2oU2HfsulQb2f_DBws9JNzyOGinkIhp3pQS7pEasZIIgsnlK0Zzbkr3Jce.JI4aJI5WMOFPV2H6IpAr3w/__results___files/__results___37_0.png',
      link: 'https://github.com/your-profile/project2',
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'This is a description of project 3.',
      imageUrl: 'https://example.com/project3-image.jpg',
      link: 'https://github.com/your-profile/project3',
    },
    {
      id: '4',
      title: 'Project 4',
      description: 'This is a description of project 4.',
      imageUrl: 'https://example.com/project4-image.jpg',
      link: 'https://github.com/your-profile/project4',
    },
  ];

  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 60) / numColumns; // Adjust width based on screen size and padding

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description} numberOfLines={10}>{item.description}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={styles.button}>
        <Text style={styles.buttonText}>View Project</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projectData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns} // Set number of columns to 2
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
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10, // Add margin to space out the cards
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 100, // Adjust height to fit grid style
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    position:'relative',
    bottom:0
  },
});
