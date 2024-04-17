import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {isValidElement, useEffect, useState} from 'react';
import {Button, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {
  SafeAreaInsetsContext,
  SafeAreaView,
} from 'react-native-safe-area-context';

const Login = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm
  }, [name, password]);

  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };



  const handleSubmit = () => {
    fetchUser();
    //navigation.replace('Home')
    // if (!isFormValid) {
    //   fetchUser();
    // } else {s

    // }
  };

  const requestOptions = {
    method:'POST',
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({
       email: name,
       password: "password",
     }),
}

const fetchUser = async () => {
 
   // let result = await fetch('https://reqres.in/api/loginRequest', requestOptions) 
   // result = await result.json()
   // Alert.alert(JSON.stringify(result))

   try { 
       await fetch( 
           'https://reqres.in/api/loginRequest', requestOptions) 
           .then(response => { response.json() 
        .then(data => { 
         _storeData(data.email)
         //Alert.alert(JSON.stringify(data.email));
        }); 
           }) 
   } 
   catch (error) { 
       console.error(error); 
   }
      
}

_storeData = async (props) => {
 const email = props
 try {
  
  await AsyncStorage.setItem('email', email);
  Alert.alert('email---',email); 
  navigation.replace('Home');

     
 } catch (error) {
     // Error saving data
 }
}

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}></TextInput>
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry></TextInput>
      <TouchableOpacity onPress={handleSubmit}>
        <Text> Submit</Text>
      </TouchableOpacity>
      {Object.values(errors).map((error, index) => {
        <Text>{error}</Text>;
      })}
    </SafeAreaView>
  );

 
};




export default Login;
