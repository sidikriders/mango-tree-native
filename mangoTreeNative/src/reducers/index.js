import { combineReducers } from 'redux'

import MangoReducer from "./MangoReducer"
import navigationReducer from './navigationReducer'

export default combineReducers({
  MangoState: MangoReducer,
  nav: navigationReducer
})
