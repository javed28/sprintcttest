/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/components/splash';
import Login from './src/components/login';
import Home from './src/components/home';
import {NavigationContainer} from '@react-navigation/native';
import AddEmployee from './src/components/addemployee';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
          <Stack.Screen
            component={Splash}
            name="Splash"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Login}
            name="Login"
            options={{headerShown: false}}
          />
        
          <Stack.Screen component={Home} name="Home"/>
          <Stack.Screen component={AddEmployee} name="AddEmployee"/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
