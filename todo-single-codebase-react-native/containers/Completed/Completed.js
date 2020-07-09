import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {readData, storeData} from '../../utils/asyncStorageManager';
import styles from '../../styles';

function ListDone() {
  const [tasks, setTasks] = useState([]);
  readData('@done').then(response => {
    if (response !== null) {
      const data = JSON.parse(response);
      setTasks(data);
    }
  });
  function deleteItem(item) {
    var index = tasks.indexOf(item);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    storeData('@done', JSON.stringify(tasks));
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
  return (
    <View style={styles.listContainer}>
      <View style={styles.listFirstWrapper}>
        <Icon name="check" size={30} color="white" />
        <Text style={styles.listNameHeader}>Completed Tasks</Text>
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
                  onPress={() => deleteItem(item)}
                  style={styles.trashBin}>
                  <Icon name="trash" size={15} color="#5885ff" />
                </TouchableOpacity>
                <Text style={styles.tasks}>{item}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default ListDone;
