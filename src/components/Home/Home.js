import React,{useEffect,useState,useContext} from "react"
import CopyToCliboard  from "react-copy-to-clipboard"
import { useForm } from "react-hook-form";
import {InputCustom} from "../MUI-components/InputCustom"
import { Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { gql, useMutation } from '@apollo/client';
import { Header } from "../Header/Header"
import { SaveUrl } from "./saveUrl";
import { LastUrl } from "../MileStone/LastUrl";
import { LastCount } from "../MileStone/LastCount";
import {UserContext} from '../../App'
import {Footer} from "../Footer/Footer";

const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

const CREATE_URL = gql`
  mutation($url: String!) {
    createUrl(url: $url) {
      value
    }
  }
`

const schema = yup.object().shape({
  url : yup
  .string()
  .required('url is required')
  .test("is-url-valid", "URL is not valid", (value) => {
    return isValidUrl(value)})

})

export const Home = () => {
  const [user,setUser] = useContext(UserContext)
  const [createUrl,{data}] = useMutation(CREATE_URL)
  useEffect(()=> {
    
  },[])
  

  const {
    control: controlUrl,
    handleSubmit,
    resetField,
    watch,
    formState: { errors: errorsUrl },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {url} = watch()
  


  const handleReset = () => {
    resetField("url")
  }

  const onSubmit = async (props) => {
    try {
        const url = props.url
        
        createUrl({variables:{url}})
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(()=> {
    const userJSON = window.localStorage.getItem('userlogged')
    const userLogged = JSON.parse(userJSON)
    setUser(userLogged)
      
  },[])
  
  
  return<><Header/>
    <div className="formUrl">
      <div className="urlForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputCustom name="url" control={controlUrl} label="url" id="create-url" errors={errorsUrl.url}/>
          <Button variant="contained" type="submit">Generate</Button>
          {url  ? <button onClick={handleReset}>delete</button> : null}
        </form>
      </div>
      <div className="url-generated">
        {data ? <><div className="url-to-copy"><p className="url">{data.createUrl.value}</p><CopyToCliboard text={data.createUrl.value}><Button>Copy</Button></CopyToCliboard></div> <SaveUrl userName={user.userName} url={data.createUrl.value}/> </> : null} 
        </div>
    </div>
    <div className="subcriptions-info">
      <div className="last-url">
        <LastUrl/>
      </div>
      <LastCount/>
    </div>
    <Footer/>
  </>
}

