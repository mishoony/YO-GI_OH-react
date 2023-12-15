import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <nav className="navigation_bar">
                <a href="">
                    <i></i>
                </a>

                <ul className="navigation_bar__links">
                    <Link className="navigation_bar__link" to='/myprofil'>my profil</Link>
                    <Link className="navigation_bar__link" to='/logout'>logout</Link>
                    <Link className="navigation_bar__link" to='/login'>login</Link>
                    <Link className="navigation_bar__link" to='/register'>Register</Link>
                </ul>
            </nav>
            <div className="img_section">
                <div className="search_conteiner">
                    <input type="text"/>
                        <i className="fas fa-search search"></i>
                </div>
                <h2 className="img_section__title home_heading">YO-GI-OH</h2>

                {/* <a className="car" href="">kolichka</a> */}
            </div>
            <div className="mainSection__navigation">
                <ul className="mainSection__navigation__link">
                    <Link to='/' className="mainSection__navigation__links" >home</Link>
                    <Link to='/gallery' className="mainSection__navigation__links">products</Link>
                    <Link to='/aboutAs' className="mainSection__navigation__links">about as</Link>
                    <Link to='/products/create' className="mainSection__navigation__links"> Create Product</Link>
                    <i className="fas fa-shopping-basket car marginNav"></i>
                </ul>
            </div>
        </header>

    )
}