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
import Shop from "./core/Shop";
import Product from "./core/Product";

const Routes = ()=>{
    return (
         
            <BrowserRouter>
                {/* <Menu/> */}
                <Switch>
                        <Route path="/" exact component={Home} />   
                        <Route path="/signin" exact  component={Signin} />   
                        <Route path="/signup" exact component={Signup} />   
                        <Route path="/shop" exact component={Shop} />   
                        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                        <AdminRoute path="/create/products" exact component={AddProduct}/>
                        <AdminRoute path="/create/category" exact component={AddCategory}/>
                        <Route path="/product/:productId" exact component={Product} />   

                </Switch> 
            </BrowserRouter>
        
    )
}
export default Routes;