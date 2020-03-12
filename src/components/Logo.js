/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>로고 정보</Text>
      </View>
    );
  }
}

export default Logo;
