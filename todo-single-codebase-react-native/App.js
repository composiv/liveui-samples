/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import RemoteComponent from '@eclipse-muto/liveui-react-native';

import All from './containers/All/All';
import Work from './containers/Work/Work';
import Music from './containers/Music/Music';
import Travel from './containers/Travel/Travel';
import Study from './containers/Study/Study';
import Home from './containers/Home/Home';
import Completed from './containers/Completed/Completed';
import NewTask from './containers/NewTask/NewTask';
import AddButton from './components/AddButton';

const TodoMenuBox = prop => <RemoteComponent name="todoMenuBox" {...prop} />;

const Tab = createBottomTabNavigator();

const menuList = [
  [
    {
      categoryName: 'All',
      icon: 'list',
      color: '#678ff8',
    },
    {
      categoryName: 'Work',
      icon: 'briefcase',
      color: '#fcbb76',
    },
  ],
  [
    {
      categoryName: 'Travel',
      icon: 'plane',
      color: '#59cb7b',
    },
    {
      categoryName: 'Study',
      icon: 'book',
      color: '#8c86d0',
    },
  ],
  [
    {
      categoryName: 'Home',
      icon: 'home',
      color: '#dc6a5c',
    },
    {
      categoryName: 'Music',
      icon: 'headphones',
      color: '#f8927e',
    },
  ],
];

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#f7f7f7'}}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 30, padding: 10}}>
          {' '}
          Categories
        </Text>
        {menuList.map((item, index) => (
          <View
            style={{flexDirection: 'row', flex: 2}}
            key={index + item[0].categoryName}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <TodoMenuBox
                onPress={() => navigation.navigate(item[0].categoryName)}
                title={item[0].categoryName}
                icon={item[0].icon}
                color={item[0].color}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <TodoMenuBox
                onPress={() => navigation.navigate(item[1].categoryName)}
                title={item[1].categoryName}
                icon={item[1].icon}
                color={item[1].color}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.addButtonLocation}>
        <AddButton
          onPress={() => {
            navigation.navigate('New Task', {
              param: 'Work',
            });
          }}
        />
      </View>
    </View>
  );
}

function Main() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#5885ff',
      }}>
      <Tab.Screen
        name="TaskList"
        options={{
          tabBarLabel: 'Task List',
          tabBarIcon: ({}) => <Icon name="list" color="#5885ff" size={20} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="CompletedTasks"
        options={{
          tabBarLabel: 'Completed Tasks',
          tabBarIcon: ({}) => <Icon name="check" color="#5885ff" size={20} />,
        }}
        component={Completed}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addButtonLocation: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
});

const Stack = createStackNavigator();
const options = {
  title: '',
  headerStyle: {
    backgroundColor: '#5885ff',
  },
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f7f7f7',
            },
          }}
          component={Main}
        />
        <Stack.Screen name="All" options={options} component={All} />
        <Stack.Screen name="Work" options={options} component={Work} />
        <Stack.Screen name="Music" options={options} component={Music} />
        <Stack.Screen name="Travel" options={options} component={Travel} />
        <Stack.Screen name="Study" options={options} component={Study} />
        <Stack.Screen name="Home" options={options} component={Home} />
        <Stack.Screen name="New Task" component={NewTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
