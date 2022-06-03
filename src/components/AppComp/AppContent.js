import React from 'react'
import { Container, Row } from 'reactstrap'
import AppMobile from './AppMobile'


function AppContent() {
    return (
        <Container style={AppContainer.Content}>
            <Row>
                <article className="col-12" style={AppContainer.title}>
                    <h1 style={{ fontSize: "190px", color:"#EAECEE" }}>App</h1>
                    <p style={AppContainer.p}>Download our mobile app</p>
                </article>
                <div className="col-12" style={{maxHeight:"45vh",}}>
                    <div className="col-6">
                         <AppMobile></AppMobile>
                    </div>
                    <div className="col-7" style={AppContainer.appBox}></div>

                </div>
            </Row>
        </Container>
    )
}

export default AppContent
const AppContainer = {
    Content: {
        minWidth: "1520px",
        padding: "30px",
        marginBottom: "120px",
        background:"#EA004B",
        maxHeight:"55vh",

    },
    title: {
        color: "#gainsboro",
        position: "relative",
        marginTop: "-180px",
        fontFamily: "'Baloo Da 2', cursive",
        zIndex: "-1",
        paddingLeft: "90px",
    },
    p: {
        marginTop: "-130px", color: "black", fontSize: "x-large", fontFamily: '"Open Sans", sans-serif', width: "25%", marginLeft: "40px"
    },
    appBox:{
        height:"85vh",
        marginTop:"-470px",
        marginRight:"100px",
        float:"right",
        width:"80vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"800px",
        backgroundImage: "url('https://images.deliveryhero.io/image/foodpanda/home-yemeksepeti-apps.png?width=1576&height=1253')",
    }
}