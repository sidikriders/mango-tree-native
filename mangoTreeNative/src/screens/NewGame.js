import React from 'react'
import {
  Button,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

import { setUser, emulateGo, panenGo } from '../actions'
import bijiDitanam from '../assets/0.png'
import tumbuhTunas from '../assets/1.png'
import pohonDewasa from '../assets/2.png'
import pohonBerbuah from '../assets/3.png'

class Login extends React.Component{
  static navigationOptions = {
    header: null
  }
  render() {
    let screen = Dimensions.get('window')
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>Harvested Fruit</Text>
        <Text style={{fontSize: 24}}>Good : <Text style={{fontWeight: 'bold'}}>{this.props.ms.harvestedFruit.good}</Text></Text>
        <Text style={{fontSize: 24}}>Bad : <Text style={{fontWeight: 'bold'}}>{this.props.ms.harvestedFruit.bad}</Text></Text>
        { this.props.ms.treeStat.age === 0 ?
          <View>
            <Text style={{fontSize: 24}}>This is <Text style={{fontWeight: 'bold'}}>{this.props.ms.currUser}</Text></Text>
            <Text style={{fontSize: 24}}>He is <Text style={{fontWeight: 'bold'}}>{this.props.ms.treeStat.age}</Text> year's old</Text>
            <Image source={bijiDitanam}/>
          </View> :
          this.props.ms.treeStat.age <= 5 ?
            <View>
              <Text style={{fontSize: 24}}><Text style={{fontWeight: 'bold'}}>{this.props.ms.currUser}</Text> has grown</Text>
              <Text style={{fontSize: 24}}>He is now <Text style={{fontWeight: 'bold'}}>{this.props.ms.treeStat.age}</Text> year's old</Text>
              <Image source={tumbuhTunas}/>
            </View> :
            this.props.ms.treeStat.maturity >= 50 ?
              <View>
                <Text style={{fontSize: 24}}>Now you can harvest <Text style={{fontWeight: 'bold'}}>{this.props.ms.currUser}</Text></Text>
                <Text style={{fontSize: 24}}>Let's celebrate the <Text style={{fontWeight: 'bold'}}>{this.props.ms.treeStat.age}</Text>th birthday!!</Text>
                <Image source={pohonBerbuah}/>
              </View> :
              <View>
                <Text style={{fontSize: 24}}><Text style={{fontWeight: 'bold'}}>{this.props.ms.currUser}</Text> is getting older :(</Text>
                <Text style={{fontSize: 24}}>He is now <Text style={{fontWeight: 'bold'}}>{this.props.ms.treeStat.age}</Text> year's old</Text>
                <Image source={pohonDewasa}/>
              </View>
        }
        <View>
          <Button title="Emulate"
          onPress={()=> this.props.emulateKuy()}/>
          { this.props.ms.treeStat.maturity >= 50 ?
            <Button title="harvest"
            onPress={()=> this.props.panenKuy()}/> :
          }
        </View>
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
    setUser: (str) => dispatch(setUser(str)),
    emulateKuy: () => dispatch(emulateGo()),
    panenKuy: () => dispatch(panenGo())
  }
}

// export default Home
export default connect(mapStateToProps, mapDispatchToProps)(Login)
