import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {Button, TextInput, View,StyleSheet,Text,ToastAndroid,Dimensions} from 'react-native';
export  default class Profile extends Component{


render(){


  
    return( <View>
      <Camera
  ref={cam => {this.camera = cam}}
  style={styles.preview}
  aspect={Camera.constants.Aspect.fill}
>
  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
    [CAPTURE]
  </Text>
</Camera>
  </View>)

  
}
takePicture() {
    this.camera
      .capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    
  });
  