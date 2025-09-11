import { useContext } from "react";
import "./Table.css";
import ToolBar from "./ToolBar"
import Button from "./button";
import { AppContext } from "../context/ContextApi";
export default function Table(){
    const {photos, start,
          setStart, end,
          setEnd,loading,
          searchPoint,
          error} = useContext(AppContext);
    
    const handleClick = ()=>{
        if(Number(searchPoint.current.value) > photos.length){
            alert("not found");
        }else if(Number(searchPoint.current.value)){
            setStart(Number(searchPoint.current.value)-1);
            setEnd(Number(searchPoint.current.value));
        }else{
            setStart(0);
            setEnd(10);
        }
    }
    return(
        <>
        <div className="search">
            <input type="text" placeholder="search by id" ref={searchPoint} />
            <button onClick={handleClick}>search</button>
        </div>
        <div className="table-main">
            <h1>{error && error}</h1>
            <h1>{loading && "loading"}</h1>
            <ToolBar/>
            <div className="table">
                <table>
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>albumId</th>
                        <th>Title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                    </tr>
               </thead>
               <tbody>
                    {photos.slice(start,end).map((photo,index)=>(
                        <tr key={index}>
                            <td>{photo.id}</td>
                            <td>{photo.albumId}</td>
                            <td>{photo.title}</td>
                            <td>{photo.url}</td>
                            <td>{photo.thumbnailUrl}</td>
                        </tr>
                    ))}
               </tbody>
            </table>
            </div>
        </div>
        </>
    )
}