import React , {Component} from "react";
import{View,StyleSheet,Image,Text,TouchableOpacity,ImageBackground, TouchableHighlight} from 'react-native'
import { Dropdown } from "react-native-element-dropdown";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from "@react-navigation/native";



 export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="apps" size={25} style={{marginTop:35,marginStart:20}} color='lightgreen'
                    onPress={()=>this.props.navigation.navigate('Drawer')}></Icon>
                 <Image source={require('../../../Images/logo.png')} style={styles.imageView} ></Image>
                 <TouchableHighlight style={styles.buttonView}><Text style={styles.buttonText}>Classes</Text></TouchableHighlight>
                 </View>
                    <Text style={{color:'black',marginLeft:20}}>Goodmorning</Text>
                    <Text style={styles.textView}>Aaron Taylor</Text>
                <View style={styles.container1}>
                    <Text style={{color:'grey',marginLeft:20}}>Class</Text>
                    <Dropdown placeholder='Plus two science'
                            placeholderStyle={{color:'white',marginLeft:15}}></Dropdown>        
                </View>
                <View style={{flexDirection:'row', marginStart:10}}>
                    <TouchableOpacity style={styles.buttonView1}>
                        <Text style={styles.buttonText1}
                        onPress={()=> this.props.navigation.navigate('Course')}>Biology</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView1}>
                        <Text style={styles.buttonText1}>Physics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView1}>
                        <Text style={styles.buttonText1}>Chemistry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView1}>
                        <Text style={styles.buttonText1}>Maths</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginStart:20}}>Recent course</Text>
                <View style={{flexDirection:'row',marginStart:10}}>
                    <ImageBackground source={require('../../../Assets/book.jpg')} style={styles.imageView1}>
                        <Icon name='play-circle' size={15} color='white' style={{marginLeft:10}}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Course Title</Text> </Icon>
                    </ImageBackground>
                    <ImageBackground source={require('../../../Assets/book.jpg')} style={styles.imageView1}>
                    <Icon name='play-circle' size={15} color='white' style={{marginLeft:10}}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Course Title</Text> </Icon>
                    </ImageBackground>   
                </View>
                <View style={{flexDirection:'row',marginStart:10}}>
                <ImageBackground source={require('../../../Assets/background.jpg')} style={styles.imageView2}>
                    <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>Target Live classes</Text>
                    <Text style={{marginTop:5, color:'grey'}}>vcgc hgchgf hghgf hgg</Text>
                    <Text style={{marginTop:5, color:'grey'}}>vvjhvj jhbjkh hbkj gg</Text>
                </ImageBackground>
                <ImageBackground source={require('../../../Assets/background.jpg')} style={styles.imageView2}>
                    <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}>Target Live classes</Text>
                    <Text style={{marginTop:5, color:'grey'}}>vcgc hgchgf hghgf hgg</Text>
                    <Text style={{marginTop:5, color:'grey'}}>vvjhvj jhbjkh hbkj gg</Text>
                </ImageBackground>
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
        width :'50%',
        resizeMode : 'center',
        height : 100
    },
    textView:{
        fontSize:25,
        color:'black',
        fontWeight:'bold',
        marginLeft:20,
        marginBottom:30
    },
    buttonView:{
        height:35,
        width:'20%',
        flexDirection:'row',
        borderRadius:5,
        marginTop:30,
        marginBottom:20,
        borderColor:'green',
        marginLeft:50,
        borderWidth:1
    },
    buttonText:{
        color:'green',
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:5
    },
    container1:{
        height:'10%',
        width:'90%',
        backgroundColor:'#003333',
        borderRadius:5,
        marginStart:15
        
    },
    buttonView1:{
        height:35,
        width:'20%',
        flexDirection:'row',
        borderRadius:5,
        marginTop:10,
        marginBottom:20,
        borderColor:'black',
        marginLeft:10,
        borderWidth:1
    },
    buttonText1:{
        color:'black',
        fontWeight:'bold',
        paddingLeft:10,
        paddingTop:5,
        fontSize:12
    },
    imageView1:{
        height:150,
        width:'80%',
        marginStart:10,
        alignItems:'flex-start',
        justifyContent:'flex-end',
        marginEnd:-60,
        marginTop:10
    },
    imageView2:{
        height:200,
        width:'80%',
        marginStart:10,
        alignItems:'center',
        justifyContent:'center',
        marginEnd:-60,
        marginTop:15,
    }
   
    
 })