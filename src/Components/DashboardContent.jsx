import "./DashboardContent.css"
import Table from "./Table"
import Header from "./Header"
import CreateNewItem from "./CreateNewItem"
export default function DashboardContent(){
    return(
        <div className="dash-content">
            <Header title = {"Dashboard"}/>
            <CreateNewItem/>
            <div className="innerContent">
                <Table/>
            </div>
        </div>
    )
}