// import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Input,Avatar} from 'react-native-elements';

// import {View,Text,Button} from 'react-native';

// export  default class Login extends Component{


// render(){


  
//   return(<View>
//     <Text style={{height:50,
// width:200,fontSize:30,alignContent:'center',marginLeft:110,color:'blue'}}> Login Here </Text>
    
//     <Avatar
//   size="xlarge"
//   rounded
//   containerStyle={{marginLeft: 120, marginTop: 20}}
//   source={{
//     uri:
//       'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//       }}
// />
// <Input
//   placeholder='Enter UserName'
//   leftIcon={
//     <Icon
//       name='user'
//       size={24}
//       color='black'
//     />
//   }
// />
// <Input
//   placeholder='Enter Password'
//   leftIcon={
//     <Icon
//       name='phone'
//       size={24}
//       color='black'
//     />
//   }
// />


// <Button
//   title="Login"
//   color='blue'
// />

// <Button
//        title="Register here"
//        onPress={()=> this.props.navigation.navigate('Registerpage')}
//        />

// </View>)
  
// }
// }
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Avatar} from 'react-native-elements';
import Geolocation from './Geolocation';
import {View,Text,Button,ToastAndroid} from 'react-native';
import {loginUser} from '../services/services';
const Toast = (props) => {
    if (props.visible) {
      ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return null;
  };
  
export  default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
        visible:false,
        message:'User Logged In',
       user:{  password: '', email:""}
    }

    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this)
}
static navigationOptions = ({ navigation }) => {
  navigation.title = "LoginComponent"     
}
login(){
  loginUser(this.state.user).then(result=>{
      this.setState({message:'User Logged Successfully',visible:true});
      this.props.navigation.navigate('Profilepage')
  }).catch(err=>{
      this.setState({message:err.message,visible:true});
  });
  
}
handleChange(e,fieldName){
  let currentState=this.state;
  currentState.user[fieldName]=e.nativeEvent.text;
  this.setState(currentState);
}

render(){


  
  return(<View>
    <Text style={{height:50,
width:200,fontSize:30,alignContent:'center',marginLeft:110,color:'blue'}}> Login Here </Text>
    
    <Avatar
  size="xlarge"
  rounded
  containerStyle={{marginLeft: 120, marginTop: 20}}
  source={{
    uri:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      }}
/>
<Input
  placeholder='Enter Email'
  onChange={(e)=>{
    this.handleChange(e,'email')
}}
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Password'
  onChange={(e)=>{
    this.handleChange(e,'password')
}}
  leftIcon={
    <Icon
      name='phone'
      size={24}
      color='black'
    />
  }
/>


<Button
  title="Login"
  color='blue'
  onPress={this.login}
/>

<Button
       title="Register here"
       onPress={()=> this.props.navigation.navigate('Registerpage')}
       />
<Geolocation/>
<Toast visible={this.state.visible} message={this.state.message} />
</View>)
  
}
}