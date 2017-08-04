import React from 'react'
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  View
} from 'react-native'
import { connect } from 'react-redux'

class Login extends React.Component{
  render() {
    let screen = Dimensions.get('window')
    return (
      <View style={{flex: 1, borderWidth: 3, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 40}}>Welcome!</Text>
        <TextInput style={{width: screen.width*0.7}} placeholder="Tell me your name"/>
        <Button
          title="Let's Play!"
          onPress={() => console.log('pencet')}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

// export default Home
export default connect(mapStateToProps)(Login)
