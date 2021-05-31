import axios from "axios";
import {useDispatch} from "react-redux";
import {setProducts} from "../../redux/actions/productAction";

export const FetchProducts=async ()=>{
    const dispatch =useDispatch();
    const response=await axios
        .get("https://fakestoreapi.com/products")
        // .then(res=>res.json())
        .catch((error)=>{
            console.log(error)
        })
    dispatch(setProducts(response.data));
    // return response.data
}
