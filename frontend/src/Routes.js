import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Signin from "./user/Signin";
import Home from "./core/Home";
// import Menu from "./core/Menu";
import Signup from "./user/Signup";
import PrivateRoute from "./auth/privateRoute";
import Dashboard from "./user/userDashboard";
import AdminRoute from "./auth/adminRoutes";
import AdminDashboard from "./user/adminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";

const Routes = ()=>{
    return (
         
            <BrowserRouter>
                {/* <Menu/> */}
                <Switch>
                        <Route path="/" exact component={Home} />   
                        <Route path="/signin" exact  component={Signin} />   
                        <Route path="/signup" exact component={Signup} />   
                        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                        <AdminRoute path="/create/products" exact component={AddProduct}/>
                        <AdminRoute path="/create/category" exact component={AddCategory}/>
                </Switch> 
            </BrowserRouter>
        
    )
}
export default Routes;