import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Dados from './src/pages/Dados';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#60d68e',

          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'WeatherApp',
            }
          }
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={
            {
              title: 'Sobre',
            }
          }
        />
        <Stack.Screen
          name="Dados"
          component={Dados}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;