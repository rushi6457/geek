import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions';
import { useEffect } from 'react';
import { useState } from 'react';
import { store } from '../redux/store';
import styles from "../Styles/Product.module.css";
import Search from './Search';

const Products = ({setSearch,store}) => {
    let arr = []
    const items = JSON.parse(localStorage.getItem("cartItem")) || [];
    const handleAdd = (el) =>{
        arr.push(el) 
     console.log(arr);
     localStorage.setItem("cartItem",JSON.stringify(arr));
    }
    return (
        <>
        <Search setSearch={setSearch} />
        <div className={styles.products}>
           {
            store?.map((el)=>{
                return (
                    <div className={styles.grid}>
                        <img src={el.imageURL} alt="" />
                        <p style={{fontSize:'1.4rem'}}>{el.name}</p>
                        <div className={styles.flex}>
                            <p>{`RS: ${el.price}`}</p>
                            <button onClick={()=>handleAdd(el)}>Add to cart</button>
                        </div>
                    </div>
                )
            })
           }  
        </div>
        </>
    );
}

export default Products;
