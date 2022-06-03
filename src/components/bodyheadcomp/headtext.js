import React from 'react'
import { Container, Row } from 'reactstrap'

export default function HeadText() {
    return (
        <Container style={headText.Content}>
            <Row>
                <article>
                    <h2 style={headText.h2}>Food or market, all your needs are at your door!</h2>
                </article>
            </Row>
        </Container>
    )
}
const headText = {
    h2: {
        fontSize: "40px", fontWeight: "100", fontFamily: "'Open Sans', sans-serif",
    },
    Content:{
        marginTop: "200px", minWidth: "1100px", textAlign: "center" ,color:"gray"
    }
}