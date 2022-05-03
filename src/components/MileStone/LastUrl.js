import {gql,useSubscription,useQuery} from '@apollo/client'
import { useEffect, useState } from 'react'
import { LatestUrlSubcription } from '../subcriptions/latesUrl'

const QUERY_LAST_URL = gql`
query{
    lastUrl
}
`

export const LastUrl = () => {
    const {data,loading} = useQuery(QUERY_LAST_URL)
    const [newUrl,setNewUrl] = useState('')

    useEffect(()=> {
        if(!loading && data){
            setNewUrl(data.lastUrl)
        }

    },[data])

    useEffect(()=> {
        console.log(newUrl)
    },[newUrl])

    return<><h4> Last Url Created : {newUrl}</h4><LatestUrlSubcription setNewUrl={setNewUrl}/></>
}