import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Linking, ImageBackground, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Technical from "./Components/Technical";
import Interpersonal from "./Components/Interpersonal";
import Projects from "./Components/Projects";
const Stack = createNativeStackNavigator();

// Home screen with buttons that navigate to different sections
function HomeScreen({ navigation }: { navigation: any }) {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/rohan-raghav-b0b07a24a/');
  };
  const openInsta = () => {
    Linking.openURL('https://www.instagram.com/rohanraghav186/');
  };
  const openGithub = () => {
    Linking.openURL('https://github.com/RohanRaghav');
  };
  const openDiscord = () => {
    Linking.openURL('https://discord.com/channels/@me/1294197466580647977');
  };

  return (
    <SafeAreaView style={styles.contentalign}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.container}>
        <Image source={require('./assets/Rohan.jpeg')} style={styles.image} />
        <Text style={styles.textcolor}>Rohan Raghav</Text>
      </ImageBackground>

      <View style={styles.divide}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('TechnicalSkills')}>
          <Text style={styles.texting}>Technical Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('InterpersonalSkills')}>
          <Text style={styles.texting}>Interpersonal Skills</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divide}>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Projects')}>
          <Text style={styles.texting}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Certifications')}>
          <Text style={styles.texting}>Certification</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contact}>
        <View style={styles.divides}>
          <TouchableOpacity onPress={openLinkedIn}>
            <Image source={require('./assets/Linked.png')} style={styles.contactImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openInsta}>
            <Image source={require('./assets/Instagram.png')} style={styles.contactImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGithub}>
            <Image source={require('./assets/Github.png')} style={styles.contactImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openDiscord}>
            <Image source={require('./assets/Discord.png')} style={styles.contactImage} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Define screens for navigation
function TechnicalSkillsScreen() {
  return (
      <ScrollView style={styles.scrollViewContent}>
         <View style={styles.screen}>
      <Text><Technical /></Text>
      </View>
      </ScrollView>
  );
}

function InterpersonalSkillsScreen() {
  return (
    <ScrollView style={styles.scrollViewContent}>
         <View style={styles.screen}>
      <Text><Interpersonal /></Text>
    </View>
    </ScrollView>
  );
}

function ProjectsScreen() {
  return (
    <ScrollView style={styles.scrollViewContent}>
         <View style={styles.screen}>
      <Text><Projects /></Text>
    </View>
    </ScrollView>
  );
}

function CertificationsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Certifications</Text>
    </View>
  );
}

// Main App Component with Navigation
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
          <Stack.Screen name="TechnicalSkills" component={TechnicalSkillsScreen} />
          <Stack.Screen name="InterpersonalSkills" component={InterpersonalSkillsScreen} />
          <Stack.Screen name="Projects" component={ProjectsScreen} />
          <Stack.Screen name="Certifications" component={CertificationsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
  },
  texting:{
    color:'black'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  textcolor: {
    color: 'white',
  },
  contentalign: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  divide: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  divides: {
    flexDirection: 'row',
    width: '100%',
    gap: 20,
  },
  box: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f9',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  contact: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  contactImage: {
    width: 60,
    height: 60,
  },
  screen: {
    flex: 1,
    position:'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
  },
  scrollViewContent: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default App;
