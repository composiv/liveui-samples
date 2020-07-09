import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import AddButton from '../../components/AddButton';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {readData} from '../../utils/asyncStorageManager';
import styles from '../../styles';

function ListAll() {
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unmounted = false;
    readData('@work').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setTasks(tasks => tasks.concat(data));
        }
      }
    });
    readData('@study').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setTasks(tasks => tasks.concat(data));
        }
      }
    });
    readData('@travel').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setTasks(tasks => tasks.concat(data));
        }
      }
    });
    readData('@home').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setTasks(tasks => tasks.concat(data));
        }
      }
    });
    readData('@music').then(response => {
      if (!unmounted) {
        if (response !== null) {
          const data = JSON.parse(response);
          setTasks(tasks => tasks.concat(data));
        }
      }
    });
    return () => {
      unmounted = true;
    };
  }, []);

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
        <Icon name="list" size={30} color="white" />
        <Text style={styles.listNameHeader}>All</Text>
        <Text style={styles.listCount}>
          {tasks.length} {taskCount()}
        </Text>
      </View>
      <View style={styles.listSecondWrapper}>
        <ScrollView>
          <Text style={styles.tasksHeader}> Tasks</Text>
          {tasks.map((item, index) => {
            return (
              <Text key={index} style={styles.tasks}>
                {item}
              </Text>
            );
          })}
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
    </View>
  );
}

export default ListAll;
