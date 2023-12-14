export default function Register() {

    return (
        <main className="mainSection">
            <div className="accaount">

                <form className="accaount__form" action="">
                    <h2>REgister</h2>
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                    <label for="email">Email</label>
                    <input type="text" id="email" />
                    <label for="password">Password</label>
                    <input type="text" id="password" />
                    <label for="Re-Password">Re-Password</label>
                    <input type="text" id="Re-Password" />
                    <button className="submit_btn" type="submit">Register</button>
                </form>

            </div>




        </main>
    )

}