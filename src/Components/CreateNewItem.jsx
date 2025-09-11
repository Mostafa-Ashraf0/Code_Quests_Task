import "./CreateNewItem.css";
import { useContext} from "react";
import { AppContext } from "../context/ContextApi";

export default function CreateNewItem(){
    const {formDisplay, setFormDisplay, btnDisplay, setBtnDisplay, albumid, title, url, albumUrl,photos,setPhotos}
     = useContext(AppContext);
    const handleClick = ()=>{
        setFormDisplay("flex");
        setBtnDisplay("none");
    }
    const handleCancelClick = ()=>{
        setFormDisplay("none");
        setBtnDisplay("block");
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newItem = {
            albumId:albumid.current.value,
            id: (photos.length) +1,
            title: title.current.value,
            url: url.current.value,
            thumbnailUrl: albumUrl.current.value
        }
        setPhotos([...photos, newItem])
        console.log(photos);
        albumid.current.value = "";
        title.current.value = "";
        url.current.value = "";
        albumUrl.current.value = "";
    }

    return(
        <div className="creation-form">
            <button className="create-btn" onClick={handleClick} style={{display:btnDisplay}}> + Create Item</button>
            <form action="" className="create-new-item" style={{display:formDisplay}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="albumid">AlbumID</label>
                    <input type="text" placeholder="ex 400" ref={albumid}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="first" ref={title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input type="text" placeholder="https:/fsda" ref={url}/>
                </div>
                <div className="form-group">
                    <label htmlFor="albumurl">AlbumURL</label>
                    <input type="text" placeholder="https:/sdfa" ref={albumUrl}/>
                </div>
                <button type="submit" style={{marginRight:"10px"}}>Add</button>
                <button onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )
}