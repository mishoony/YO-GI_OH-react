export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="aboutas">
                    <h3>About As</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente fugit possimus libero
                        laborum earum beatae neque, accusamus, blanditiis vitae dolorum aliquam unde soluta dolorem corporis quo
                        sequi repudiandae fuga.</p>
                    <div className="contacts">

                        <label>Email Address <span className="contacts__info">YUGIOH@DSP.com</span></label>
                        <label>Phone Nomber <span className="contacts__info">+9995848555</span></label>
                    </div>
                </div>
                <ul className="sociale_list">
                    <h3>Social</h3>
                    <li><i className="sociale fab fa-facebook"></i></li>
                    <li><i className="sociale fab fa-instagram"></i></li>

                </ul>



            </footer>
            <p className="createBY"><span>&copy;</span> Create by DSP :)</p>
        </>
    )

}