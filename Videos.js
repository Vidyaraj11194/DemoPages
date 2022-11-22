import React , {Component} from "react";
import{View,StyleSheet,ImageBackground, TouchableHighlight,Text} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
 export default class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
             <View style={styles.container1}>
                <ImageBackground source={require('../../../Assets/background1.jpg')} style={styles.imageView}>
                    <TouchableHighlight style={{alignItems:'flex-end',justifyContent:'flex-end',height:30,
                     width:'20%',
                     flexDirection:'row',
                     borderRadius:5,
                     marginTop:10,
                     marginBottom:20,
                     marginLeft:180,
                     backgroundColor:'green'}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'white',marginBottom:9}}> Biology </Text></TouchableHighlight>
                </ImageBackground>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginTop:5,marginStart:40}}>Long Chapter name can be shown</Text>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginStart:40}}>here.</Text>
                <View style={{flexDirection:'row'}}>
                <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:35,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                </View>
             </View>  
             <View style={styles.container1}>
                <ImageBackground source={require('../../../Assets/background1.jpg')} style={styles.imageView}>
                    <TouchableHighlight style={{alignItems:'flex-end',justifyContent:'flex-end',height:30,
                     width:'20%',
                     flexDirection:'row',
                     borderRadius:5,
                     marginTop:10,
                     marginBottom:20,
                     marginLeft:180,
                     backgroundColor:'green'}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'white',marginBottom:9}}> Biology </Text></TouchableHighlight>
                </ImageBackground>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginTop:5,marginStart:40}}>Long Chapter name can be shown</Text>
                <Text style={{color:'black',fontWeight:'bold',fontSize:16,marginStart:40}}>here.</Text>
                <View style={{flexDirection:'row'}}>
                <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:35,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                </View>
             </View>  
            </View>
        )
    }
 }
 const styles=StyleSheet.create({
    container:{
        flex:1
    },
    container1:{
            width:'80%',
            height:'45%',
            backgroundColor:'white',
            marginStart:40,
            marginTop:10,
            borderTopEndRadius:10,
            borderTopLeftRadius:10,
    },
    imageView:{
        height:150,
        width:'90%',
        marginStart:30,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        marginEnd:-60,
        marginTop:10
    }
    
 })