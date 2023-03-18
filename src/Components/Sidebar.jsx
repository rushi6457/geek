import React, { useState } from 'react';
import styles from "../Styles/Search.module.css";

const Sidebar = ({setPrice,setColor,setGender,setType}) => {

    
    return (
        <div className={styles.sidebar}>
            <div className={styles.indiBox}>
                <p>Colors</p>
                <input onChange={(e)=>setColor(e.target.value)} className={styles.input}  type="checkbox" value='red' name='red'   />
                <label>Red</label>
                <br />
                <input onChange={(e)=>setColor(e.target.value)} className={styles.input}  type="checkbox" value='blue'   />
                <label >Blue</label>
                <br />
                <input onChange={(e)=>setColor(e.target.value)} className={styles.input}  type="checkbox" value='green'   />
                <label >Green</label>
             </div>
             <div className={styles.indiBox}>
                 <p>Gender</p>
                <input onChange={(e)=>setGender(e.target.value)} className={styles.input} type="checkbox" value='men' name='men'   />
                <label >Men</label>
                <br />
                <input onChange={(e)=>setGender(e.target.value)} className={styles.input} type="checkbox" value='women' name='women'   />
                <label >Women</label>
                <br />
             </div>
             <div className={styles.indiBox}>
                 <p>Price</p>
                <input onChange={(e)=>setPrice(e.target.value)} className={styles.input} type="checkbox" value='250' name='250'   />
                <label >Rs:0 - 250</label>
                <br />
                <input onChange={(e)=>setPrice(e.target.value)} className={styles.input} type="checkbox" value='450' name='450'   />
                <label >Rs: 251 - 450</label>
                <br />
                <input onChange={(e)=>setPrice(e.target.value)} className={styles.input} type="checkbox" value='451' name='451'   />
                <label >Greater than Rs: 450</label>
             </div>
               <div className={styles.indiBox}>
                 <p>Type</p>
                <input onChange={(e)=>setType(e.target.value)} className={styles.input} type="checkbox" value='polo' name='polo'   />
                <label >Polo</label>
                <br />
                <input onChange={(e)=>setType(e.target.value)} className={styles.input} type="checkbox" value='hoodie' name='hoodie'   />
                <label >Hoodie</label>
                <br />
                <input onChange={(e)=>setType(e.target.value)} className={styles.input} type="checkbox" value='basic' name='basic'   />
                <label >Basic</label>
             </div> 
        </div>
    );
}

export default Sidebar;
