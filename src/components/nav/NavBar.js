import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, Jumbotron } from "react-bootstrap"
import "./NavBar.css"

const NavBar = props => {

    const handleLogout = () => {
        props.clearUser();
        props.history.push('/');
    }

    return (
        <header>
            <Jumbotron className="site-title">
                <h1>Nutshell</h1>
            </Jumbotron>
            <Navbar bg="dark" variant="dark" >
                <Nav className="container">

                    <NavLink className="nav-link" to="/Home">Home</NavLink>

                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/news" >
                            News
                            </NavLink>

                        : null}
                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/events" >
                            Events
                            </NavLink>

                        : null}
                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/Tasks" >
                            Tasks
                             </NavLink>

                        : null}
                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/messages" >
                            Messages
                            </NavLink>

                        : null}
                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/ " onClick={handleLogout} >
                            Logout
                             </NavLink>

                        :
                        <NavLink className="nav-link" to="/login" >
                            Login
                             </NavLink>
                    }
                </Nav>
            </Navbar>
        </header>
    );
};

export default withRouter(NavBar);