import React,{Component}from 'react'
import{View,StyleSheet,Image,Text} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Apptour extends Component{
    componentDidMount(){
        this._renderDoneButton()
        this._renderNextButton()

    }
    
    render(){
        return(
            <View style={styles.container}>
                
                <Onboarding
                onDone={()=>this.props.navigation.navigate('Bottom')}
                    pages={[
                             {
                                backgroundColor: '#fff',
                                image: <Image source={require('../Assets/Resourse/1.jpg')} style={{height:300,width:300}}/>,
                                title: <Text style={{fontSize:20,color:'black'}}> onboarding</Text>,
                                subtitle: 'Done with React Native Onboarding Swiper',
                                

                             },
                             {
                                backgroundColor: '#fff',
                                image: <Image source={require('../Assets/Resourse/2.jpg')}style={{height:300,width:300}} />,
                                title: 'Onboarding',
                                subtitle: 'Done with React Native Onboarding Swiper',
                             },
                             {
                                backgroundColor: '#fff',
                                image: <Image source={require('../Assets/Resourse/3.jpg')}style={{height:300,width:300}} />,
                                title: 'Onboarding',
                                subtitle: 'Done with React Native Onboarding Swiper',
                             },

                                ]}></Onboarding>

            </View>
            
        )
    }
      
      _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="chevron-right"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="chevron-right"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
      };
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
    
})