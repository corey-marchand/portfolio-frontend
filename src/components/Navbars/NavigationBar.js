import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .navbar {
    background-color: #1A2126;
   }
    .nav-margin {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .navbar-brand, .navbar-nav .nav-link {
        padding: 0px 80px;
        font-size: 100px;
        color: white;
        text-align: center;

        &:hover {
            color: white;
        }
    }
`;


const NavigationBar = () => (
    <Styles>
        <Navbar className="navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-margin">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles> 
)

export default NavigationBar;

