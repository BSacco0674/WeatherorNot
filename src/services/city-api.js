import tokenService from "./tokenService";
const BASE_URL = "/api/city/";
export function create(city) {
  console.log(city);
  return fetch(
    BASE_URL,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Authorization': "Bearer " + tokenService.getToken(),
      },
      body: JSON.stringify(city),
    },
    { mode: "cors" }
  ).then(res => res.json());
}
export function getAll(){
  return fetch(BASE_URL,
    {
      headers: {'Authorization': "Bearer " + tokenService.getToken()}
    },
    {mode: "cors"})
    .then(res => res.json())
}