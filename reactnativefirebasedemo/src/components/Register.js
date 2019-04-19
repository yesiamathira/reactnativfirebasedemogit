
import React, {Component} from 'react';
import {Button, TextInput, View,StyleSheet,Text,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Avatar } from 'react-native-elements';
import {registerUser} from '../services/services';
import {db} from '../services/config';
// const registerUser =(user)=>{
//   db.ref('/users').push(user,(err)=>{
//       console.log(err);
//   })
// }
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
export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state={
          visible:false,
                message:'User Created',
          user:{
            name:'',
            email:'',
            phone:'',
            address:'',
            password:''
          }
      }
      
      this.clickToAdd=this.clickToAdd.bind(this);
      this.AddUser=this.AddUser.bind(this)
    }
    AddUser(){
      registerUser(this.state.user).then(result=>{
          this.setState({message:'User Created Successfully',visible:true});
      }).catch(err=>{
          this.setState({message:err.message,visible:true});
      });
  }
    
    clickToAdd(){
      registerUser(this.state.user);
  }
 
    render(){
        return(
            <View>
<Avatar 
size="xlarge"
rounded
containerStyle={{marginLeft:120,marginRight:40}}
source={{
    uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}}

/>
<Text style={{marginLeft:110,fontSize:30,alignContent:'center',color:'blue'}}>Register here</Text>

<Input
  placeholder='Enter Your Name:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.name=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='user'
      type= 'font-awesome'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Your Email:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.email=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='envelope'
      size={24}
      color='black'
    />
  }
/> 
<Input
  placeholder='Phone:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.phone=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='phone'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Enter Your Addres:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.address=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='home'
      size={24}
      color='black'
    />
  }
/>   
<Input type="password"
  placeholder='Enter Your Password:'
  onChange={(e)=>{
    let currentState = this.state;
    currentState.user.password=e.nativeEvent.text
  
    this.setState(currentState)
}}
  leftIcon={
    <Icon
      name='lock'
      size={24}
      color='black'
    />
  }
/>  
          
<Button title="Register" color='blue'  onPress={this.AddUser}/>
            
<Button
       title="New user?Login now"
       onPress={()=> this.props.navigation.navigate('Loginpage')}
       />         
            
            <Toast visible={this.state.visible} message={this.state.message} />    
            </View>
        )
    }
}


