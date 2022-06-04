
import "../css/sidebar.css"
import { Link } from "react-router-dom";

export const Sidebar = () => {


    return (
        <div className="sidebar">
            <div className="logo">haus</div>
            <Link to="/new_arrival"><h3>New Arrivals</h3></Link>
             <Link to="/farniture"><h3>Furniture</h3></Link>
             <Link to="/lighting"><h3>Lighting</h3></Link>
            <h3>Accessories</h3>
            <h3>Brands</h3>
            <br />
            <div className="low">
            <h3>Contact</h3>
            <h3>About</h3>
            <h3>Delivery</h3>
            <h3>Trade Sales</h3>
            <h3>News</h3>
            </div>
        </div>
    )
}