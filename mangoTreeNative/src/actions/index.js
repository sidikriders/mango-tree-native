export const setUser = (str) => {
  return {
    type: "SET_USER",
    payload: str
  }
}

export const emulateGo = () => {
  let angkaTambahKematangan = Math.floor(Math.random()*10)
  return {
    type: "EMULATE",
    payload: angkaTambahKematangan
  }
}

export const panenGo = () => {

}
