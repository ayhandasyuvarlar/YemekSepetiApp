import { Container, Card, Row, CardBody, CardText } from "reactstrap";

const TextContent = () => {
    return (<Container>
        <Row>
            <article className="col-12">
                <Card style={{border:"none"}}>
                    <CardBody>
                        <CardText style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" }}>
                            <p>
                                With more than 50 thousand restaurant business partners in Turkey's 81 cities and TRNC, we are the first brand that comes to mind in online food ordering in Turkey! You can easily order your favorite foods around you, from the most famous restaurant chains or from your local favorites.    </p>

                            <p>Choose the restaurant, add the meal to your basket, pay online or at the door as you wish. The rest is easy, your order is at your door quickly!</p>

                            <p>Besides, if you need instant grocery shopping, Yemeksepeti Market is at your service! Thousands of market products can be delivered at any time, within minutes</p>

                            <p> Yemeksepeti Mahalle is also here! All the local shops you know and trust around your neighbourhood, such as supermarkets, delicatessens, greengrocers, butchers, fishmongers and petshops, are at your door with various campaigns!</p>
                        </CardText>
                        <CardText>
                            <h5 style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "bold" }}>
                                What can you do with Yemeksepeti?
                            </h5>
                            <ul style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" }}>
                                <li><span style={{ color: "#FA0050" }}>✓ </span> Dozens of cuisines and categories, thousands of products for food ordering or grocery shopping!</li>
                                <li><span style={{ color: "#FA0050" }}>✓ </span> Thousands of discounts on your favorite foods and groceries every day!</li>
                                <li><span style={{ color: "#FA0050" }}>✓ </span>Online or at the door, option to pay as you wish!</li>
                                <li><span style={{ color: "#FA0050" }}>✓ </span>24/7 Help Center team, always ready to support you for your order!</li>
                            </ul>
                            <p  style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" }}>All you have to do is think about your needs and take a look at the options around you!</p>
                            <h6 style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "bold" }}>Yemeksepeti is with you, whatever you have in mind is at your door!</h6>
                        </CardText>
                    </CardBody>
                </Card>
            </article>
        </Row>
    </Container>);
}

export default TextContent;