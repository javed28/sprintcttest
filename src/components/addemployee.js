import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const AddEmployee = props => {
  const [username, setUserName] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();
  const handleSubmit = () => {
    //Alert.alert('username----',username)
    console.log('username-------', username);
    props.navigation.goBack({username: username, age: age});
  };

  return (
    <View>
      <Text>Add Employee Details</Text>

      <TextInput
        placeholder="Name"
        onChangeText={text => setUserName(text)}
        value={username}></TextInput>

      <TextInput
        placeholder="Age"
        onChangeText={text => setAge(text)}
        value={age}></TextInput>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home', {username: username, age: age})}>
        <Text> Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddEmployee;
