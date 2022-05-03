import { useForm } from "react-hook-form";
import {InputCustom} from "../MUI-components/InputCustom"
import { Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { gql, useMutation } from '@apollo/client';

import React,{useEffect,useState} from "react"

const schema = yup.object().shape({
    urlName : yup
    .string()
    .required('name for url is required')
    
  })

const ADD_URL = gql`
    mutation($url: String!, $userName: String!, $urlName: String!){
        addUrl(url: $url, userName: $userName, urlName: $urlName) {
        url
        urlName
        }
    }
`
  


export const SaveUrl = (props) => {
    const userName = props.userName
    const url = props.url
    const [addUrl,{data,loading,error}] = useMutation(ADD_URL)

    const {
        control: controlUrlSave,
        handleSubmit,
        formState: { errors: errorsUrlSave },
      } = useForm({
        resolver: yupResolver(schema),
      });

    const onSubmit = (props) => {
        const urlName = props.urlName
        try {
            addUrl({variables:{url,userName,urlName}})
        } catch (error) {
            console.error(error)
        }
    }  

    return <form onSubmit={handleSubmit(onSubmit)}>
        <InputCustom name="urlName" control={controlUrlSave} label="url-name" id="add-url" errors={errorsUrlSave}/>
        <Button variant="contained" type="submit">Save</Button>
    </form>

}