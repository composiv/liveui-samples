/**
 *
 * EventBox
 *
 */

import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from '../style/styles';

function EventBox(props) {
  return (
    <View style={styles.eventContainer}>
      <View style={styles.rowView}>
        <View style={styles.columnView}>
          <Image
            style={styles.eventImage}
            resizeMode="cover"
            borderRadius={5}
            source={{uri: props.data.eventImage}}
          />
        </View>

        <View style={styles.boxTextView}>
          <Text style={styles.boxFont22Text}> {props.eventName} </Text>
          <Text style={styles.boxFont12Text}> {props.eventPlace} </Text>
          <Text style={styles.boxFont14Text}> {props.eventDescription} </Text>
          <Text style={styles.boxFont14Text}> {props.eventDate} </Text>
          <Text style={styles.boxFont14Text}> {props.eventTime} </Text>
          <View style={styles.registerButton}>
            <Button
              color="#23e4b7"
              title="Register"
              onPress={() => props.onPress(this.state.username)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default EventBox;
