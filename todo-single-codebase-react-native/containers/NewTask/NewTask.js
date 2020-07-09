import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';
import {storeData, readData} from '../../utils/asyncStorageManager';
import {useNavigation} from '@react-navigation/native';

function NewTask(route) {
  const [selectedValue, setSelectedValue] = useState(route.route.params.param);
  const [task, setTask] = useState('');
  const [newWorkTask, setNewWorkTask] = useState([]);
  const [newStudyTask, setNewStudyTask] = useState([]);
  const [newTravelTask, setNewTravelTask] = useState([]);
  const [newHomeTask, setNewHomeTask] = useState([]);
  const [newMusicTask, setNewMusicTask] = useState([]);

  const navigation = useNavigation();
  function returnListPage(prop) {
    navigation.navigate(prop);
  }

  useEffect(() => {
    let unmounted = false;
    readData('@work').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setNewWorkTask(data);
        }
      }
    });
    readData('@study').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setNewStudyTask(data);
        }
      }
    });
    readData('@travel').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setNewTravelTask(data);
        }
      }
    });
    readData('@home').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setNewHomeTask(data);
        }
      }
    });
    readData('@music').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setNewMusicTask(data);
        }
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

  function saveValues() {
    if (selectedValue === 'Work') {
      newWorkTask.push(task);
      storeData('@work', JSON.stringify(newWorkTask));
    } else if (selectedValue === 'Travel') {
      newTravelTask.push(task);
      storeData('@travel', JSON.stringify(newTravelTask));
    } else if (selectedValue === 'Study') {
      newStudyTask.push(task);
      storeData('@study', JSON.stringify(newStudyTask));
    } else if (selectedValue === 'Home') {
      newHomeTask.push(task);
      storeData('@home', JSON.stringify(newHomeTask));
    } else if (selectedValue === 'Music') {
      newMusicTask.push(task);
      storeData('@music', JSON.stringify(newMusicTask));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.planTitle}>What are you planning?</Text>
      <TextInput
        placeholder="Type here to add note"
        value={task}
        onChangeText={data => setTask(data)}
        underlineColorAndroid="transparent"
        style={styles.input}
      />
      <View style={styles.pickerView}>
        <View style={styles.categoryIcon}>
          <Icon name="tag" size={15} color="gray" />
        </View>
        <View style={styles.categoryName}>
          <Text> Category </Text>
        </View>
        <View style={styles.categoryPicker}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Work" value="Work" />
            <Picker.Item label="Travel" value="Travel" />
            <Picker.Item label="Study" value="Study" />
            <Picker.Item label="Music" value="Music" />
            <Picker.Item label="Home" value="Home" />
          </Picker>
        </View>
      </View>

      <View style={styles.createButtonView}>
        <Button
          title="Create"
          style={styles.createButton}
          onPress={() => {
            saveValues();
            returnListPage(selectedValue);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  createButton: {backgroundColor: '#5885ff'},
  createButtonView: {flex: 1, justifyContent: 'flex-end', marginBottom: 10},
  pickerView: {flexDirection: 'row', alignItems: 'center', marginTop: 50},
  categoryIcon: {flex: 0.1},
  categoryName: {flex: 0.5},
  categoryPicker: {flex: 0.4},
  container: {flex: 1, padding: 20},
  planTitle: {fontSize: 20, color: 'gray'},
});

export default NewTask;
