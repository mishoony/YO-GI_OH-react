export default function Header() {

    return (
        <header>
            <nav className="navigation_bar">
                <a href="">
                    <i></i>
                </a>

                <ul className="navigation_bar__links">
                    <li>my profil</li>
                    <li>logout</li>
                    <li>login</li>
                    <li>Register</li>
                </ul>
            </nav>
            <div className="img_section">
                <div className="search_conteiner">
                    <input type="text"/>
                        <i className="fas fa-search search"></i>
                </div>
                <h2 className="img_section__title home_heading">YO-GI-OH</h2>

                <a className="car" href="">kolichka</a>
            </div>
            <div className="mainSection__navigation">
                <ul className="mainSection__navigation__link">
                    <li className="mainSection__navigation__links">home</li>
                    <li className="mainSection__navigation__links">products</li>
                    <li className="mainSection__navigation__links">about as</li>
                </ul>
            </div>
        </header>

    )
}