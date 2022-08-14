import * as React from 'react';
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RemoteComponent from '@eclipse-muto/liveui-react-native';
import data from './data.json';

const LoginComponent = props => <RemoteComponent name="login" {...props} />;
const EventBoxComponent = props => (
  <RemoteComponent name="eventBox" {...props} />
);
const EventDetailComponent = props => (
  <RemoteComponent name="eventDetail" {...props} />
);

function HomeScreen(props) {
  return (
    <>
      <View style={styles.container} />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>
            Welcome to Eventies {props.route.params.username}
          </Text>
          {data.map((item, index) => {
            return (
              <EventBoxComponent
                data={data[index]}
                key={index}
                eventName={item.name}
                eventPlace={item.place}
                eventDescription={item.description}
                eventDate={item.date}
                eventTime={item.time}
                onPress={() => props.navigation.navigate('Detail', {index})}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

function LoginScreen({navigation}) {
  return (
    <LoginComponent
      onPress={username => navigation.navigate('Home', {username})}
    />
  );
}

function DetailScreen(props) {
  return (
    <>
      <View style={styles.container} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.detailsHeader}>
          <Text style={styles.title}> Event Details </Text>
          <EventDetailComponent data={data[props.route.params.index]} />
        </View>
      </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5257f2',
          },
          headerTintColor: '#ffff',
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#5257f2'},
  safeArea: {flex: 4, backgroundColor: 'gray', padding: 15},
  detailsHeader: {flex: 1, marginTop: -120, height: 300},
  title: {color: 'white', fontSize: 24, marginBottom: 15, textAlign: 'center'},
  scroll: {flex: 1, marginTop: -120},
});

export default App;
