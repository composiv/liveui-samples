/**
 *
 * TodoMenuBox
 *
 */

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TodoMenuBox(prop) {
  return (
    <TouchableOpacity style={styles.container} onPress={prop.onPress}>
      <Icon name={prop.icon} size={30} style={styles.icon} color={prop.color} />
      <Text style={styles.title}>{prop.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  icon: {padding: 20},
  title: {padding: 20, fontWeight: 'bold', fontSize: 20},
});

export default TodoMenuBox;
