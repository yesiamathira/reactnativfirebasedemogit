import React, { Component } from 'react';
import Login from '../components/Login';
import {View} from 'react-native';
export  default class Loginpage extends Component{


render(){


  
    return( <View>
<Login navigation={this.props.navigation}/>
  </View>)

  
}
}