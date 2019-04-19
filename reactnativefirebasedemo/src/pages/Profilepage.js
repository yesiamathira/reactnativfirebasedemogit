import React, { Component } from 'react';
 import Profile from '../components/Profile';
import {View} from 'react-native';
export  default class Profilepage extends Component{


render(){


  
    return( <View>
<Profile navigation={this.props.navigation}/>
  </View>)

  
}
}