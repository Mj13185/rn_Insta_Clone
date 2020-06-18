import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SearchTab extends React.Component {
  render() {
    return (
      <View>
        <Text>Search Tab</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
