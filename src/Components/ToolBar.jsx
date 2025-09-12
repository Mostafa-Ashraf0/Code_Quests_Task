import { useContext } from "react";
import Button from "./button";
import { AppContext } from "../context/ContextApi";
import "./ToolBar.css"

export default function ToolBar(){
    const {increment,decrement,setStart,setEnd,setWithRange,photos,startPoint,endPoint} = useContext(AppContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setStart(Number(startPoint.current.value)-1);
        setEnd(Number(endPoint.current.value));
        setWithRange(true);
    }
    const handleReset = ()=>{
        setStart(0);
        setEnd(10);
    }

    const handleFullView = ()=>{
        setStart(0);
        setEnd(photos.length);
    }
    return(
        <div className="toolbar">     
            <div className="range">
                <form action="submit" onSubmit={handleSubmit}>
                    <label htmlFor="start">from</label>
                    <input type="number" className="startIndex" ref={startPoint} required/>
                    <label htmlFor="end">to</label>
                    <input type="number" className="endIndex" ref={endPoint} required/>
                    <button type="submit">View</button>
                </form>
            </div>
            <div className="res-full">
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleFullView}>Full View</button>
            </div>
            <div className="inc-dec-btns">
                <Button onClick={decrement}>Prev</Button>
                <Button onClick={increment}>Next</Button>
            </div>
        </div>
    )
}