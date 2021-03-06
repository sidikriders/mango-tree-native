import React from 'react'
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { setUser } from '../actions'

class Login extends React.Component{
  static navigationOptions = {
    header: null
  }
  constructor() {
    super()
    this.state = {
      textInputNya: ""
    }
  }
  render() {
    let screen = Dimensions.get('window')
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Welcome!</Text>
        <TextInput style={{width: screen.width*0.7}} placeholder="Tell me your tree name" onChangeText={(e) => this.ketikNama(e)}/>
        <Button
          title="Let's Play!"
          onPress={() => {
            this.props.setUser(this.state.textInputNya)
            this.props.navigation.navigate('NewGame')
          }}/>
      </View>
    )
  }

  ketikNama(str) {
    this.setState({
      textInputNya: str
    })
  }
}

const mapStateToProps = (state) => {
  return {
    ms: state.MangoState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (str) => {
      dispatch(setUser(str))
    }
  }
}

// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Login)
