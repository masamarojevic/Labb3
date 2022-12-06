import{StatusBar} from 'expo-status-bar';
import { StyleSheet,Text,View,Button } from 'react-native';
import { useState } from 'react';


const Device3 = ({itemName,counter,newCounter}) => {
    const[color, setColor] = useState('red');
    return(
     <View style={styles.container2}>
         
         <View><Text style={{...styles.devicesText,left: 20,top:10}}>{itemName}</Text>
         <View style = {{width: 20, height: 20, backgroundColor: color,right:5,bottom:10}}></View></View>
        
          
          
          
         
          <View style={{ marginRight: 10,height:80,
           backgroundColor: 'white',}}>
          <Button title ="On" 
          onPress={() => {setColor('green');
          if (color !== 'green'){
            newCounter((prevCounter) => {let totalAmount = {...prevCounter,[itemName] : prevCounter[itemName] + 1}
        return totalAmount;})
          }}}/>

          <Button title ="Off"
           onPress={() => {setColor('red');
           if (color !== 'red'){
             newCounter((prevCounter) => {let totalAmount = {...prevCounter,[itemName] : prevCounter[itemName] - 1}
         return totalAmount;})
           }}} />
          </View>
         
         

    
        
        
    
     </View>
    )
}

export default function Devices() {
    const[counter,setCounter]=useState({
        'Living Room Lamp':0,
        Heater:0,
        TV:0
    });

    return(
        <View  style={{flex:1,padding:10}}> 
        <Device3 itemName="Living Room Lamp" counter={counter['Living Room Lamp']}newCounter={setCounter}/>
        <Device3 itemName='Heater' counter={counter.Heater}newCounter={setCounter}/>
        <Device3 itemName='TV' counter={counter.TV} newCounter={setCounter}/>
        <Text style = {{fontWeight:'bold', fontSize:18, left:15,top:10}}> Total Devices On: {counter['Living Room Lamp']+ counter.Heater+counter.TV}</Text>
        </View>
       
    )
}

const styles = StyleSheet.create(
    {
        container2:{
    
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:"#ffff80",
            margin:10,
            padding:15,
            justifyContent:'space-between' ,
            
          },
         
          
          devicesText:{
            fontSize:20,
            textAlign:'left'
           
         
           
            
         
           },
          
           

    }
)