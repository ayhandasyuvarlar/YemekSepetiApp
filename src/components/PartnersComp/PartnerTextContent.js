import { Button, Container, Row } from "reactstrap";

const PartnerTextContent = () => {
    return (<Container>
        <Row>
            <article className="col-12">
                <h4 style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100", color: "black", width: "80%", }}>
                    Join now, start multiplying your sales with Yemeksepeti
                </h4>
            </article>
            <article className="col-12">
                <p  style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100", color: "black", fontSize:"large" ,marginTop:"20px" }}>
                    Do you want to reach thousands of new users? Not only those in your own district, but also thousands of users in the surrounding districts will now be able to order from your business. A house, a plaza, a workplace or a university campus, whoever you want to serve is now your customer.<br/>
                    It's pretty simple! We list your menu and send you the order information. If you wish, you can do the delivery of the order yourself, or Yemeksepeti delivers it to the user on your behalf.<br/>
                    You can join our family now and become one of our business partners with great advantages.
                </p>
            </article>
            <article className="col-12" style={{textAlign:"right"}}>
                <a href="#">
                <Button style={{background:"#FA0050" ,border:"1px solid", padding:"10px 40px"}}>Let's get started</Button>
                </a>
            </article>
        </Row>
    </Container>);
}

export default PartnerTextContent;