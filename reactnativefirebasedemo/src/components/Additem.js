import React, { Component } from 'react';
import {View,TextInput,Button,StyleSheet,Text} from 'react-native';
import { db } from '../config';
let addItem=(item)=>{
db.ref('/items').push({
    itemInfo:item
});
};
let itemsRef=db.ref('/items');
export  default class Additem extends Component{
constructor(props){
    super(props);
  this.state={
itemInfo:'',
items:[]
    }
this.handleChange=this.handleChange.bind(this);
this.clickToAdd=this.clickToAdd.bind(this)
}


 clickToAdd(){
addItem(this.state.itemInfo);
}
handleChange(e)
{
 this.setState({itemInfo:e.nativeEvent.text})   
}
componentDidMount(){
  itemsRef.on('value',snapshot=>{
    let data = snapshot.val();
    let items=Object.values(data);
    this.setState({items});
  });
}



render()
{
  
    return( <View style={StyleSheet.container}>
      
    <TextInput style={{
        height:50,
        width:200,
        margin:8,
        borderColor:"black",
        borderWidth:2,
        alignItems:'center'

    }}
    value={this.state.itemInfo}
    onChange={this.handleChange}
    />
       
    <Button
    onPress={this.clickToAdd}
    title='Add item'
    color='blue'
    />
{this.state.items.map(x=>{
  return <Text>
    {x.itemInfo}
  </Text>
  
  
})}


  </View>)

  
}
}
const styles=StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:'#F5FCFF'
}

})