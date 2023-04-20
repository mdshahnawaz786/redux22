import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './product.css'

const Product = () => {


    const [cart , setCart] = useState([])


    const dispatch = useDispatch()
    const {products} = useSelector((storeData)=>{
        return storeData
    })
    // console.log(products);

    useEffect(()=>{
        if(products.length === 0){
            console.log("api Fetched");
            apiFetching()
        }
        
    },[])

    const apiFetching = async()=>{
        var res = await fetch("https://fakestoreapi.com/products")
        var data = await res.json()
        // console.log(data);
        dispatch({
            type:"products",
            payload: data
        })
    }


  return (
    <div className='product'>
        {
            products.length > 0 ? <>
                {products.map((ele)=>{
                    return(
                        <div className='productCard'>
                <img src={ele.image} />
                <p>Price:  $ {(ele.price).toFixed(1)}</p>
              <p>Category: {ele.category}</p>
              <button onClick={(()=>{
                setCart([...cart,ele])
              })}>Add to Cart</button>
              </div>
                    )
                })}
            </> : <h3 style={{color:"gray"}}>Please Wait While Page Is Loading !!!</h3>
        }
    </div>
  )
}

export default Product