import React , {Component} from "react";
import{View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
import { Divider } from "react-native-paper";

 export default class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{color:'white',fontSize:20,marginStart:150,marginTop:30}}>Profile</Text>
                    <Icon name="notifications" size={25} color='white' style={{marginTop:30,marginLeft:90}}></Icon>
                    <Icon name="apps" size={25} style={{marginTop:30,marginLeft:20}} color='white'></Icon>
                    </View>
                <View style={styles.container2}>
                    <View style={{flexDirection:'row'}}>
        
                        <Image source={require('../../../Assets/Resourse/image.jpg')} style={styles.imageView}></Image>
                        <View style={{flexDirection:'column'}}>
                        <Text style={{marginTop:20,fontWeight:'bold',color:'black'}}> Jane Doe </Text>
                        <Text style={{marginRight:200}}> ID:12345678</Text>
                        </View>
                    </View>
                    <Text style={{marginStart:10,fontWeight:'bold',color:'black',marginTop:30 }}>Personal Info</Text>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10,marginTop:10,fontSize:13}}> Account Settings</Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:30,marginTop:10,fontSize:13}}> Aaron Taylor</Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10,marginTop:10,fontSize:13}}> Email </Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:100,marginTop:10,fontSize:13}}> emaidid123@server.com</Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10 ,marginTop:10,fontSize:13}}> Number</Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:80 ,marginTop:10,fontSize:13}}> +919876543210</Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <Text style={{marginStart:10,fontWeight:'bold',color:'black',marginTop:30}}> Course Info</Text>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10,marginTop:10,fontSize:13}}> Center</Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:90,marginTop:10,fontSize:13}}> Inmakes edu</Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10,marginTop:10,fontSize:13}}> Course </Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:80,marginTop:10,fontSize:13}}> Plus two science </Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10 ,marginTop:10,fontSize:13}}> Payment Status</Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:30 ,marginTop:10,fontSize:13}}> Free</Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <View style={{flexDirection:'row'}}><Text style={{marginStart:10 ,marginTop:10,fontSize:13}}> Expiry Date</Text>
                    <Text style={{color:'black',fontWeight:'bold',marginLeft:60 ,marginTop:10,fontSize:13}}> Not Applicable</Text></View>
                    <Divider style={{ borderColor:'grey',borderBottomWidth:.6,marginTop:20}}/>
                    <TouchableOpacity style={styles.buttonView}>
                        <Icon name="credit-card" color={'white'} size={13} style={{marginTop:4,marginLeft:5}}></Icon>
                        <Text style={{color:'white', fontWeight:'bold',fontSize:13,marginLeft:20}}>Custome Payment</Text>
                        <Icon name="chevron-right" color={'white'} size={13} style={{marginTop:4,marginLeft:150}}></Icon>
                    </TouchableOpacity>

                    
                    
                    
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
        width:'100%',
        height:'45%',
        backgroundColor:'#003333'
    },
    container2:{
        width:'90%',
        height:600,
        backgroundColor:'white',
        marginTop:100,
        marginStart:20,
        borderTopStartRadius:5,
        borderTopRightRadius:5
    },
    imageView:{
        flex:1,
        height:50,
        width:30,
        //resizeMode:'center',
        marginTop:10,
        //marginRight:40,
        borderRadius:100,
        borderColor:'skyblue',
        borderWidth:3,
        marginStart:10
    },
    buttonView:{
        height:40,
        width:'100%',
        backgroundColor:'#00E676',
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        marginTop:5
    }

 })