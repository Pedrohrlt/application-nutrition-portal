import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from "react-bootstrap";
import React from "react";

export default class NavBarHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
        this.bind();
    };
    bind() {
        this.redirectFromWhats = this.redirectFromWhats.bind(this);
    }

    redirectFromWhats(){
        return window.open("https://api.whatsapp.com/send/?phone=5511948816521&text&type=phone_number&app_absent=0")
    }

    render (){
        return (
            <>
                <Navbar>
                        <Navbar.Collapse className='d-flex justify-content-center border-bottom'>
                            <Nav>
                                <Nav.Link href="#home">Sobre Leonardo</Nav.Link>
                                <Nav.Link href="#home">Serviços Oferecidos</Nav.Link>
                                <Nav.Link href="#home">Planos</Nav.Link>
                                <Nav.Link href="#link">Contato</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                </Navbar>
            </>
    );
}
}
