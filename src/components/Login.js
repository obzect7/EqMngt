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
  Toast,
} from 'native-base';
import restCall from '../services/Request';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      userPw: '',
      showToast: false,
    };
  }

  //유저 로그인 정보
  getUserLoginInfo = () => {
    console.log('userId ; = ' + this.state.userId);
    console.log('userPw ; = ' + this.state.userPw);

    const {userId} = this.state;
    const {userPw} = this.state;

    if (userId.length < 5) {
      Toast.show({
        text: '아이디는 5자리이상 입력하세요.',
        buttonText: '확인',
        type: 'warning',
        duration: 2000,
      });
      return;
    }

    if (userPw.length < 5) {
      Toast.show({
        text: '비밀번호는 5자리이상 입력하세요.',
        buttonText: '확인',
        type: 'warning',
        duration: 2000,
      });
      return;
    }

    //rest api call
    axios
      .post(
        'https://4klaxw2jhg.execute-api.ap-northeast-2.amazonaws.com/getUserInfo/',
        {
          userId: this.state.userId,
          userPw: this.state.userPw,
        },
      )
      .then(function(response) {
        if (response.data.list.length == 0) {
          Toast.show({
            text: '아이디 또는 비밀번호가 틀렸습니다.',
            buttonText: '확인',
            type: 'danger',
            duration: 2000,
          });
        } else {
          Toast.show({
            text: '로그인성공.',
            buttonText: '확인',
            type: 'success',
            duration: 2000,
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
                maxLength={14}
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
