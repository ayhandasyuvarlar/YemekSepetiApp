import React from 'react'
import { Container, Row } from 'reactstrap'
import PartnerTextContent from './PartnerTextContent'

export default function PartnersContent() {
    return (
        <Container style={PartnerContainer.Content}>
            <Row>
                <article className="col-12" style={PartnerContainer.h1}>
                    <h1 style={{ fontSize: "190px", }}>Partners</h1>
                    <p style={PartnerContainer.p}>Become our business partner</p>
                </article>
                <article className='col-4' style={{ borderRadius: "3px", background: "white", marginLeft: "100px", width: "40rem", padding: "25px 10px", boxShadow: "2px 4px 10px gray" }}>
                    <PartnerTextContent></PartnerTextContent>
                </article>
            </Row>
        </Container>
    )
}
const PartnerContainer = {
    Content: {
        minWidth: "1520px",
        padding: "30px",
        marginTop: "60px",
        display: "block",
        backgroundImage: "url('https://images.deliveryhero.io/image/foodpanda/home-vendor-tr.jpg?width=2000&height=1280')",
        backgroundSize: "cover",
        height: "29rem",
        marginBottom: "250px",
        backgroundPosition: "50% -250px"
    },
    h1: {
        color: "#cccc",
        position: "relative",
        marginTop: "-180px",
        fontFamily: "'Baloo Da 2', cursive",
        zIndex: "-5",
        paddingLeft: "90px",
    },
    p: {
        marginTop: "-130px", color: "black", fontSize: "x-large", fontFamily: '"Open Sans", sans-serif', width: "25%", marginLeft: "40px"
    }
}