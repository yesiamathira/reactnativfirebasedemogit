import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Avatar,Tile} from 'react-native-elements';

import {View,Text,Button} from 'react-native';
export  default class Register extends Component{


render(){


  
  return(<View>
<Avatar
  size="xlarge"
  rounded
  containerStyle={{marginLeft: 120, marginTop: 40}}
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      }}
/>
<Text style={{height:50,
width:200,fontSize:30,alignContent:'center',marginLeft:90}}> Register here! </Text>
<Input
  placeholder='Enter Name'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Phone No'
  leftIcon={
    <Icon
      name='phone'
      size={24}
      color='black'
    />
  }
/>

<Input
  placeholder='Enter Email'
  leftIcon={
    <Icon
      name='envelope'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Location'
  leftIcon={
    <Icon
      name='location-arrow'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter password'
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
/>
<Button
  title="Register"
  color='blue'
/>


{/* <Tile
  imageSrc={require('../../img/img1.jpg')}
  title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
  featured
  caption="Some Caption Text"
/> */}

</View>)
  
}
}