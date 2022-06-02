import React, { Component } from 'react'
import NavSection from './NavItem';
import { Collapse, Container, Navbar, NavbarBrand, Row } from 'reactstrap';
import HeadTitle from './headtitle';

export class Linkcontent extends Component {
    render() {
        return (
            <Container className='continer-fuild' style={stylecss.Container}>
                <Row style={stylecss.Row} >
                    <Navbar className='col-12' style={stylecss.Navbar}>
                        <NavbarBrand className='col-7' style={{padding:"1px" }}>
                            <HeadTitle></HeadTitle>
                        </NavbarBrand>
                        <Collapse className='col-4' style={{  display: "flex" }}>
                            <NavSection></NavSection>
                        </Collapse>
                    </Navbar>
                </Row>
            </Container>
        )
    }
}

export default Linkcontent;

const stylecss = {
    Container: {
        minWidth: "1500px",
        display: "flex",
        padding:"0px",
        borderBottom:"1px solid gainsboro"
    },
    Row: {
        width: "1530px"

    },
    Navbar:{
        padding:"0px"
    }

    
}