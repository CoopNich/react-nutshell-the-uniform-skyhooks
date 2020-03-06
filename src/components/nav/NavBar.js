import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavBar = props => {

    const handleLogout = () => {
        props.clearUser();
        props.history.push('/ ');
    }

    return (
        <header>
            <h1 className="site-title">
                Nutshell
      </h1>
            <nav>
                <ul className="container">
                    <li>
                        <NavLink className="nav-link" to="/ " activeClassName="selected" >
                            Home
            </NavLink>
                    </li>
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/news" activeClassName="selected" >
                                News
            </NavLink>
                        </li>
                        : null}
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/events" activeClassName="selected" >
                                Events
            </NavLink>
                        </li>
                        : null}
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/tasks" activeClassName="selected" >
                                Tasks
            </NavLink>
                        </li>
                        : null}
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/messages" activeClassName="selected" >
                                Messages
            </NavLink>
                        </li>
                        : null}
                    {props.hasUser
                        ? <li>
                            <NavLink className="nav-link" to="/ " onClick={handleLogout} activeClassName="selected" >
                                Logout
            </NavLink>
                        </li>
                        : <li>
                            <NavLink className="nav-link" to="/login" activeClassName="selected" >
                                Login
          </NavLink>
                        </li>}
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);