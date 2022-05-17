import {gql,useSubscription} from '@apollo/client'
import { useEffect} from 'react'

const URL_SUBCRIPTION = gql`
    subscription{
        latestUrl {
        value
        }
    }
`


export const LatestUrlSubcription = ({setNewUrl}) => {
    
    const {data,loading} = useSubscription(
        URL_SUBCRIPTION
    )
    
    useEffect(()=> {
        if(!loading && data){
            setNewUrl(data.latestUrl.value) 
        }
      
    },[data])
    
    return null;

}