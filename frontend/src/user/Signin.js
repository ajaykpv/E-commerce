import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin,authenticate, isAuthenticated } from "../auth";
import Layout from "../core/Layout";

const Signin = () =>{
    
    const [values,setValues] = useState({
        email:'arun@gmail.com',
        password:'password23',
        error:'',
        loading:false,
        redirectToReferrer:false

    })
    const {email,password,loading,error,redirectToReferrer}=values
    const {user} = isAuthenticated();
    const handleChange = name =>event =>{
         setValues({...values,error:false,[name]:event.target.value})
    };
    
    const clickSubmit = (event) =>{
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data =>{
            if(data.err){
                setValues({...values,error:data.err,loading:false})

            }
            else{
                authenticate(data,()=>{
                    setValues({
                    ...values,
                    redirectToReferrer:true
                })
                })
                
            }
        })
    }
    const signInForm = ()=>(
        <form>
            <div className="form-group">
                <label className="text-muted">email</label>
                <input type="email" onChange={handleChange('email')}className="form-control" value={email}/>

            </div>
            <div className="form-group">
                <label className="text-muted">password</label>
                <input type="password" onChange={handleChange('password')} value={password} className="form-control"/>

            </div>
            <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
        </form>
    );
    const showError = () =>(
        <div className="alert alert-danger" style={{'display':error?'':'none'}}>
            {error}
        </div>
    )
    const showloading = () =>(
        <div className="alert alert-info" style={{'display':loading?'':'none'}}>
           Loading...
        </div>
    )
    const redirectUser = ()=>{
        if(redirectToReferrer){
            if(user && user.role===1){
                 return <Redirect to='/admin/dashboard'/>
            }
           else{
               return <Redirect to ="/user/dashboard"/>
           }
           
        }
        if( isAuthenticated()){
               return <Redirect to="/"/>
           }
    }
    return (
    <Layout title="SignUp" description="signup" className="container col-md-8 offset-md-2">
        {showloading()}
        {showError()}
        {signInForm()}
        {redirectUser()}
        {/* {JSON.stringify(values)} */}
        </Layout>
    );
}

export default Signin;