import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from '../../context/authContext'

export default function Header() {

    const { isAutenticated, username } = useContext(AuthContext)

    return (
        <header>
            <nav className="navigation_bar">
                <a href="">
                    <i></i>
                </a>

                <ul className="navigation_bar__links">
                    {isAutenticated &&
                        <>
                            <Link className="navigation_bar__link" to='/myprofil'>my profil</Link>
                            <Link className="navigation_bar__link" to='/logout'>logout</Link>
                            <p>|{username}</p>
                        </>
                    }

                    {!isAutenticated &&
                        <>
                            <Link className="navigation_bar__link" to='/login'>login</Link>
                            <Link className="navigation_bar__link" to='/register'>Register</Link>
                        </>
                    }

                </ul>
            </nav>
            <div className="img_section">
                <div className="search_conteiner">
                    <input type="text" />
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
                    {isAutenticated && (

                    <Link to='/products/create' className="mainSection__navigation__links"> Create Product</Link>
                    )}
                    {/* <i className="fas fa-shopping-basket car marginNav"></i> */}
                </ul>
            </div>
        </header>

    )
}