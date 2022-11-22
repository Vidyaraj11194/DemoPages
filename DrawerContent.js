import React,{Component} from "react";
import {Text,StyleSheet,View,Image,TouchableHighlight}from 'react-native';
import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Icon name="close" size={20} color='green'style={{marginTop:10}}
                onPress={()=>this.props.navigation.navigate('Bottom')}></Icon>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <Image source={require('../../../Assets/Resourse/image.jpg')}style={styles.imageView}></Image>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold',color:'white',marginTop:20,marginLeft:10}}> Aaron Taylor</Text>
                        <Text style={{color:'white',marginLeft:10}}>ID:1234</Text>
                    </View>
                    <Icon name="chevron-right" color={'green'} size={25} style={{marginTop:20,marginLeft:90}}></Icon>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginTop:50,marginStart:20}}></Icon>
                <Text style={[styles.menu,{marginTop:50}]}>Exam corner</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Subscriptions</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Analytics</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Downloads</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Notifications</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Referrals</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Share app</Text></View>
                <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20,marginBottom:10,marginStart:20}}/>
                <View style={{flexDirection:'row'}}>
                    <Icon name="check-box-outline-blank" size={30} color='green' style={{marginStart:20,marginTop:10}}></Icon>
                <Text style={styles.menu}>Logout</Text></View>
                <TouchableHighlight style={{height:50,width:'80%',borderWidth:2,borderColor:'green',borderRadius:5,marginStart:30,marginTop:30,paddingLeft:60,paddingTop:10}}>
                    <Text style={{color:'green',fontWeight:'bold'}}>Enquire now</Text>
                </TouchableHighlight>
                
                
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#003333'
    },
    menu:{
        fontSize:18,
        fontWeight:'bold',
        color:'purple',
        marginTop:10,
        marginLeft:10
    },
    imageView:{
        flex:1,
        height:50,
        width:null,
        //resizeMode:'center',
        marginTop:20,
        marginStart:10,
        borderRadius:100,
        borderColor:'skyblue',
        borderWidth:3,
        marginStart:10
    },
})
