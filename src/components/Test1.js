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

export default class Test1 extends React.Component {
  render() {
    return (
      <Container>
        <CommonHeader {...this.props} />
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
