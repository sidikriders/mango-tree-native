const initialState = {
  currUser: "",
  currAge: 0
}

export default (state=initialState, action) => {
  switch(action.type){
    case "SET_USER":
      return {...state, currUser: action.payload}
    // case "DO_LOGIN":
    //   return {...state, currUser: action.payload}
    default:
      return state
  }
}
