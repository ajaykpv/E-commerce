import React from "react";
import Layout from "../core/Layout";
 import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
const Dashboard = () =>{
    const {user:{_id,name,email,role}} = isAuthenticated()
    const userLinks = ()=>{
        return (
            <div className="card mb-5">
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/cart" className="nav-link">My Cart</Link></li>
                    <li className="list-group-item"><Link to="/profile/update" className="nav-link">Update profile</Link></li>
                </ul>

            </div>
        )
    }
    const userInfo =() =>(
        <div className="card mb-5">
                <h3 className="card-header"> User information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role===1?'Admin':'Registered user'}</li>
                </ul>

            </div>
    )
    const PurchaseHistory =()=>(
        <div className=" card mb-5">
                <h3 className="card-header">Purchase history</h3>
                <ul className="list-group">
                    <li className="list-group-item">history</li>
                   
                </ul>


            </div>
    )
    return (
        <Layout title="DASHBOARD" description={ `Hello ${name}` }className="container">
            <div className="row">
                <div className="col-3">
                    {userLinks()}
                </div>
                <div className="col-9">
                    {userInfo()}
                    {PurchaseHistory()}
                </div>
            </div>
            
        </Layout>
    )
}
export default Dashboard;