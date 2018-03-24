import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LabeledSwitch from '../components/LabeledSwitch';

const styles = EStyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: '2rem'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pick Two</Text>
      <LabeledSwitch />
      <LabeledSwitch text="Cheap" />
      <LabeledSwitch text="Fast" />
    </View>
  );
};

export default Home;
