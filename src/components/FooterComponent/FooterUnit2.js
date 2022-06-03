import { Card, CardBody, CardHeader, CardImg, CardText, Container, Row } from "reactstrap";
const FooterUnit2 = ({url}) => {
    console.log(url)
    return (
        <Container style={{ borderBottom: "1px solid gainsboro", paddingBottom: "30px" }}>
            <Row>
                <article className="col-12">
                    <Card style={{ border: "none" }}>
                        <CardBody>
                            <CardHeader style={{ display: "flex", background: "none", border: "none" }}>
                                <CardText className="col-5">
                                    <p>© 2022 Yemeksepeti</p>
                                </CardText>
                                <CardText className="col-7 footer-Link" style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" }}>
                                    <p style={{ float: "right" }}><span><a href="#">Terms and Conditions</a></span><span><a href="#"> FAQ </a></span><span><a href="#"> Press </a></span><span><a href="#"> Cookie Policy </a></span><span><a href="#"> Contact </a></span><span><a href="#"> Partner with us </a></span><span><a href="#"> Information Notice </a></span> </p>
                                    <p style={{ float: "right" }}><span><a href="#"> Protection of Personel Data</a></span><span><a href="#"> Information Society Services</a></span></p>
                                </CardText>
                            </CardHeader>
                               <CardImg style={{width:"10%" ,float:"right"}} src={url}>
                            </CardImg>
                        </CardBody>
                    </Card>
                </article>
            </Row>
        </Container>
    );
}

export default FooterUnit2;