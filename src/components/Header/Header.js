import { Link } from "react-router-dom"
import {Button} from '@mui/material'

export const Header = () => {

    return <header><div className="Profile"><Link to="/Profile"><Button variant="contained">Profile</Button></Link></div><div className="Home"><Link to="/Home"><Button variant="contained">Home</Button></Link></div></header>
}