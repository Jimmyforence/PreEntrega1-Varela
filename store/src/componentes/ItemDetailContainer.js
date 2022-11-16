import { useEffect, useState } from "react";
import { data } from "./data";
import React from 'react'
import '../componentes/ItemDetailContainer.css'

export const ItemDetailContainer = () => {
  const [product, setProdct] = useState();
    const GetData = new Promise((resolve, reject) => {
         
    
setTimeout(() => {
    resolve(data);
}, 2000);
})

    useEffect(() => {
        GetData.then((response) =>{
            setProdct(response[0]); //este es el indice del producto. 

        })
    }, []);
    return <div> 
        <h1>{product?.name}</h1></div>
};

export default ItemDetailContainer
