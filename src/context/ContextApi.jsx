import { createContext, useState, useEffect, useRef } from "react";
export const AppContext = createContext();

export const AppProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const [withRange, setWithRange] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formDisplay, setFormDisplay] = useState("none");
    const [btnDisplay, setBtnDisplay] = useState("block");
    const startPoint = useRef();
    const endPoint = useRef();
    const searchPoint = useRef();
    const albumid = useRef();
    const title = useRef();
    const url = useRef();
    const albumUrl = useRef();
    const email = useRef();
    const pass = useRef();
    const increment = ()=>{
        if(end < photos.length){
            if(withRange){
                setStart(end);
                setEnd(end + 10);
            }else{
                setStart(prev => prev + 10);
                setEnd(prev => prev + 10);
            }
        }
    };
    const decrement = ()=>{
        if(start > 0){
            if(withRange){
                setStart(start - 10);
                setEnd(start);
            }else{
                setStart(prev => prev - 10);
                setEnd(prev => prev - 10);
            }
        }
    };
    useEffect(()=>{
    const fetchData = async ()=>{
        try {
        setLoading(true);   
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) throw new Error("Failed to fetch photos");
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    },[]);
    
    return(
        <AppContext.Provider value={{
        user,
        setUser,
        password,
        setPassword,
        photos,
        setPhotos,
        start,
        setStart,
        end,
        setEnd,
        increment,
        decrement,
        startPoint,
        endPoint,
        searchPoint,
        withRange,
        setWithRange,
        loading,
        error,
        formDisplay,
        setFormDisplay,
        btnDisplay,
        setBtnDisplay,
        albumid,
        title,
        url,
        albumUrl,
        email,
        pass
        }}> 
            {children}
        </AppContext.Provider>
    )
}