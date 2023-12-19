import { useContext } from "react"
import AuthContext from "../../context/authContext"
import useForm from "../../Hooks/useForm"

export default function Register() {


    const {registerSubmitHandler} = useContext(AuthContext)
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler,{
        'username':'',
        'email':'',
        'password':'',
        'rePassword':'',
    })

    return (
        <main className="mainSection">
            <div className="accaount">

                <form className="accaount__form" onSubmit={onSubmit} action="">
                    <h2>REgister</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={onChange} value={values.username}/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={onChange} value={values.email}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={onChange} value={values.password}/>
                    <label htmlFor="Re-Password">Re-Password</label>
                    <input type="password" id="Re-Password"name="rePassword" onChange={onChange} value={values.rePassword} />
                    <button className="submit_btn" type="submit">Register</button>
                </form>

            </div>




        </main>
    )

}