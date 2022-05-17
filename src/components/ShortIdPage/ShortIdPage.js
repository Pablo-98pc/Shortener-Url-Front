import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ShortIdPage = () => {
    const {shortid} = useParams()

    const getPage = async () => {
        const {data,status} = await axios.get(`http://localhost:3001/${shortid}`)
        if(status === 200){
            window.location.href = data
        }
        else {
            console.log('Not found')
        }
    }

    useEffect(()=> {
        getPage()
    },[])

    return <Box sx={{ display: 'flex', justifyContent:'center' }}>
        <CircularProgress />
    </Box>
}