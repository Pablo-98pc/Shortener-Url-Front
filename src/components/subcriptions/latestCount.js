import {gql,useSubscription} from '@apollo/client'
import { useEffect} from 'react'


const LATEST_URL_COUNT = gql`
    subscription{
        updateUrlCount
    }
`

export const LatestCount = ({setLastCount}) => {
    const {data,loading} = useSubscription(
        LATEST_URL_COUNT
    )
    useEffect(()=> {
        if(!loading && data){
            setLastCount(data.updateUrlCount)
        }
    },[data])
    return null

}