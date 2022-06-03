import { CardText } from "reactstrap";

const CityData = ({ cityesData }) => {
    return (
        <div style={{display:"flex"}}>
            {
                cityesData.map((cityesData) => (
                    <div style={{width:"27rem"}}>
                        {cityesData.cityes.map((cityes) => (
                                 <CardText style={{margin:"0"}}>
                                     <a href="#" style={{textDecoration:"none" ,color:"black"}}>
                                     <span style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" ,margin:"0" }}>{cityes}</span>
                                     </a>
                                 </CardText>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default CityData;