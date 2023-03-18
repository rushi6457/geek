import React, { useEffect, useState } from 'react';
import styles from "../Styles/Search.module.css";
import {AiOutlineSearch} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions';
import {MdFilterAlt} from "react-icons/md"

const Search = ({setSearch}) => {
    const [show,setShow] = useState(false)
    return (
         <div className={styles.search}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} className={styles.input} placeholder='Search By Type' />
            <button><AiOutlineSearch fontSize={'25px'}/></button>
            <button onClick={()=>setShow(!show)} className={show ? styles.show : styles.hide}><MdFilterAlt fontSize={'25px'}/></button>
        </div>
    );
}

export default Search;
