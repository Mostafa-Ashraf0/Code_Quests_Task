import "./Sidebar.css"
import { Link } from "react-router-dom"
export default function Sidebar(){
    return(
        <div className="sidebar">
                <div className="logo">Code Quests</div>
                <ul>
                    <li><Link to={"/"}>Dashboard</Link></li>
                    <li><Link to={"/login"}>Log in</Link></li>
                </ul>
        </div>
    )
}