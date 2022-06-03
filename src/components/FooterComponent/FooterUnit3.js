import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";
import FooterUnit4 from "./FooterUnit4";

const FooterUnit3 = () => {
    const city = [
        {
            title: "İstanbul",
            eat: ["Burger", "Pizza", "Kebab & Turkish Cuisine", "Döner", "Toast & Sandwiches", "Chicken", "Pide & Lahmacun", "Dessert"]
        },
        {
            title: "İstanbul",
            eat: ["Burger", "Pizza", "Kebab & Turkish Cuisine", "Döner", "Toast & Sandwiches", "Chicken", "Pide & Lahmacun", "Dessert"]
        },
        {
            title: "İstanbul",
            eat: ["Burger", "Pizza", "Kebab & Turkish Cuisine", "Döner", "Toast & Sandwiches", "Chicken", "Pide & Lahmacun", "Dessert"]
        },
        {
            title: "İstanbul",
            eat: ["Burger", "Pizza", "Kebab & Turkish Cuisine", "Döner", "Toast & Sandwiches", "Chicken", "Pide & Lahmacun", "Dessert"]
        },
        

    ]
    return (
        <Container style={{paddingTop:"30px"}}>
            <Row>
                <Card style={{border:"none"}}>
                    <CardHeader style={{border:"none",background:"none"}}>
                        <h5>Cuisines</h5>
                    </CardHeader>
                    <CardBody>
                    <FooterUnit4 cityArray={city}></FooterUnit4>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    );
}

export default FooterUnit3;