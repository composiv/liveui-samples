import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import AddButton from '../../components/AddButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {readData, storeData} from '../../utils/asyncStorageManager';
import styles from '../../styles';

function ListTravel() {
  const [tasks, setTasks] = useState([]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  readData('@travel').then(response => {
    if (response !== null) {
      const data = JSON.parse(response);
      setTasks(data);
    }
  });
  useEffect(() => {
    let unmounted = false;
    readData('@done').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setFinishedTasks(data);
        }
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

  function doneItem(item) {
    var index = tasks.indexOf(item);
    if (index > -1) {
      tasks.splice(index, 1);
      finishedTasks.push(item);
      storeData('@done', JSON.stringify(finishedTasks));
    }
    storeData('@travel', JSON.stringify(tasks));
  }
  const oneCount = 'Task';
  const moreCount = 'Tasks';
  function taskCount() {
    if (tasks.length > 1) {
      return moreCount;
    } else {
      return oneCount;
    }
  }
  const navigation = useNavigation();
  return (
    <View style={styles.listContainer}>
      <View style={styles.listFirstWrapper}>
        <Icon name="plane" size={30} color="white" />
        <Text style={styles.listNameHeader}>Travel</Text>
        <Text style={styles.listCount}>
          {tasks.length} {taskCount()}
        </Text>
      </View>
      <View style={styles.listSecondWrapper}>
        <ScrollView>
          <Text style={styles.tasksHeader}> Tasks</Text>
          {tasks.map((item, index) => {
            return (
              <View key={index} style={styles.tasksView}>
                <TouchableOpacity
                  onPress={() => doneItem(item)}
                  style={styles.trashBin}>
                  <Icon name="check" size={15} color="#5885ff" />
                </TouchableOpacity>
                <Text style={styles.tasks}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.addButtonLocation}>
          <AddButton
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('New Task', {
                param: 'Travel',
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default ListTravel;
