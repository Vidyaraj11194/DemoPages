import React,{Component} from "react";
import{View,StyleSheet,Image,Text,TextInput,TouchableHighlight} from 'react-native'
import { Dropdown } from "react-native-element-dropdown";
 export default class Student extends Component{
    render(){
        return(
            <View style={styles.container}> 
            <Image source={require('../Images/logo.png')} style={styles.imageView}></Image> 
            <Image source={require('../Images/Icon.png')} style={styles.imageView1}></Image>
            <Text style={styles.textView}> Student details</Text>
            <View style={styles.container1}>
                <TextInput style={styles.textView2}
                placeholder='Full name'
                placeholderTextColor={'black'}></TextInput>
                <TextInput style={styles.textView2}
                placeholder='Email'
                placeholderTextColor={'black'}></TextInput>
                <Dropdown style={styles.dropDown}
                placeholder='Select state'
                placeholderTextColor='black'></Dropdown>
                <TextInput style={styles.textView2}
                placeholder='Pin code'
                placeholderTextColor={'black'}></TextInput>
                <TouchableHighlight style={styles.buttonview}
                onPress={()=> this.props.navigation.navigate('School')}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Register</Text>
                </TouchableHighlight>
              </View>
            </View>
        )
    }
 }
 const styles=StyleSheet.create({
    container:{
        flex:1   
    },
    imageView:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'center',
        
    },
    imageView1:{
        marginLeft:100,
        borderRadius:50 ,
        marginBottom:30
    },
    textView:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',  
        marginLeft:100,
        marginBottom:10
    },
    container1:{
        height:400,
        width:'100%',
        backgroundColor:'#003333',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    textView2:{
        width:'90%',
        height:50,
        borderWidth:1,
        borderColor:'white',
        margin:10,
        elevation:5,
        borderRadius:5,
        borderColor:'transparent',
        padding:10,
        borderRadius:5,
        marginLeft:20
    },
    buttonview:{
        width:'80%',
        height:50,
        marginTop:30,
        borderRadius:8,
        backgroundColor:'#00E676',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:40
    },
    dropDown:{
        marginLeft:20,
        width:'90%',
        height:50,
        borderWidth:1,
        margin:10,
        elevation:5,
        borderRadius:5,
        borderColor:'transparent',
        padding:10,
        borderRadius:5,
        marginLeft:20
    }
})
   