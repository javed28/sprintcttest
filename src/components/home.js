import {useNavigation, useRoute} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {Alert, Button, Text, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const Home = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('AddEmployee');
  };

  const route = useRoute();
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    if (route.params?.username) {
      const newValues = [...userdata, {username: route.params.username,age:route.params.age}];
      setUserData(newValues);
    }
  }, [route.params?.username]);

  return (
    <View>
      {userdata.length > 0 ? (
        <FlatList
          data={userdata}
          renderItem={({item}) => <Item data={item}></Item>}></FlatList>
      ) : (
        <Text>No Employee added</Text>
      )}
      <TouchableOpacity onPress={handleSubmit}>
        <Text> Add More Employee</Text>
      </TouchableOpacity>
    </View>
  );
};

const Item = (props) => {
    let data = props.data
    return(
        <View>
            <Text>UserName : {<Text>{data.username}</Text>}</Text>
            <Text>Age : {<Text>{data.age}</Text>}</Text>
        </View>
    )
}

export default Home;
