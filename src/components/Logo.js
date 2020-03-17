import React from 'react';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
} from 'native-base';
import CommonHeader from './CommonHeader';

export default class Logo extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
            margin: 20,
          }}>
          <Text>12345</Text>
        </Content>
      </Container>
    );
  }
}
