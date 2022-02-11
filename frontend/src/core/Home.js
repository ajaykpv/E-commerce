import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
const Home = () =>{
   const [productsBySell,setproductsBySell] =useState([])
   const [productsByArrival,setproductsByArrival] =useState([])
   const [error,setError] =useState([])

   const loadProductBySell = () =>{
      getProducts('sold').then(data=>{
         if (data.error) {
                setError(data.error);
            } else {
                setproductsBySell(data)
            }
      })
   }
   const loadProductByArrival = () =>{
      getProducts('createdAt').then(data=>{
         if (data.error) {
                setError(data.error);
            } else {
                setproductsByArrival(data)
            }
      })
   }
   useEffect(()=>{
      loadProductByArrival();
      loadProductBySell()
   },[])
   return <Layout title="Home page" description="Node react" className="container-fluid">
               <Search/>
               <h2 className="mb-4"> Best selling</h2>
               <div className="row">
                        {productsBySell.map((product,index)=>(
                       <div key={index}className="col-4 mb-3">
                           <Card  product={product}/>
                           </div>
                     ))}
               </div>
               
               <br></br>
               <h2 className="mb-4"> New Arrival</h2>
               <div className="row">
                  
               {productsByArrival.map((product,index)=>(
                  <div key={index}className="col-4 mb-3">
                  <Card  product={product}/>
                  </div>
               ))}
               
               </div>
   </Layout>
}
export default Home;