import Sidebar from "./Sidebar"
import DashboardContent from "./DashboardContent"
import './Dashboard.css'
export default function Dashboard(){
    return(
        <div className="dashboard">
            <Sidebar/>
            <DashboardContent/>
        </div>
    )
}