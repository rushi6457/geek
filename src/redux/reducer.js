import { GET_ERROR, GET_PRODUCTS, GET_REQUEST } from "./types"


const initState = {
    isLoading:false,
    products:[],
    isError:false
}

export const reducer = (state=initState,{type,payload}) =>{

    switch(type){

        case GET_PRODUCTS:{
            return {
                ...state,
                isLoading:false,
                products:payload,
                isError:false
            }
        }
        case GET_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
                products:[]
            }
        }
        case GET_ERROR:{
            return {
                ...state,
                isLoading:false,
                products:[],
                isError:true
            }
        }
        default:{
            return state
        }
    }
}