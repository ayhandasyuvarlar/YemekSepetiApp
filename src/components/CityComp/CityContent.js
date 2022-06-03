import React from 'react'
import { Container, Row } from 'reactstrap'
import CityImages from './CityImages'

function CityContent() {
    return (
        <Container style={CityContent1.Content}>
             <Row>
                <article className="col-12" style={CityContent1.h1}>
                    <h1 style={{ fontSize: "190px", }}>Cities</h1>
                    <p style={CityContent1.p}>Find us in these cities and many more!</p>
                </article>
                <article className='col-12'>
                    <CityImages></CityImages>
                </article>
                </Row>
        </Container>
    )
}

export default CityContent
const CityContent1 = {
    Content:{
        padding:"10px ",
        marginBottom:"370px"
    },
    h1: {
        color: "#cccc",
        position: "relative",
        marginTop: "-150px",
        fontFamily: "'Baloo Da 2', cursive",
        zIndex: "-1",
    },
    p: {
        marginTop: "-140px", color: "black", fontSize: "x-large", fontFamily: '"Open Sans", sans-serif', width: "40%", marginLeft: "40px"
    }
}










// sfc

