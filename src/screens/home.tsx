import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';

const Home = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginVertical: '10%',
          marginHorizontal: '2.5%',
        }}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.header}>Create you own bio link</Text>
          <Text style={{marginTop: '2.5%', color: '#000', fontSize: 16}}>
            Build a dev friendly page to showcase your work, using our custom
            page builder and components.
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '10%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.inputContainerStyle}>
            <Text>short.link</Text>
          </View>
          <Text style={{fontSize: 24}}>/</Text>
          <TextInput
            style={[styles.inputContainerStyle, {width: '60%', padding: '3%'}]}
          />
        </View>
        <View
          style={{
            marginTop: '5%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              padding: '2.5%',
              backgroundColor: '#5802eb',
              borderRadius: 8,
            }}
            onPress={() => {}}>
            <Text style={{color: '#fff', fontSize: 16}}>Create Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {fontSize: 32, fontWeight: 'bold', color: '#000'},
  inputContainerStyle: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#c7c7c7',
    padding: '4%',
    borderRadius: 8,
  },
});
