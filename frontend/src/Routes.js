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
import Cart from "./core/Cart";
import Orders from './admin/Orders'
import Profile from './user/Profile'
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";

const Routes = ()=>{
    return (
         
            <BrowserRouter>
                {/* <Menu/> */}
                <Switch>
                        <Route path="/" exact component={Home} />   
                        <Route path="/signin" exact  component={Signin} />   
                        <Route path="/signup" exact component={Signup} />   
                        <Route path="/shop" exact component={Shop} />   
                        <Route path="/cart" exact component={Cart} />   
                        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                        <PrivateRoute path="/profile/:userId" exact component={Profile} />
                        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                        <AdminRoute path="/create/products" exact component={AddProduct}/>
                        <AdminRoute path="/create/category" exact component={AddCategory}/>
                        <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct}/>
                        <AdminRoute path="/admin/products" exact component={ManageProducts}/>
                        <AdminRoute path="/admin/orders" exact component={Orders}/>
                        <Route path="/product/:productId" exact component={Product} />   

                </Switch> 
            </BrowserRouter>
        
    )
}
export default Routes;