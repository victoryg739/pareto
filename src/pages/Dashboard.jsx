import StockTable from "../components/StockTable";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom"

function Dashboard(){
    return(
        <>
            <button onClick={signOut}><Link to="/">Sign Out</Link></button>
            <StockTable/>
        </>
    );
}
export default Dashboard;