import { gql, useMutation } from '@apollo/client';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form";
import {InputCustom} from "../MUI-components/InputCustom"
import { Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LOGIN_USER = gql`
  mutation($userName: String!, $password: String!){
    login(userName: $userName, password: $password) {
      value
      userName
    }
  }
`


const schema = yup.object().shape({
    userName: yup
      .string()
      .min(3)
      .required(),
    password: yup
      .string()
      .min(4)
      .required(),
  });


export  const Login = () => {
  const [user,setUser] = useState([])
  const navigate = useNavigate()
    const {
        control: controlLogin,
        handleSubmit,
        formState: { errors: errorsLogin },
      } = useForm({
        resolver: yupResolver(schema),
      });

      const [loginUser,{data,loading,error}] = useMutation(LOGIN_USER)

      useEffect(()=> {
        if(!loading && data){
          setUser(data.login)
            window.localStorage.setItem('userlogged',JSON.stringify(data.login))
             navigate('/Home') 
        }
            
      },[loading,data])

      const onSubmit = async (props) => {
          const userName = props.userName;
          const password = props.password
        try {
           loginUser({variables:{userName,password}})

        } catch (error) {
            
            console.error(error)
        }
      };

    

    return <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom name="userName" control={controlLogin} label="UserName" id="login" errors={errorsLogin.userName}/>
        <InputCustom name="password" control={controlLogin} label="Password" id="login-password" type="password" errors={errorsLogin.password}/>
        <Button variant="contained" type="submit">Login</Button>
    </form>
  

}

