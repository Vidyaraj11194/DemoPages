import  React,{Component} from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from './Navigation/Bottom/Home'
import Video from './Navigation/Top/Videos'

export default class Course extends Component{
    render(){
        return(
             <View style={styles.container}>
                <View style={styles.container1}>
                    <TouchableOpacity>
                        <Icon name='arrow-back-ios' size={25} color='green' style={{marginLeft:10,marginTop:10}}
                        onPress={()=>this.props.navigation.navigate('Bottom')}></Icon>
                        <Text style={{color:'white',fontSize:25,fontWeight:'bold',marginStart:30,marginTop:40}}>Biology</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='radio-button-checked' color='green' size={15} style={{marginLeft:25}}></Icon>
                            <Text style={{color:'green',fontSize:10,fontWeight:'bold'}}> 12 Chapters</Text>
                            <Icon name='radio-button-checked' color='green' size={15} style={{marginLeft:25}}></Icon>
                            <Text style={{color:'green',fontSize:10,fontWeight:'bold'}}> 124 hours</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18 ,marginTop:10}}
                         onPress={()=>this.props.navigation.navigate('TopTab')}> Long chapter name can be</Text>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}> shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18 ,marginTop:10}}> Long chapter name can be</Text>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}> shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18 ,marginTop:10}}> Long chapter name can be</Text>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}> shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18 ,marginTop:10}}> Long chapter name can be</Text>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}> shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                        </View>
                    </View>
                    <View style={styles.container3}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18,marginTop:10}}> Long chapter name can be</Text>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18}}> shown here</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> Chapters 1</Text>
                            <Icon name='radio-button-checked' color='gray' size={15} style={{marginLeft:25,marginTop:10}}></Icon>
                            <Text style={{color:'gray',fontSize:10,fontWeight:'bold',marginTop:10}}> 3 parts</Text>
                        </View>
                    </View>
                </View>
                
            </View>
                
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'offwhite'
    },
    container1:{
        width:'100%',
        height:200,
        backgroundColor:'#003333'
    },
    container2:{
        width:'80%',
        height:'50%',
        backgroundColor:'white',
        marginStart:40,
        marginTop:50,
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
       // borderWidth:.2
    },
    container3:{
        width:'80%',
        height:'50%',
        backgroundColor:'white',
        marginStart:40,
        marginTop:20,
        borderTopEndRadius:10,
        borderTopLeftRadius:10,
        borderWidth:.1
    }
})