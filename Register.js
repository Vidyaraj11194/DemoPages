import React,{Component} from "react";
import{View,StyleSheet,Image,Text,TextInput,TouchableHighlight} from 'react-native'
 export default class Register extends Component{
    render(){
        return(
            <View style={styles.container}> 
            <Image source={require('../Images/logo.png')} style={styles.imageView}></Image> 
            <Text style={styles.textView}> Enter your mobile number</Text>
            <Text style={{marginBottom:70,marginLeft:90,marginTop:10}}>We will send you an OTP to verify</Text>
            <View style={styles.container1}>
                <View style={{flexDirection:'row'}}>
                <TextInput style={styles.textView1}
                placeholder='+91'
                placeholderTextColor={'white'}></TextInput>
                <TextInput style={styles.textView2}
                placeholder='Mobile Number'
                placeholderTextColor={'grey'}></TextInput>
                </View>
                <TouchableHighlight style={styles.buttonview}
                onPress={()=>this.props.navigation.navigate('Otp')}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Continue</Text>
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
    textView:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',  
        marginLeft:70
    },
    container1:{
        height:170,
        width:'100%',
        backgroundColor:'#003333',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    textView1:{
        width:'20%',
        height:50,
        borderWidth:1,
        borderColor:'white',
        marginTop: 20,
        paddingLeft:50,
        marginLeft:40,
        elevation:5,
        borderRadius:5,
        borderColor:'transparent',
        paddingLeft:20
    },
    textView2:{
        width:'60%',
        height:50,
        borderWidth:1,
        borderColor:'white',
        marginTop: 20,
        paddingLeft:50,
        marginLeft:10,
        elevation:5,
        borderRadius:5,
        borderColor:'transparent'
    },
    buttonview:{
        width:'80%',
        height:50,
        marginTop:30,
        borderRadius:8,
        backgroundColor:'#00E676',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:50
    }
})
   