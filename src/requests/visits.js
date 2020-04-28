import config from '../config/secrets';

function add(jwt,place,observation,reaction){
  const data = {
    _place:place._id,
    observation,
    reaction
  }
  return fetch(config.url + '/places/'+place.slug+'/visits',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer '+jwt
    }
  }).then(response => response.json()).catch(console.log);
}

function getAllForPlace(slug) {
  return fetch(config.url + '/places/'+slug+'/visits')
  .then(response => response.json()).catch(console.log);
}
export {add,getAllForPlace};
