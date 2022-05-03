import {gql,useQuery} from '@apollo/client'
import { useEffect, useState } from 'react'
import { LatestCount } from '../subcriptions/latestCount';
import {LinearProgressWithLabel} from '../MUI-components/LinearProgressWithLabel';
import Box from '@mui/material/Box';

const URL_COUNT = gql`
    query{
        urlCount
    }
`


export const LastCount = () => {
    const {data,loading} = useQuery(URL_COUNT)
    const [lastCount,setLastCount] = useState(null)
    
    useEffect(()=> {
        if(!loading && data){
            setLastCount(data.urlCount)
        }
    },[data])

    return <><h4>Road to 100 Urls created : </h4>{lastCount ?  <Box sx={{ width: '100%' }}>
    <LinearProgressWithLabel value={lastCount} />
  </Box>: null}<LatestCount setLastCount={setLastCount}/>  </>

}