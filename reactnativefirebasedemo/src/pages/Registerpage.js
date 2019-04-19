import React, { Component } from 'react';
import Register from '../components/Register';
import {View} from 'react-native';
export  default class Registerpage extends Component{


render(){


  
    return( <View>
<Register navigation={this.props.navigation}/>
  </View>)

  
}
}