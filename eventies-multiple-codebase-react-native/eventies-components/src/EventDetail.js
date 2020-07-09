/**
 *
 * EventDetail
 *
 */

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../style/styles';

function EventDetail(props) {
  return (
    <View style={styles.eventContainer}>
      <ScrollView>
        <Image
          style={styles.coverImage}
          resizeMode="cover"
          borderRadius={5}
          source={{uri: props.data.eventImage}}
        />
        <View style={styles.coverTextView}>
          <Text style={styles.coverFont22Text}> {props.data.name} </Text>
          <Text style={styles.coverFont12Text}> {props.data.place} </Text>
          <Text style={styles.coverFont14Text}> {props.data.description} </Text>

          <Text style={styles.coverFont14Text}> {props.data.date} </Text>
          <Text style={styles.coverFont14Text}> {props.data.time} </Text>
          <Text style={styles.coverFont14Text}> Attendes </Text>
        </View>

        <View style={styles.registeredView}>
          <Text style={styles.registeredText}>Registered</Text>
        </View>

        <View style={styles.miniImagePositioning}>
          <View style={styles.rowView}>
            <Image
              style={styles.miniImage}
              resizeMode="cover"
              borderRadius={20}
              borderWidth={1}
              borderColor={'white'}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1563240619-44ec0047592c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Image
              style={styles.miniImage}
              resizeMode="cover"
              borderRadius={20}
              borderWidth={1}
              borderColor={'white'}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Image
              style={styles.miniImage}
              resizeMode="cover"
              borderRadius={20}
              borderWidth={1}
              borderColor={'white'}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }}
            />
            <Image
              style={styles.miniImage}
              resizeMode="cover"
              borderRadius={20}
              borderWidth={1}
              borderColor={'white'}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
              }}
            />
          </View>
        </View>

        <View style={styles.paddingAndMarginTop}>
          <Text style={styles.title}> Event Schedule </Text>
          {props.data.subject.map((item, index) => {
            return (
              <Text key={index} style={styles.scheduleDetails}>
                <Text style={styles.scheduleTime}>{item.time}</Text>{' '}
                {item.title}
              </Text>
            );
          })}
        </View>
        <View style={styles.paddingAndMarginTop}>
          <Text style={styles.title}> Event Speaker </Text>
        </View>
        <View style={styles.rowView}>
          <View style={styles.columnView}>
            <Image
              style={styles.eventImage}
              resizeMode="cover"
              borderRadius={5}
              source={{uri: props.data.image}}
            />
          </View>

          <View style={{flex: 2, flexDirection: 'column', paddingLeft: 10}}>
            <Text style={{...styles.title, paddingLeft: 5}}>
              {props.data.publisher} / {props.data.company}
            </Text>
            <Text style={styles.speakersPosition}> {props.data.position} </Text>
            <Text style={styles.speakersInfo}> {props.data.information} </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default EventDetail;
