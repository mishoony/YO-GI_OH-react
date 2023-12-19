import { useContext } from "react"

import AuthContext from '../../context/authContext'
import useForm from "../../Hooks/useForm"

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: "",
        password: ""
    })


    return (
        <main className="mainSection">
            <div className="accaount">

                <form className="accaount__form" onSubmit={onSubmit} action="">
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={onChange} value={values.email} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={onChange} value={values.password} />

                    <button className="submit_btn" type="submit">Login</button>
                </form>

            </div>




        </main>
    )
}