import React from 'react';

const url = "https://gorest.co.in/public/v2/users";

  async function getAPIData(setIsLoader:Function,setData:any){
    try {
      setIsLoader(true);
      const response = await fetch(url,
        {
          method: 'GET',
          // body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
          }
        });

        
        if(response.status==200){
       setIsLoader(false);
        };
      const json = await response.json();

      setData(json);

      console.log("Getting Data::", json);
    } catch (error) {
      setIsLoader(false);
      console.log("error", error);
    }

  }





  const postAPIData = async (Details:any,setIsLoader:Function,setData:any) => {
    try {
      
      let result = await fetch(url,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
          },
          body: await JSON.stringify({
            email: Details.email.current,
            name: Details.name.current,
            gender: Details.gender.current,
            status: Details.status.current,
          })
        }
      )
        .then((response: any) => response.json())
          getAPIData(setIsLoader,setData)
        .then((json: any) => console.log(json))

    }
    catch (error) {
      console.log("error", error);
    }

  }


  const UpdateApiData = async (id: any,updateDetails:any,setIsLoader:Function,setData:any) => {
    try {
      
      
      await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: updateDetails.name.current,
          email: updateDetails.email.current,
          gender: updateDetails.gender.current,
          status: updateDetails.status.current
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
        },
      })
        .then((response) => response.json())
        getAPIData(setIsLoader,setData)
        .then((json) => console.log(json));

    }
    catch (error) {
      console.log("Your error is::", error);
    }
  }

  const DeleteUser = async (id: any,updateDetails:any,setIsLoader:Function,setData:any) => {
    try {

      fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: 'DELETE',
        headers: {
          // 'Content-type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer 3a161c00114e2accf6930e0e41796ee28e560adc616916d46e5487fee2c10956'
        },
        
      });
      getAPIData(setIsLoader,setData)
    }
    catch (error) {

    }

  }



export {getAPIData,DeleteUser,UpdateApiData,postAPIData};