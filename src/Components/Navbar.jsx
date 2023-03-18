import React from 'react';
import styles from "../Styles/Navbar.module.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {Link} from "react-router-dom"
const Navbar = () => {
    const data = JSON.parse(localStorage.getItem('cartItem'))
    return (
    <header className={styles.header}>
        <div className={styles.navbar}>
            <div>
                <p>TeeRex Store</p>    
            </div>   
            <div className={styles.navbarRight}>
                <p>Products</p>
            <Link to='/cart'>
               <div className={styles.cart}>
                <AiOutlineShoppingCart fontSize={'2rem'}/>
                <h5 style={{border:'1px solid', width:'20px',height:'20px',borderRadius:'50%',backgroundColor:'red',color:'white',marginTop:'5px',fontFamily:'sans-serif',textDecoration:'none'}}>{data.length}</h5>
                </div>
            </Link>
            </div>   
        </div>
    </header>
    );
}

export default Navbar;
