import React,{Component} from "react";
import{View,StyleSheet,Image,Text,TextInput,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
 export default class OTP extends Component{
    render(){
        return(
            <View style={styles.container}> 
            <Image source={require('../Images/logo.png')} style={styles.imageView}></Image> 
            <Image source={require('../Images/Icon.png')} style={styles.imageView1}></Image>
            <Text style={styles.textView}> Verification code</Text>
            <Text style={{marginLeft:60,marginTop:10}}>Please type the verification code sent to</Text>
            <Text style={{marginBottom:30,marginLeft:120,marginTop:10,color:'black',fontWeight:'bold'}}>+91 9876543210</Text>
            <View style={styles.container1}>
                <View style={{flexDirection:'row'}}>
                <TextInput style={styles.textView1}></TextInput>
                <TextInput style={styles.textView1}></TextInput>
                <TextInput style={styles.textView1}></TextInput>
                <TextInput style={styles.textView1}></TextInput>
                <TextInput style={styles.textView1}></TextInput>
                <TextInput style={styles.textView1}></TextInput>
                </View>
                <TouchableHighlight style={styles.buttonview}
                onPress={()=> this.props.navigation.navigate('Student')}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Resend OTP</Text>
                </TouchableHighlight>
                <Text style={{fontSize:10,color:'grey',marginLeft:150,marginTop:10}}>Resend Otp after 28s</Text>
                <Text style={{fontSize:15,color:'green',marginLeft:155,fontWeight:'bold',marginTop:20}}> 
                <Icon name='call' size={20} color='green'></Icon>Contact Us</Text>
              </View>
            </View>
        )
    }
 }
 const styles=StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor:'white'  
    },
    imageView:{
        flex:1,
        height:null,
        width:null,
        resizeMode:'center',
        
    },
    imageView1:{
        marginHorizontal:100,
        marginVertical:90  ,
        borderRadius:50   
    },
    textView:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginLeft:100
    },
    container1:{
        height:250,
        width:'100%',
        backgroundColor:'#003333',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    textView1:{
        width:'15%',
        height:50,
        borderWidth:1,
        borderColor:'white',
        marginTop: 20,
        elevation:2,
        borderRadius:10,
        borderColor:'transparent',
        marginLeft:5
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
   