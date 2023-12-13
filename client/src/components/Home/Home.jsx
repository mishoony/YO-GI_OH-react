export default function Home(){

    return(
        <main className="mainSection">
            <div className="accaount">
            
                <form className="accaount__form" action="">
                    <h2>Login</h2>
                    <label for="username">Username</label>
                    <input type="text" id="username"/>
                    
                    <label for="password">Password</label>
                    <input type="text" id="password"/>
                    
                    <button className="submit_btn" type="submit">Login</button>
                </form>
                
            </div>




    </main>
    )
}