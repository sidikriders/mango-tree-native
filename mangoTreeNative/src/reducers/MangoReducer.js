const initialState = {
  currUser: ""
}

export default (state=initialState, action) => {
  switch(action.type){
    case "DO_LOGIN":
      return {...state, currUser: action.payload}
    default:
      return state
  }
}
