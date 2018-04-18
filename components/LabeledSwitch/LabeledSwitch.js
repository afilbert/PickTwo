import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../config/global_styles';
import { Platform, View, Text, Switch } from 'react-native';
import styles from './styles';

const LabeledSwitch = (props) => {
  const { text, color, value, onValueChanged } = props;
  return (
    <View style={styles.row}>
      <Text style={[styles.label, {color: color}]}>{text}</Text>
      <Switch thumbTintColor={color} tintColor={ Platform.OS == "android" ? undefined : color } onTintColor={color} value={value} onValueChange={onValueChanged}></Switch>
    </View>
  );
};

LabeledSwitch.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.bool,
  onValueChanged: PropTypes.func,
};

LabeledSwitch.defaultProps = {
  text: 'Good',
  color: colors.good,
  value: false,
  onValueChanged: (obj) => alert('Switch switched'),
};

export default LabeledSwitch;
