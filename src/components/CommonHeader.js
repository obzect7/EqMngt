import React from 'react';
import {Button, Body, Header, Title, Left, Icon, Right} from 'native-base';

export default class CommonHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-left" type="FontAwesome5" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.route.name}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon name="bars" type="FontAwesome5" />
          </Button>
        </Right>
      </Header>
    );
  }
}
