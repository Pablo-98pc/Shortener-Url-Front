import { useState } from "react"
import { Login } from "./Login"
import { Register } from "./Register"

export const  LoginPage = () => {
    const [handleLog,setHandleLog] = useState(false)
    
    const handleLogIn = () => {
        setHandleLog(!handleLog)
    }
    return <>{handleLog ? <><Login/> <button onClick={handleLogIn}>Go to register</button></> : <><Register/><button onClick={handleLogIn}>Go to Login</button></>} </>
    
}