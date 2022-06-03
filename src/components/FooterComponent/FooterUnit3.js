import { Card, CardBody, CardHeader, Container, Row } from "reactstrap";
import FooterUnit4 from "./FooterUnit4";

const FooterUnit3 = () => {
    const city = [
        {
            id: 1,
            title: "İstanbul",
            eat: ["Burger", "Pizza", "Kebab & Turkish Cuisine", "Döner", "Toast & Sandwiches", "Chicken", "Pide & Lahmacun", "Dessert"]
        },
        {
            id: 2,
            title: "Ankara",
            eat: ["Döner","Burger","Kebab & Turkish Cuisine","Pizza","Çiğ Köfte","Chicken","Pide & Lahmacun","Toast & Sandwiches"]
        },
        {
            id: 3,
            title: "Izmir",
            eat: ["Döner","Pizza","Pide & Lahmacun","Burger","Kebab & Turkish Cuisine","Toast & Sandwiches","Çiğ Köfte","Chicken"]
        },
        {
            id: 4,
            title: "Antalya",
            eat: ["Burger","Döner","Kebab & Turkish Cuisine","Pizza","Toast & Sandwiches","Chicken","Çiğ Köfte","Pide & Lahmacun"
            ]
        },


    ]
    return (
        <Container style={{ paddingTop: "30px", borderBottom: "1px solid gainsboro", marginBottom: "10px" }}>
            <Row>
                <Card style={{ border: "none" }}>
                    <CardHeader style={{ border: "none", background: "none" }}>
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