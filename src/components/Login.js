import React from 'react';
import {StatusBar} from 'react-native';
import styles from '../styles/style';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.contentCenter} padder>
          <Card>
            <CardItem>
              <Body>
                <Text>로고를 넣으세요</Text>
              </Body>
            </CardItem>
          </Card>
          <Form>
            <Item fixedLabel>
              <Label>아이디</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>비밀번호</Label>
              <Input />
            </Item>
          </Form>
          <Button
            full
            rounded
            dark
            style={{marginTop: 10}}
            onPress={() => this.props.navigation.navigate('Chat')}>
            <Text>로그인</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{marginTop: 10}}
            onPress={() => this.props.navigation.navigate('ProfileScreen')}>
            <Text>회원가입</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
