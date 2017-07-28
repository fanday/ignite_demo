import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Left, Icon, Body, Button, Title, CardItem } from 'native-base';
import {connect} from 'react-redux';
import CounterActions from '../Redux/CounterRedux'

class Counter extends Component{

  increment(){
      console.log('increment');
      dispatch(CounterActions.increment());
  }

  decrement(){
      console.log('decrement');
      dispatch(CounterActions.decrement());
  }

  render(){
    console.log(this.props.count);
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=> this.context.drawer.open()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Redux Counter</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <Button dark bordered onPress= {() => this.props.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button dark bordered onPress= {() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement())
  }
}

Counter.contextTypes = {drawer: React.PropTypes.object}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
