import React from "react";
import { sagaActions } from "../../store/sagas/sagaActions";
import { useDispatch,useSelector } from "react-redux";
const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.products);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: sagaActions.FETCH_PRODUCT_DATA });
        }}
        className="px-5 bg-zinc-900 text-white"
      >
        Product Fetch
      </button>

     <ul> 
        {
            data.map((product)=>{
                return(
                    <>
                      <li>{product.category}</li>
                      <li>
                      <img className="w-20" src={product.image}/>
                      </li>
                      <li>{product.price}</li>
                      <li>{product.title}</li>
                    </>
                )
            })
        }
     </ul>
     
    </>
  );
};

export default Product;
