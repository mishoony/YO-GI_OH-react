import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import AuthContext from "../../context/authContext"
import * as authService from '../../services/authService'


export default function Logout(){

    const navigate = useNavigate()

    const { logouthHandler} = useContext(AuthContext)

    useEffect(() => {
        authService.logout()
        .then(() =>{

            logouthHandler()
            navigate('/')
        })
        .catch(() =>{

            logouthHandler()
            navigate('/')
        })
    },[])

    return null
}