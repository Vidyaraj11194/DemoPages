import React , {Component} from "react";
import{View,StyleSheet} from 'react-native'
 export default class ExamCorner extends Component{
    render(){
        return(
            <View style={styles.container}></View>
        )
    }
 }
 const styles=StyleSheet.create({
    container:{
        flex:1
    }
 })