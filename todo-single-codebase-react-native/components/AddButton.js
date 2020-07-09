import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddButton = prop => (
  <TouchableOpacity onPress={prop.onPress} style={styles.button}>
    <Icon name="plus" size={30} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#5885ff',
    borderRadius: 50,
  },
});

export default AddButton;
