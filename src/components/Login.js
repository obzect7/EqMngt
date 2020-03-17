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
  CheckBox,
  ListItem,
} from 'native-base';
import restCall from '../services/Request';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      userPw: '',
    };
  }

  //유저 로그인 정보
  getUserLoginInfo = () => {
    console.log('userId ; = ' + this.state.userId);
    console.log('userPw ; = ' + this.state.userPw);

    restCall.apiCall(
      'https://4klaxw2jhg.execute-api.ap-northeast-2.amazonaws.com/getUserInfo/',
      'POST',
      false,
      {
        userId: this.state.userId,
        userPw: this.state.userPw,
      },
    );
  };

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
              <Input
                value={this.state.userId}
                onChangeText={userId => this.setState({userId})}
              />
            </Item>
            <Item fixedLabel last>
              <Label>비밀번호</Label>
              <Input
                secureTextEntry={true} /* 비밀번호 타입 */
                value={this.state.userPw}
                onChangeText={userPw => this.setState({userPw})}
              />
            </Item>
            <ListItem>
              <CheckBox checked={false} />
              <Body>
                <Text>로그인정보 저장</Text>
              </Body>
            </ListItem>
          </Form>
          <Button
            full
            rounded
            dark
            style={{marginTop: 10}}
            onPress={() => this.getUserLoginInfo()}>
            <Text>로그인</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{marginTop: 10}}
            onPress={() => this.getUserLoginInfo()}>
            <Text>회원가입</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
