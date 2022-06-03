import { Container, Row } from "reactstrap";

const FooterUnit6 = () => {
    return (
        <Container style={{marginBottom:"100px"}}>
            <Row>
                <article>
                    <div className="col-12">
                      <p style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" ,margin:"0" }}>
                      Thank you <span><img width="7%" src="https://images.deliveryhero.io/image/fd-tr/CMS/radyo_eksenn.png" alt="img" /></span> for the call center waiting music.
                      </p>
                    </div>
                    <div className="col-12">
                    <a href="#"><img src="https://images.deliveryhero.io/image/fd-tr/CMS/yemek_com_logo_new.png" style={{height:"45px"}}/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.yemeksepeti.yemekcom"><img src="https://images.deliveryhero.io/image/fd-tr/CMS/yemek_com_google.png" style={{height:"45px"}}/></a>
                    <a href="https://itunes.apple.com/tr/app/yemek-com/id1351326948?l=tr&amp;mt=8" ><img src="https://images.deliveryhero.io/image/fd-tr/CMS/yemek_com_apple.png" style={{height:"45px"}}/></a>
                    </div>
                </article>
            </Row>
        </Container>
    );
}
 
export default FooterUnit6;