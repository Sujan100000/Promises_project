const request = require ("request");
const getApiV1 = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            version: "v1",   
            data: body,
          });
        }
      );
    });
  };
  
  const getApiV2 = () => {
    return new Promise((resolve, reject) => {
      request(
        "https://reqres.in/api/users",
        (error, response, body) => {
          if (error) {
            reject(error);
          }
          resolve({
            version: "v2",
            data: body,
          });
        }
      );
    });
  };
  
  // Normal Promise 

  getApiV1()
  .then((result)=> {
    const {data} = result ;
    const realJson= JSON.parse (data);
    for (let d in realJson.data) {
      console.log ("id:", realJson.data[d].id);
      console.log ("e-mail", realJson.data[d].email);
      console.log ("First Name ", realJson.data[d].first_name);
      console.log ("Last Name", realJson.data[d].last_name);
      console.log ("Profile Picture ", realJson.data[d].avatar);
    }
  }).catch((error) => {
    console.log("Error occured during fetch operation")
  }).finally(() =>{
    console.log ("Operation complete:");
  })


  //   Promise.all 
   Promise.all([getApiV1(), getApiV2()])
  .then((result) => console.log("data:",result))
  .catch((err) => console.log("error:",err));

 //   Promise.race 
    Promise.race([getApiV1(), getApiV2()])
    .then((result) => console.log("data:",result))
    .catch((err) => console.log("error:",err));
    