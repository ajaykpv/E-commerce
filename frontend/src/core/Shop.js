import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getCategories,getFilteredProducts } from "./apiCore";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { prices } from "./fixedPrices";
import RadioBox from "./RadioBox";
const Shop = () =>{
    const [category,setCategory]= useState([])
    const [error,setError]= useState(false)
    const [limit,setLimit]= useState(6)
    const [skip,setSkip]= useState(0)
    const [size,setSize]= useState(0)
    const [filteredResults,setFilteredResults] = useState([])
    const [myfilters,setMyfilters] = useState({
        filters:{category:[],price:[]}
    })

     const init = () => {
        getCategories().then(data => {
            if (data.error) {
               setError(data.error);
            } else {
                setCategory(data)
            }
        });
    };
    const handleFilteres = (filters,filterBy) =>{
        const newFilters = {...myfilters}
        newFilters.filters[filterBy]=filters
        if(filterBy === "price"){
            let priceValues = handlePrice(filters)
            newFilters.filters[filterBy]=priceValues

        }
        loadFilteredResults(myfilters.filters)
        setMyfilters(newFilters)
    }
    const loadFilteredResults = (newFilters) =>{
        getFilteredProducts(skip,limit,newFilters).then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setFilteredResults(data.data);
                setSize(data.size)
                setSkip(0)
            }
        })
    }
    const loadmore = () =>{
        let toSkip = skip +limit;
        getFilteredProducts(toSkip,limit,myfilters.filters).then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setFilteredResults([...filteredResults,...data.data]);
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }
    const loadMoreButton = ()=>{
        return (
            size > 0 && size >= limit && (
                <button className="btn btn-warning mb-5" onClick={loadmore}>Load More</button>
            )
        )
    }
    const handlePrice = (value)=>{
        const data = prices;
        let array =[]
        for (let key in data){
            if(data[key]._id === parseInt(value)){
                array = data[key].array
            }
        }
        return array
    }
    useEffect(()=>{
        init();
        loadFilteredResults(skip,limit,myfilters.filters)

    },[])
    return(
        <Layout title="Shop page" description="" className="container-fluid">
               <div className="row">
                   
                   <div className="col-4">
                       <h4>Filter by Category</h4>
                        <ul><Checkbox categories={category} handleFilters = {filters=>(handleFilteres(filters,"category"))}/></ul>
                        <h4>Filter by Category</h4>
                        <div>
                            <RadioBox  prices ={prices} handleFilters = {filters=>(handleFilteres(filters,"price"))} />
                        </div>
                   </div>
                   <div className="col-8">
                        <h2 className="mb-4">Products</h2>
                        <div className="row">
                            {filteredResults.map((product,i)=>(
                                 <div key={i}className="col-4 mb-3">
                                    <Card product={product}/>
                                </div>
                            ))}
                        </div>
                        <hr/>
                        {loadMoreButton()}
                   </div>

               </div>
   </Layout>
    )
}
export default Shop