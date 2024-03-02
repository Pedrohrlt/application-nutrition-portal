import React from "react";
import NavBarHome from "./navbar-home";
import Slider from "./slider";
import {Button, Col, Row} from "react-bootstrap";
import leo from "./../image/leo.png"
import '../scss/home.css'
import { FaWhatsappSquare } from "react-icons/fa";

export default class Home extends React.Component {
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

    render() {
        return (
        <>
            <h1 style={{textAlign: 'center', backgroundColor: '#E6ECE9', paddingTop: '30px', paddingBottom:'30px'}}>Dr Leonardo Simões</h1>
            <Button className='position-fixed end-0' style={{marginRight:'30px', padding: '0px'}}><FaWhatsappSquare style={{height:'40px', width: '50px', padding: '0px', backgroundColor:'green'}}/></Button>
            <NavBarHome/>
            <Slider/>
            <Row style={{marginTop:"40px", backgroundColor: '#E6ECE9', padding: '30px'}}>
                <Col>
                    <img src={leo} className="leo-img"></img>
                </Col>
                <Col>
                    <h1>
                        Quem sou eu?
                    </h1>
                    Sou um nutricionista comprometido com a saúde e o bem-estar dos meus pacientes. Meu objetivo é promover uma relação saudável com a comida, oferecendo orientação personalizada e práticas nutricionais sustentáveis. Acredito no poder dos alimentos naturais e na importância de uma alimentação equilibrada para alcançar e manter a saúde física e mental. Estou sempre em busca de atualizações e conhecimentos para oferecer o melhor atendimento possível e ajudar meus pacientes a alcançarem seus objetivos de saúde de forma holística e duradoura.
                </Col>
            </Row>
        </>
        )
    }
}

