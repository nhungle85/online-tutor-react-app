import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./NavBar.css"

function NavBar({isNavOpen, onClick}) {
    return (
        <Navbar dark sticky="top" expand="md">
             <div className="container">
                <NavbarBrand className="mr-auto navbar-brand d-none" href="/"><img src="/assets/img/ot-logo.png" height="50" width="50" alt="Online Tutor" /></NavbarBrand>
                <NavbarToggler onClick={onClick} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown className="navbar__dropdown" toggle={function noRefCheck(){}}>
                            <DropdownToggle caret><i className="fa fa-info fa-lg" /> Program</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <Link to="/courses">1-on-1 Tutoring</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/courses">Small Group Semester</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/courses">Private Lessons</Link>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    <Link to="/courses">On-Campus Summer programs</Link>
                                </DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/courses">
                                <i className="fa fa-list fa-lg" /> Courses
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <i className="fa fa-address-card fa-lg" /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
             </div>
        </Navbar>
    )
}

export default NavBar
