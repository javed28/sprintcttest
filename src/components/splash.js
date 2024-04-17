import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState('');

  useEffect(() => {
    getUser()
  }, 2000);

  const getUser = async () => {
    try {
      const userLocalData = await AsyncStorage.getItem('email');
      //Alert.alert('email---',userLocalData); 
      setUserData(userLocalData);
      if (userData == null) {
        navigation.replace('Login');
      } else {
        navigation.replace('Home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/test.png')}
        style={styles.stretch}></Image>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretch: {
    resizeMode: 'stretch',
  },
});

export default Splash;
