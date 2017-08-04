import React from 'react'
import {
  Button,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { setUser } from '../actions'
import bijiDitanam from '../assets/0.png'
class Login extends React.Component{
  static navigationOptions = {
    header: null
  }
  render() {
    let screen = Dimensions.get('window')
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>This is <Text style={{fontWeight: 'bold'}}>{this.props.ms.currUser}</Text></Text>
        <Text style={{fontSize: 24}}>He is <Text style={{fontWeight: 'bold'}}>{this.props.ms.currAge}</Text> year's old</Text>
        <Image source={bijiDitanam}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ms: state.MangoState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (str) => dispatch(setUser(str))
  }
}

// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Login)
