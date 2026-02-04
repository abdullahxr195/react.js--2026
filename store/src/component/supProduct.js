import { useState } from "react";
import{ useLocation } from "react-router-dom";



export default function SupProduct() {

const location = useLocation()

const[supproductFrommain, setSupproductFrommain] = useState(location.state);
console.log(location.state);


    return (

        <div id='supproduct-page'>
            
            <h2>this is subproduct page</h2>
            <h3>{supproductFrommain.name}</h3>
            <img width={100} src={supproductFrommain.image}/>
            <p>{supproductFrommain.price}</p>
            <p>{supproductFrommain.id}</p>


        </div>    
        
    )



}





