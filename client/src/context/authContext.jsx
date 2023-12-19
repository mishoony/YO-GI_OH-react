import { createContext } from "react";
import {useNavigate} from 'react-router-dom'
import usePersisted from "../Hooks/usePersisted";

import * as authService from '../services/authService'

const AuthContext = createContext()

export const AuthProvaider = ({
    children
}) => {

    const navigate = useNavigate()
    const [auth, setAuth] = usePersisted('auth',{})


    const loginSubmitHandler =  async (value) =>{
        const result = await authService.login(value.email,value.password)

        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const registerSubmitHandler = async (value) => {

        

        const result = await authService.register(value.email, value.username,value.password)
        
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        navigate('/')
    }

    const logouthHandler = () => {
        setAuth({})
        localStorage.removeItem('accessToken')
        console.log('logout')
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logouthHandler,
        username : auth.username,
        email : auth.email,
        userId: auth._id,
        isAutenticated: !!auth.accessToken,
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}
AuthContext.displayName = 'AuthContext'

export default AuthContext