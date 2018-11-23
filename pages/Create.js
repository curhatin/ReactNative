import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Input, Label, Textarea, Picker} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "key1"
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
  render() {
    return (
     
     
        <Content padder>
        <Header style={{marginBottom: 10, backgroundColor: '#FAC911'}}>
         
          <Body>
            <Title style={{color: 'red'}}> SHARE YOUR PROBLEM</Title>
          </Body>
     
        </Header>
          <Form>
          <Item regular>
            <Input placeholder='Judul Curhat' />
          </Item>
          <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
            <Textarea rowSpan={5} bordered placeholder="Isi Curhat" />
          </Form>
          <Button  style={{backgroundColor: 'red', marginTop: 10}}><Text>Submit</Text></Button>
        </Content>


    );
  }
}

