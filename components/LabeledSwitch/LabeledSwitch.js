import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch } from 'react-native';
import styles from './styles';

const LabeledSwitch = (props) => {
  const { text, onValueChanged } = props;
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{text}</Text>
      <Switch onValueChange={onValueChanged}></Switch>
    </View>
  );
};

LabeledSwitch.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

LabeledSwitch.defaultProps = {
  text: 'Good',
  onValueChanged: () => alert('Switch switched'),
};

export default LabeledSwitch;
