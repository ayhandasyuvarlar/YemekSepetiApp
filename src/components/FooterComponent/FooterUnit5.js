import React from 'react'
import { Card, CardBody, CardHeader, Container, Row } from 'reactstrap'
import CityData from './CityData'
const FooterUnit5 = () =>{
    const cityesData = [
        {
            cityes:["Adana", "Adiyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne"," Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane"]
        },
        {
            cityes:["Hakkari", "Hatay", "Isparta", "Mersin", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin"," Muğla", "Muş", "Nevşehir", "Niğde", "Ordu"," Rize", "Sakarya","Samsun", "Siirt", "Sinop"]
        },
        {
            cityes:["Sivas","Tekirdağ","Tokat","Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozgat","Zonguldak","Aksaray","Bayburt","Karaman","Kırıkkale","Batman","Şırnak","Bartın","Ardahan","Iğdır","Yalova","Karabük","Kilis","Osmaniye","Düzce","KKTC","All Cities & Areas"]
        }
    ]
    
  return (
    <Container style={{paddingTop:"15px"}}>
    <Row>
        <Card style={{border:"none"}}>
            <CardHeader style={{background:"none" ,border:"none" , fontFamily: '"Open Sans", sans-serif', }}>
                <h5>Other Cities</h5>
            </CardHeader>
            <CardBody>
            <CityData cityesData = {cityesData}></CityData>
            </CardBody>
        </Card>
    </Row>
</Container>
  );
}
export default FooterUnit5