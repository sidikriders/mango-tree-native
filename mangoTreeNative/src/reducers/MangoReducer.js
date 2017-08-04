const initialState = {
  currUser: "",
  treeStat: {
    age: 0,
    health: 100,
    maturity: 0
  },
  harvestedFruit: {
    good: 0,
    bad: 0
  }
}

export default (state=initialState, action) => {
  switch(action.type){
    case "SET_USER":
      return {...state, currUser: action.payload}
    case "EMULATE":
      return {...state, treeStat: { age: state.treeStat.age+=1, maturity: state.treeStat.maturity += action.payload, health: state.treeStat.health-=1}}
    case "HARVEST":
      return {
        ...state,
        harvestedFruit: {
          good: state.harvestedFruit.good += action.payload.good,
          bad: state.harvestedFruit.bad += action.payload.bad
        },
        treeStat: {
          ...state.treeStat, maturity: 0, health: state.treeStat.health -= (action.payload.good+(action.payload.bad*2))
        }
      }
    // case "DO_LOGIN":
    //   return {...state, currUser: action.payload}
    default:
      return state
  }
}
