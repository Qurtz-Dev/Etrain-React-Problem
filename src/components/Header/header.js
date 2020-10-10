import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="Header-Part">

            <div className="Navbar">
                <ul className="Unolder-List">

                    <li className="List active">
                        <a className="Link">Home </a>
                    </li>

                    <li className="List">
                        <a className="Link"> About </a>
                    </li>

                    <li className="List">
                        <a className="Link">Courses </a>
                    </li>

                    <li className="List">
                        <a className="Link">Blog </a>
                    </li>

                    <li className="List">
                        <a className="Link"> Page </a>
                    </li>

                    <li className="List">
                        <a className="Link"> Contact </a>
                    </li>

                </ul>

                <button className="Btn">
                    Get A Quote
                </button>

            </div>

        </header>
    )
}

export default Header;