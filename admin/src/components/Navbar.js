import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../context/AuthContext';

const Navbar = props => {
    const { state, signout } = useContext(AuthContext);
    if (state.token) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/login">
                    Admin
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profs">
                                Profs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/majors">
                                Majors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/positions">
                                Positions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faculties">
                                Faculties
                            </Link>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <button className="btn btn btn-outline-light" onClick={signout}>
                            Logout
                        </button>
                    </span>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/login">
                Admin Area
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;
