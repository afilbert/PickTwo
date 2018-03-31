import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../config/global_styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import LabeledSwitch from '../components/LabeledSwitch';

const styles = EStyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: '2rem',
    color: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.onGoodSwitched = this.onGoodSwitched.bind(this);
    this.onCheapSwitched = this.onCheapSwitched.bind(this);
    this.onFastSwitched = this.onFastSwitched.bind(this);
    this.state = {
      good: false,
      cheap: false,
      fast: false,
      toggledSwitch: 0,
      prevSwitch: 0
    };
  }

  enforcePickTwo() {
    if (this.state.good && this.state.cheap && this.state.fast) {
      switch(this.state.prevSwitch) {
         case 0: {
            this.setState({ good: !this.state.good, toggledSwitch: 0 });
            break;
         }
         case 1: {
            this.setState({ cheap: !this.state.cheap, toggledSwitch: 1 });
            break;
         }
         case 2: {
            this.setState({ fast: !this.state.fast, toggledSwitch: 2 });
            break;
         }
      }
    }
    this.setState({ prevSwitch: this.state.toggledSwitch })
  }

  onGoodSwitched(value) {
    this.setState({ good: value, toggledSwitch: 0 }, this.enforcePickTwo);
  }

  onCheapSwitched(value) {
    this.setState({ cheap: value, toggledSwitch: 1 }, this.enforcePickTwo);
  }

  onFastSwitched(value) {
    this.setState({ fast: value, toggledSwitch: 2 }, this.enforcePickTwo);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Pick Two</Text>
        <LabeledSwitch onValueChanged={this.onGoodSwitched} value={this.state.good} color={colors.good} />
        <LabeledSwitch onValueChanged={this.onCheapSwitched} value={this.state.cheap} color={colors.cheap} text="Cheap" />
        <LabeledSwitch onValueChanged={this.onFastSwitched} value={this.state.fast} color={colors.fast} text="Fast" />
      </View>
    );
  }
}
