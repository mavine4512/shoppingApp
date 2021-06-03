import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {FetchProducts} from "./network/Api"
import ProductComponents from "./ProductComponents";
import axios from "axios";
import {setProducts} from "../redux/actions/productAction";

const ProductListing=()=>{

    const products=useSelector((state)=>state);
    const dispatch =useDispatch();
    // console.log('products data: ',products)

    const fetchProducts= async ()=>{

        const response=await axios
            .get("https://fakestoreapi.com/products")
            .catch((error)=>{
                console.log(error)
            })
        dispatch(setProducts(response.data));
        // return response.data
    }

    useEffect(()=>{
        fetchProducts()
        },[]);

    return(
        <div className="ui grid container">
            <ProductComponents/>
        </div>
    )
}

export default ProductListing
