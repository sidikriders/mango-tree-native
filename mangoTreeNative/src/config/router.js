import { StackNavigator } from 'react-navigation'

import Login from '../screens/Login.js'
import NewGame from '../screens/NewGame.js'

const Navigasinya = StackNavigator({
  Login: { screen : Login },
  NewGame: { screen : NewGame }
});

export default Navigasinya
