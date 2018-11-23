/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import LoginScreen from './pages/LoginScreen';
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Input, Label } from 'native-base';



export default class App extends Component {
  
  render() {
    return (

      <Container>
        <Content>
          <LoginScreen/>
          </Content>
        <Footer >
        <FooterTab style={{backgroundColor: '#FAC911'}}>
          <Button vertical Scene>
            <Icon name="apps" style={{color: 'red'}}  />
            <Text style={{color: 'red'}} >Back</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" style={{color: 'red'}}  />
            <Text style={{color: 'red'}} >Explore</Text>
          </Button>
          <Button vertical e>
            <Icon active name="navigate" style={{color: 'red'}} />
            <Text style={{color: 'red'}} >My Stories</Text>
          </Button>
          <Button vertical>
            <Icon name="person" style={{color: 'red'}} />
            <Text style={{color: 'red'}} >Create</Text>
          </Button>
        </FooterTab>
      </Footer>
        
        </Container>
     
     

    );
  }
}

