import "./Sidebar.css"
import { Link } from "react-router-dom"
import { useContext} from "react";
import { AppContext } from "../context/ContextApi";
export default function Sidebar(){
    const {loged, setLoged,setUser} = useContext(AppContext);
    const handleClick = ()=>{
        setLoged(false);
        setUser(null);
    }
    return(
        <div className="sidebar">
                <div className="logo">Code Quests</div>
                <ul>
                    <li><Link to={"/"}>Dashboard</Link></li>
                    <li style={{display:loged? "none" :"block"}}><Link to={"/login"}>Log in</Link></li>
                    <li style={{display:loged? "block" :"none"}} onClick={handleClick}><Link to={"/login"}>Log out</Link></li>
                </ul>
        </div>
    )
}