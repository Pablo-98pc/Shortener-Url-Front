
import { useNavigate } from "react-router-dom"
import { gql, useMutation } from '@apollo/client';
import { useForm } from "react-hook-form";
import {InputCustom} from "../MUI-components/InputCustom"
import { Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const REGISTER_USER = gql`
    mutation($userName: String!, $password: String!){
        registerUser(userName: $userName, password: $password) {
        value
        userName
        }
    }
`

const schema = yup.object().shape({
    userName: yup
      .string()
      .min(3)
      .required('you need an userName'),
    password: yup
      .string()
      .min(4)
      .required('you need a password'),
  });

export const Register = () => {
    const [registerUser,{loading,data,error}] = useMutation(REGISTER_USER)
   
    const navigate = useNavigate()

    useEffect(()=> {
        if(!loading && data){
            window.localStorage.setItem('userlogged',JSON.stringify(data.registerUser))
            navigate('/Home')
        }
    },[data,loading])

    const {
        control: controlRegister,
        handleSubmit,
        formState: { errors: errorsRegister },
      } = useForm({
        resolver: yupResolver(schema),
      }); 
      const onSubmit = async (props) => {
          console.log('entra')
        const userName = props.userName
        const password = props.password
        try {
            registerUser({variables:{userName,password}})
            
        } catch (error) {
            console.error(error)
        }
      }

   

    return<form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom name="userName" control={controlRegister} label="UserName" id="login" errors={errorsRegister.userName}/>
        <InputCustom name="password" control={controlRegister} label="Password" id="login-password" type="password" errors={errorsRegister.password}/>
        <Button variant="contained" type="submit">Register</Button>
    </form>
    

}