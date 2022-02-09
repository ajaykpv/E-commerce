import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./card";
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
               <h2 className="mb-4"> Best selling</h2>
               <div className="row">
                        {productsBySell.map((product,index)=>(
                        <Card key={index} product={product}/>
                     ))}
               </div>
               
               <br></br>
               <h2 className="mb-4"> New Arrival</h2>
               <div className="row">
               {productsByArrival.map((product,index)=>(
                  <Card key={index} product={product}/>
               ))}
               </div>
   </Layout>
}
export default Home;