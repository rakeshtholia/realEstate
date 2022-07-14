import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  let returnData;
  await fetch(url, {
    headers: {
      'X-RapidApi-Host': 'bayut.p.rapidapi.com',
      'X-RapidApi-Key': 'b6c5d34b4fmsh0c60df1c5f02260p1c174cjsn62b827b9a243' ,
    },
  }).then(resp=> resp.json()).then(data=> {returnData = data});
  
  console.log(returnData)
  console.log(returnData)
  return returnData;
}