import { ref as dataRef, get } from 'firebase/database';
import {db} from 'libs/firebase';
import React, { useEffect, useState } from 'react';

function useGetProducts(){
    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        async function getProductData(){
            const productRef = dataRef(db, 'products/')
            const productSnapShot = await get(productRef);
            setProductData(Object.values(productSnapShot.val()))
            }
            getProductData()
        },[])
        
        return productData
}

export {useGetProducts}