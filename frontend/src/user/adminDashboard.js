import React from "react";
import Layout from "../core/Layout";
 import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
const AdminDashboard = () =>{
    const {user:{_id,name,email,role}} = isAuthenticated()
    const adminLinks = ()=>{
        return (
            <div className="card mb-5">
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/create/category" className="nav-link">Create Category</Link></li>
                    <li className="list-group-item"><Link to="/create/products" className="nav-link">Create products</Link></li>
                    <li className="list-group-item"><Link to="/profile/update" className="nav-link">Update profile</Link></li>
                </ul>

            </div>
        )
    }
    const adminInfo =() =>(
        <div className="card mb-5">
                <h3 className="card-header"> User information</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role===1?'Admin':'Registered user'}</li>
                </ul>

            </div>
    )
    return (
        <Layout title="AdminDashboard" description={ `Hello ${name}` }className="container-fluid">
            <div className="row">
                <div className="col-3">
                    {adminLinks()}
                </div>
                <div className="col-9">
                    {adminInfo()}
                </div>
            </div>
            
        </Layout>
    )
}
export default AdminDashboard;