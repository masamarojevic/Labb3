import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';
import Rooms from './Rooms';
import Devices from './Devices';


export default function App() {
  
  
  
 
  return (
    <View style={styles.container}> 
      
        <View style={styles.containerMain}> 
             <Image style ={{width:70,height:70}}
               source= {require('./assets/house.png')}/>
             <Text style={styles.smartHome} >SmartHome</Text>
       </View>
        
       <Text style={styles.header}>Rooms</Text> 

       <Rooms />
        
        <Text style={styles.devicesFont}>Devices</Text>

        <Devices/>
        

          
      
      
      
       
      

      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    top:15
    
  },
  
  containerMain:{

    flexDirection:'row',
    top:50,
    left:25
  },
  smartHome:
  {fontSize:20,fontWeight:"bold",color:"#0097A7",top:20,height:25,left:20},

  
  header:{
    fontSize:30,fontWeight:"bold",marginTop:80,marginLeft:23,paddingBottom:15

  },
  
  
 
  devicesFont:{fontSize:30,fontWeight:"bold",marginLeft:20,marginTop:30},

  
 
  
  
  

  
});


