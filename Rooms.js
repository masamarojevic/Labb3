import{StatusBar} from 'expo-status-bar';
import { StyleSheet,Text,View,Image } from 'react-native';

const Rooms3 = () => {
    rooms={title1:"Living Room", title2:"Bedroom",title3:"Kitchen"}
    return(
        <View style={styles.container1}>

            <View style={styles.rooms}>
              <Image style={styles.images}
               source={require('./assets/living-room.png')}/>
              <Text style={styles.texts}>{rooms.title1}</Text>
            </View>
            <View style={styles.rooms}>
             <Image style={styles.images}
              source={require('./assets/bed.png')}/>
             <Text style={styles.texts1}>{rooms.title2}</Text>
            </View>
            <View style={styles.rooms}>
             <Image style={styles.images}
              source={require('./assets/kitchen.png')}/>
             <Text style={styles.texts2}>{rooms.title3}</Text>
            </View>
          
        </View>
    )
}




export default function Rooms (){
    return (
<Rooms3/>
    )
}
const styles = StyleSheet.create({

    container1:{
    
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-around',
        paddingStart:15,
        paddingEnd:15, 
      },
      rooms:{
    
        backgroundColor:"#0097A7",
        height:140,
        width:120,
    
      },
      images:{
        height:90,width:90,
        marginLeft:13,
        marginTop:10,
    
      },
      texts:{
   
        fontSize:16,
        paddingLeft:15,
        paddingTop:5,
        marginTop:10
    
      },
      texts1:{
       
        fontSize:16,
        paddingTop:5,
        paddingLeft:26,
        marginTop:10,
    
      },
      texts2:{
      
        fontSize:16,
        paddingTop:5,
        paddingLeft:30,
        marginTop:10,
        
      },
})