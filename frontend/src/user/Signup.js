import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth";
import Layout from "../core/Layout";

const Signup = () =>{
    
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success:false

    })
    const {name,email,password,success,error}=values
    const handleChange = name =>event =>{
         setValues({...values,error:false,[name]:event.target.value})
    };
    
    const clickSubmit = (event) =>{
        event.preventDefault()
        setValues({...values,error:false,success:false})
        signup({name,email,password})
        .then(data =>{
            console.log(data);
            if(data.errors){
                setValues({...values,error:data.errors,success:false})

            }
            else{
                setValues({
                    ...values,
                    name:'',
                    email:'',
                    passowrd:"",
                    error:'',
                    success:true
                })
            }
        })
    }
    const signUpForm = ()=>(
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handleChange('name')} value={name} className="form-control"/>

            </div>
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
    const showSuccess = () =>(
        <div className="alert alert-info" style={{'display':success?'':'none'}}>
            New account is created please <Link to="/signin"> signin</Link>
        </div>
    )
    return (
    <Layout title="SignUp" description="signup" className="container col-md-8 offset-md-2">
        {showSuccess()}
        {showError()}
        {signUpForm()}
        {/* {JSON.stringify(values)} */}
        </Layout>
    );
}

export default Signup;