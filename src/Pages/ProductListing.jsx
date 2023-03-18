import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions';
import Sidebar from '../Components/Sidebar';
import styles from "../Styles/ProductListing.module.css";
import Products from '../Components/Products';

const ProductListing = () => {
   
    const [search,setSearch] = useState('')
    let store=  useSelector(store=>store.products.products)
    const dispatch = useDispatch()
    const [color,setColor] = useState('')
    const [type,setType] = useState('')
    const [price,setPrice] = useState('')
    const [gender,setGender] = useState('')
    useEffect(()=>{
        dispatch(getProducts())
    },[])
   
   
    if(color === "red"){
        let a = store.filter((el)=>el.color === "Red")
       store = a 
    }
    else if(color === "green"){
        let a = store.filter((el)=>el.color === "Green")
       store = a 
    }
    else if(color === "blue"){
        let a = store.filter((el)=>el.color === "Blue")
       store = a 
    }

    if(type === "polo"){
        let a = store.filter((el)=>el.type === "Polo")
       store = a 
    }
    else if(type === "basic"){
        let a = store.filter((el)=>el.type === "Basic")
       store = a 
    }
    else if(type === "hoodie"){
        let a = store.filter((el)=>el.type === "Hoodie")
       store = a 
    }
    if(price === "250"){
        let a = store.filter((el)=>el.price <= 250)
       store = a 
    }
    else if(price === "450"){
        let a = store.filter((el)=>el.price <=450)
       store = a 
    }
    else if(price === "451"){
        let a = store.filter((el)=>el.price >450)
       store = a 
    }

    if(gender === "men"){
        let a = store.filter((el)=>el.gender ==="Men")
       store = a 
    }
    else if(gender === "women"){
        let a = store.filter((el)=>el.gender === "Women")
       store = a 
    }
    //  else if(color === "blue" && color === "green"){
    //     let a = store.filter((el)=>el.color === "Blue" && el.color === "Green")
    //    store = a 
    // }
    // else if(color === "blue" && color === "red"){
    //     let a = store.filter((el)=>el.color === "Blue" && el.color === "Red")
    //    store = a 
    // }
  
    if(search !== ''){
    let a = store.filter((el)=>el.type === search)
       store = a 
    }

    return (
        <div className={styles.products}>
           <div>
            <Sidebar setColor={setColor} setPrice={setPrice} setGender={setGender} setType={setType} /> 
           </div> 
           <div>
            <Products setSearch={setSearch} store={store}  /> 
           </div> 
        </div>
    );
}

export default ProductListing;
