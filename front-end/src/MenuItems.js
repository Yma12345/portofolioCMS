import React, { useContext, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, Link } from "react-router";
import Cookies from 'js-cookie';
import { UserContext } from './UserContext';
import classes from './MenuItems.module.css';


function MenuItems() {
    const [user, setUser] = useContext(UserContext);
    let navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        if (Cookies.get("Bearertoken")) Cookies.remove("Bearertoken")
        if (Cookies.get("Role")) Cookies.remove("Role")
        setUser({ role: null, isLoggedIn: false })
        navigate('/login')
    }

    return (
        <>
            <Navbar className={classes.Topbar} expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={classes.ListItems}>
                            {user.isLoggedIn ? (
                                <>
                                    }
                                    {user.role == "admin" ? (
                                        <>
                                            <LinkContainer to='/home'>
                                                <Nav.Link className={classes.ListItems}>home</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to='/cv'>
                                                <Nav.Link className={classes.ListItems} >cv</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to='/overmij'>
                                                <Nav.Link className={classes.ListItems}>over mij</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to='/illustrator'>
                                                <Nav.Link className={classes.ListItems}>illustrator</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to='/indesign'>
                                                <Nav.Link className={classes.ListItems}>indesign</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to='/contact'>
                                                <Nav.Link className={classes.ListItems}>contact</Nav.Link>
                                            </LinkContainer>
                                            <LinkContainer to='/admin'>
                                                <Nav.Link className={classes.ListItems}>admin</Nav.Link>
                                            </LinkContainer>
                                        </>
                                    ) : (null)
                                    }
                                    <LinkContainer to='/'>
                                        <Nav.Link onClick={logout} className={classes.ListItems}>logout</Nav.Link>
                                    </LinkContainer>
                                </>
                            ) : (
                                    <>
                                        <LinkContainer to='/home'>
                                            <Nav.Link className={classes.ListItems}>home</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/cv'>
                                            <Nav.Link className={classes.ListItems}>cv</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/overmij'>
                                            <Nav.Link className={classes.ListItems}>over mij</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/illustrator'>
                                            <Nav.Link className={classes.ListItems}>illustrator</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/indesign'>
                                            <Nav.Link className={classes.ListItems}>indesign</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/contact'>
                                            <Nav.Link className={classes.ListItems}>contact</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to='/login'>
                                            <Nav.Link className={classes.ListItems}>login</Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuItems;
