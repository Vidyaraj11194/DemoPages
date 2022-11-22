import React,{Component} from "react";
import { View,StyleSheet,ImageBackground,Text,Image,TextInput,TouchableHighlight} from "react-native";
import Icon from'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons'
import {Divider}from 'react-native-paper'

export default class Chapter extends Component{
    render(){
        return(
            <View style={styles.container}>
               <ImageBackground source={require('../Assets/background1.jpg')} style={styles.imageView}>
               <Icon name='play-circle' size={45} color='white' style={{}}/></ImageBackground> 
               <View style={{flexDirection:'row'}}>
               <Text style={{color:'white',fontWeight:'bold',marginStart:20,fontSize:15}}> Long Chapter Name can be {'\n'} here shown here</Text>
               <View style={styles.verticleLine}></View>
               <Icons name="file-download" size={30} color='white' style={{marginTop:10,marginLeft:20}}></Icons>
               </View>
               <Divider style={{ borderColor:'grey',borderBottomWidth:.3,marginTop:20}}/>
               <View style={{flexDirection:'row'}}>
                <Icons name='arrow-back-ios' size={15} color='grey' style={{marginStart:10,marginTop:20}}></Icons>
                <Text style={{marginStart:10,marginTop:19,color:'grey',fontSize:10}}>Previous</Text>
                <Icons name='radio-button-checked' size={15} color='grey' style={{marginLeft:90,marginTop:20}}></Icons>
                <Text style={{marginLeft:10,marginTop:20,color:'grey',fontSize:10}}>Part 1</Text>
                <Text style={{marginLeft:90, marginTop:22,color:'grey',fontSize:10}}>Next</Text>
                <Icons name="chevron-right" size={20} color='grey' style={{marginTop:20}}></Icons>
               </View>
               <Divider style={{ borderColor:'grey',borderBottomWidth:.3,marginTop:20}}/>
                <View style={{width:'90%',height:60,backgroundColor:'black',borderRadius:10, marginLeft:20,marginTop:150,flexDirection:'row'}}>
                    <Text style={{color:'white',fontSize:14,marginTop:10}}>Your sample question can be shown here {'\n'}no matter how long</Text>
                    <Image source={require('../Assets/Resourse/image.jpg')} style={styles.imageView1}></Image></View>
                    <View style={{width:'90%',height:60,backgroundColor:'#90A4AE',borderRadius:10, marginLeft:20,marginTop:10,flexDirection:'row'}}>
                        <TextInput placeholder="Ask a Question?"
                        placeholderTextColor={'grey'} 
                        padding={10}></TextInput>
                        <TouchableHighlight style={{height:40,width:'15%',backgroundColor:'white',borderRadius:10,marginLeft:170,marginTop:10,padding:10}}>
                            <Text style={{color:'blue'}}>Post</Text>
                        </TouchableHighlight>
                    </View>
                    <View  style={{flexDirection:'row',width:'90%',height:60,borderColor:'green',borderRadius:10, marginLeft:20,marginTop:10,borderWidth:2}}>
                        <Icons name="call" color={'green'} size={15} style={{marginTop:16,marginLeft:90}}></Icons>
                        <Text style={{color:'green', fontWeight:'bold',marginTop:16,marginLeft:10}}> Chat with teacher</Text>
                    </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#003333'
    },
    imageView:{
        width:'100%',
        height:300,
        alignItems:'center',
        justifyContent:'center'
    },
    imageView1:{
        flex:1,
        height:50,
        width:10,
        marginTop:7,
        borderRadius:400,
       
    },
    verticleLine:{
        marginTop:10,
        height: '100%',
        width: 1.2,
        backgroundColor: '#909090',
        marginLeft:80,
        color:'grey'
      }
})