/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Buttons, ConfigButton} from './src/Screens';
import {Provider} from 'react-redux';
import store from './src/store';
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="configButtons"
        screenOptions={{
          tabBarInactiveTintColor: '#E0E0E0',
          tabBarLabelStyle: [{color: '#444444', fontSize: 12, height: 24}],
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <View>
                <Icon name="dedent" size={20} color={color} />
              </View>
            ),
          }}
          name="configButtons"
          component={ConfigButton}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <View>
                <Icon name="dedent" size={20} color={color} />
              </View>
            ),
          }}
          name="buttons"
          component={Buttons}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
};

export default App;
