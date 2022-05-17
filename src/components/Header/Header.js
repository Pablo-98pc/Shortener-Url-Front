import { Link, useNavigate } from "react-router-dom"
import {Button} from '@mui/material'
import { useContext } from "react"
import { UserContext } from "../../App"

export const Header = () => {
    const [user,setUser] = useContext(UserContext)
    const navigate = useNavigate()

    const LogOut = () => {
        setUser(null)
        window.localStorage.removeItem('userlogged')
        navigate('/')
    }

    return <header>
        {user ? <div className="header-login">
            <div className="Home">
                <Link to="/Home">
                    <Button variant="contained">Home</Button>
                </Link>
            </div>
            <div className="Log-out">
                <Button variant="contained" onClick={LogOut}>Log Out</Button>
            </div>
            <div className="Profile">
                <Link to="/Profile">
                    <Button variant="contained">Profile</Button>
                </Link>
            </div>
        </div> : null }
    </header>
}