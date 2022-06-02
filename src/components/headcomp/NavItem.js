import './nav.css';
import { NavLink ,NavItem} from "reactstrap";
import { FaUser , FaOpencart} from "react-icons/fa";

function NavSection() {
    return (
        <div style={stylecss.ItemContent}>
            <NavItem>
                <NavLink style={{color:"black" , fontWeight:"bold" ,fontFamily:"'Baloo Da 2', cursive", fontSize:"large"}} href="#">
                    EN
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={{color:"black" , fontWeight:"bold",fontFamily:"'Baloo Da 2', cursive",fontSize:"large"}} href="#">
                  <FaUser style={{color:"white", background:"#FA0050" ,padding:"5px",fontSize:"x-large",borderRadius:"50%"}}/>  LOGIN
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">
                    <FaOpencart style={{color:"#FA0050", fontSize:"large"}}/>
                </NavLink>
            </NavItem>

        </div>


    )
}
export default NavSection;

const stylecss = {
    ItemContent :{
        display:"flex",
        justifyContent:"right",
        alignItems:"center",
        width:"100%",


    }
}