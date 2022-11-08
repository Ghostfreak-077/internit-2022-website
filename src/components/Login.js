import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const Login = () => {

    const [post, setPost] = useState({})

    const host = 'http://localhost:5000/api/admin'
    const [cookies, setCookies, removeCookies] = useCookies(['token'])

    // console.log(cookies);

      // setCookies('internit',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjNlNmM1NTMwY2UxODI4YWI5NzViMyIsImlhdCI6MTY2NzU2NTc1NSwiZXhwIjoxNjY3OTk3NzU1fQ.FRyqjO8M20CeA_bGNpBN1PDLuQggihTV6ml80DWrFsE",{
      //   path:'/',
        
      // })
        // axios.post(url,{
        //     "email":"internit2022@gmail.com",
        //     "password": "asdfmnbvzxc",
            
        //   },{withCredentials:true}).then(async (res)=>{
        //     await setPost(res.data)
        //     console.log("hello1");
        //     return res
        //   }).then((res)=>{
        //     console.log("hello2")
        // }).catch(()=>{
        //   console.log("error bhai");
        // })

        // const loginApi = async (endpoints,data_json, method) =>{
        //   // const response = await axios.post(`${host}${endpoints}`, data_json
        //   //   // method: method,
        //   //   // headers: {
        //   //   //   'Content-Type': 'application/json',
        //   //   // },
        //   //   // body: JSON.stringify(data_json) // body data type must match "Content-Type" header
        //   // ).then((res)=>{
        //   //   setPost(res)
        //   //   console.log(post);
        //   // }
        //   // )

        //   return response
      
          // if (json.status === true){
          //   setPost(json.username)
          // }
          // else{
          //   console.log("error bhai");
          //   // setUser('default')
          // // }
      
          // return json
        // }

    // useEffect(()=>{
    //   loginApi('/login',{
    //     "email":"internit2022@gmail.com",
    //     "password": "asdfmnbvzxc",
    //   },'POST').then((res)=>{
    //     console.log(res);
    //   })
    //   // console.log(post);
    // },[4])


    // const login = ()=>{
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ 
    //       "email":"internit2022@gmail.com",
    //       "password": "asdfmnbvzxc",
    //      })
    // };
    // fetch(host+'/login', requestOptions)
    //     .then(response => response.json())
    //     .then(data => {
    //       setPost(data)
    //       // console.log(data);
    //       setCookies('internit',data.token,{
    //         path:'/'
    //       })
    //     });
    //     // console.log();
    // }


  return (
    <div>
      {post.token}
      {/* <button onClick={login}>Login</button> */}
    </div>
  )
}

export default Login
// import axios from "axios";
// import React, { useState } from "react";
// // import Styles from "./styles.module.css";

// const Login = () => {

//   const [data, setdata] = useState({
//     email: "",
//     password: ""
//   })

//   const loginDataChange = async (e) => {
//     try {
//       setdata({ ...data, [e.target.name]: e.target.value });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const myForm = new FormData();
//       myForm.set("email", data.email);
//       myForm.set("password", data.password);
//       const config = { headers: { "Content-Type": "multipart/form-data" } };
//       const { Data } = await axios.post(`http://localhost:5000/api/admin/login`, myForm, config);

//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return (
//     <div>
//       <div >
//         <h1>Admin Login</h1>
//       </div>
//       <div >
//         <form>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" onChange={loginDataChange} />
//           <label htmlFor="password">Password:</label>
//           <input type="text" id="password" name="password" onChange={loginDataChange} />
//           <input type="submit" onClick={submit} />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;