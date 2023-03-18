import axios from 'axios'
import { GET_ERROR, GET_PRODUCTS, GET_REQUEST } from './types';
export const getProducts = () => async(dispatch) =>{
    dispatch({type:GET_REQUEST})
    try {
         const res = await axios.get(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
        // console.log(res.data);
        dispatch({type:GET_PRODUCTS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_ERROR})
    }
}