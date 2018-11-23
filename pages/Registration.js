import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Content, Footer, FooterTab, Button, Icon, Text, Form, Item, Input, Label } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class  extends Component {

  render() {
    return (
     
      <Container>
      
      <Content style={{backgroundColor: '#3F4D66'}}>

        <Grid>
          <Row style={{marginTop: 30}}>
            <Col style={{ backgroundColor: '#3F4D66', height: 200 }}>
            
            </Col>
            </Row>
            <Row>
            <Col style={{ backgroundColor: '#3F4D66', height: 200 }}>
            <Item regular style={{backgroundColor: '#FAC911', marginTop: 15, marginLeft: 30, marginRight: 30, borderRadius: 5}}>
            <Input placeholder='Email' />
          </Item>
          <Item regular style={{backgroundColor: '#FAC911', marginTop: 15, marginLeft: 30, marginRight: 30, borderRadius: 5}} >
            <Input placeholder='Password' />
          </Item>
          <Button style={{backgroundColor:'#FAC911', marginLeft: 120, marginTop: 15, borderRadius: 20, paddingTop: 3, paddingLeft: 15, paddingRight: 15}}><Text style={{color: 'black'}}>Registration</Text></Button>
  
          </Col>
         
            </Row>
          </Grid>

          <Row style={{ backgroundColor: '#3F4D66', paddingLeft: 50, paddingRight: 50, marginTop: 90}}>
         
          </Row>

      </Content>
      
    </Container>
     

    );
  }
}

