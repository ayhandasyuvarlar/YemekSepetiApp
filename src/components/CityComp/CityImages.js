import { Container, Row } from "reactstrap";

const cityArray = [
    {
        img: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-ankara.jpg?width=740",
       name: "Ankara"
    },
    {
        img: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-antalya.jpg?width=720",
       name: "Antalya"
    },
    {
        img: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-bursa.jpg?width=720",
       name: "Bursa"

    },
    {
        img: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-istanbul.jpg?width=723",
       name: "İstanbul"
    },
    {
        img: "https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-izmir.jpg?width=720",
       name: "İzmir"
    },
]

const CityImages = () => {
    return (<Container>
        <Row>   
            {
                cityArray.map((city) => (
                    <div className="col-2" style={{ width: "20%", height: "15rem"}}>
                        <div className="img-Box" style={{ width: "100%", height:"265px" ,borderRadius:"10px" ,overflow:"hidden"}}>
                            <img width="100%" height="100%" style={{objectFit:"cover"}}src={city.img} alt="" />
                        </div>
                        <div className="col-6">
                            <h3 style={{marginTop:"-40px" , paddingLeft:"10px" ,color:"white", fontFamily: '"Open Sans", sans-serif' ,fontWeight:"bold"}}>
                                {city.name}
                            </h3>
                        </div>
                    </div>
                ))
            }
        </Row>
    </Container>

    );
}

export default CityImages;