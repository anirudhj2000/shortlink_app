import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {useSharedValue} from 'react-native-reanimated';

let list = ['John', 'Johnny', 'Kanardhan', 'Amar', 'Akbar', 'Anthony'];

const Builder = () => {
  let offset = useSharedValue(0);
  let drag = Gesture.Pan().onChange(event => {
    offset.value = event.absoluteY;
  });
  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <Text>Builder</Text>
      <View style={{marginTop: '5%', flexDirection: 'column'}}>
        {list.map(item => {
          return (
            <View
              style={{
                width: '90%',
                marginHorizontal: '5%',
                borderWidth: 1,
                borderColor: '#c7c7c7',
                padding: '2%',
              }}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Builder;

const styles = StyleSheet.create({});
