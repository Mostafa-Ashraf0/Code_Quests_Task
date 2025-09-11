import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext} from "react";
import { AppContext } from "../context/ContextApi";
import { Link } from "react-router-dom";
export default function Header({title}){
    const {user} = useContext(AppContext)
    return(
        <header>
            <h1>{title}</h1>
            <div className="right">
                <Link to={"/login"}><button>Log in</button></Link>
                <div className="user-icon"><FontAwesomeIcon icon={faUser} />Hello, {user ? user : "Guest"}</div>
            </div>
        </header>
    )
}

