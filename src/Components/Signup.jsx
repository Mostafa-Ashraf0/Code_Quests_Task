import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AppContext } from "../context/ContextApi";
import { Link } from "react-router-dom";
export default function Signup(){
    const items = JSON.parse(localStorage.getItem("user")) || [];
    const {email,pass,setUser,setPassword} = useContext(AppContext);
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newItem = {
            email:email.current.value,
            password: pass.current.value
        }
        items.push(newItem);
        localStorage.setItem("user", JSON.stringify(items));
        setUser(email.current.value);
        setPassword(pass.current.value);
        navigate("/")
    }
    return(
        <div className="signup">
        <form className="signup-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="sign-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter you Email" ref={email} required/>
            </div>
            <div className="sign-group">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" ref={pass} required/>
            </div>
            <button type="submit">Sign Up</button>
            <Link to={"/login"}><h3 style={{fontSize:"16px"}}>already have an account</h3></Link>
        </form>
        </div>
    )
}