import React from "react";
import { useEffect,useState } from "react";

const Checkbox =({categories,handleFilters})=>{
    const [checked,setChecked] = useState([])

    const handToggle = c=>()=>{
        const currentCategoryId = checked.indexOf(c)
        const newCheckedCategoryId = [...checked]
        if(currentCategoryId === -1){
            newCheckedCategoryId.push(c)

        }
        else{
            newCheckedCategoryId.splice(currentCategoryId,1)
        }
        // console.log(newCheckedCategoryId);
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }
    return categories.map((item,index)=>(
        <li className="list-unstyled" kry={index}>
            <input onChange={handToggle(item._id)} value={checked.indexOf(item._id===-1 )} type="checkbox" className="form-check-input"/>
            <label className="form-check-label">{item.name}</label>
        </li>
    ))
}
export default Checkbox;