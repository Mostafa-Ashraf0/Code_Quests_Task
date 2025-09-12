import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { AppContext } from "../context/ContextApi";
import { Link } from "react-router-dom";
export default function Login(){
    const {setUser,setPassword,email,pass,setLoged} = useContext(AppContext);
    const navigate = useNavigate();
    const users = JSON.parse(localStorage.getItem("user")) || [];    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const userFound = users.find(
        (user) => user.email === email.current.value && user.password === pass.current.value);
        if(userFound){
            setUser(email.current.value);
            setPassword(pass.current.value);
            navigate("/");
            setLoged(true);
        }else{
            alert("email not found")
        }
    }
    return(
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <div className="log-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter you Email" ref={email} required/>
                </div>
                <div className="log-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" ref={pass} required/>
                </div>
                <button type="submit">Log in</button>
                <Link to={"/"}><h3 style={{fontSize:"16px"}}>continue as a guest</h3></Link>
                <Link to={"/signup"}><h3 style={{fontSize:"16px"}}>Create Account</h3></Link>
            </form>
        </div>
    )
}