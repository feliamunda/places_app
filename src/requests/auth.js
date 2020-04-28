import config from '../config/secrets';

function login(credentials){
  return fetch(config.url+"/sessions",{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(data=>{
    return data.json()
  }).catch(console.log)
}

function signUp(credentials){
  return fetch(config.url+"/users",{
    method: 'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(data=>{
    return data.json()
  }).catch(console.log)
}

export {login,signUp}
