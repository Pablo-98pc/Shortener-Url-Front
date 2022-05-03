import React,{useEffect, useState} from "react"

import { Header } from "../Header/Header"
import {gql,useQuery} from '@apollo/client'

const GET_URL_SAVE = gql`
    query($userName: String!){
        urlSavedByUser(userName: $userName) {
        url
        urlName
        }
    }
`


export const Profile = () => {
    
    const [userName,setUserName] = useState('')

    const {loading,error,data} = useQuery(GET_URL_SAVE,{
        variables:{userName}
        
    })

    console.log(data)

    useEffect(()=> {
        const userJSON = window.localStorage.getItem('userlogged')
        const userLogged = JSON.parse(userJSON)
        setUserName(userLogged.userName)
    },[])
    
    

    return <><Header/><div className="list-url">{data ? data.urlSavedByUser.map((e,i)=> 
    <div className="url-save" key={i}>
        <div className="url-name">
            <strong>Name:</strong>{e.urlName}
        </div>
        <div className="url-link">
             <strong>Url : </strong>{e.url}
        </div></div>) : null}
    </div></>

}