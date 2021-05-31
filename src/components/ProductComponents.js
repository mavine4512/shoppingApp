import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProductComponents=()=>{

    const products=useSelector((state)=>state.allProducts.products);

 const renderList= products.map((product)=>{

    const {id,image,title,price,category}=product

     return(
         <div className="four column wide" key={id}>
             <Link to={`productDetails/${id}`}>
             <div className="ui link cards">
                 <div className="card " >
                     <div className="image ">
                         <img src={image} alt={title}/>
                     </div>
                     <div className="content">
                         <div className='header'>
                             {title}
                         </div>
                         <div className='mate price'>
                             KES:{price}
                         </div>
                         <div className='mate'>
                             {category}
                         </div>
                     </div>
                 </div>
             </div>
             </Link>
         </div>
     )
 })

    return (renderList)

}

export default ProductComponents
