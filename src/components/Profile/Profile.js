import React,{useContext, useDebugValue, useEffect, useState} from "react"
import { Header } from "../Header/Header"
import {gql,useQuery} from '@apollo/client'
import { UserContext } from '../../App.js'


const GET_URL_SAVE = gql`
    query($userName: String!){
        urlSavedByUser(userName: $userName) {
        url
        urlName
        }
    }
`


export const Profile = () => {
    const [user,setUser] = useContext(UserContext)

    const {data} = useQuery(GET_URL_SAVE,{
        variables:{userName : user.userName}
        
    })


    useEffect(()=> {
        const userJSON = window.localStorage.getItem('userlogged')
        const userLogged = JSON.parse(userJSON)
        setUser(userLogged)
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