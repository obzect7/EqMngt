import React from 'react';
import {StatusBar} from 'react-native';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
} from 'native-base';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Logo extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="bars" type="FontAwesome5" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{marginTop: 10}}
            onPress={() => this.props.navigation.navigate('Chat')}>
            <Text>Chat With People</Text>
          </Button>
          <FontAwesome5 name="comments" size={30} color="#900" />
          <Button
            full
            rounded
            primary
            style={{marginTop: 10}}
            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
