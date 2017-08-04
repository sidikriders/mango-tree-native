export const setUser = (str) => {
  return {
    type: "SET_USER",
    payload: str
  }
}

export const emulateGo = () => {
  let angkaTambahKematangan = Math.floor(Math.random()*10)
  console.log('emulateGo:', angkaTambahKematangan);
  return {
    type: "EMULATE",
    payload: angkaTambahKematangan
  }
}
