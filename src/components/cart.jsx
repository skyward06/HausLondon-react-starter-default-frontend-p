import "../css/navbar.css"
import { useEffect, useState } from "react"
import axios from "axios"

import { BsHandbag } from "react-icons/bs";
import React from 'react'
import { DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import { CartLength } from "../Redux/action";
import { useDispatch , useSelector } from "react-redux";
  

export const Cart = () => {
 
  const dispatch = useDispatch();

  const [cartdata, setCartData] = useState([])
  const [count, setCount] = useState(1)

  let total = cartdata.reduce(function (a, v) {
    return a + Number(v.price);
  }, 0)
  // console.log(total)

    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get('https://hauslondon.herokuapp.com/cart')
          .then(function (response) {
              // console.log("cart",response.data,response.data.length);
            setCartData(response.data)
            dispatch(CartLength(response.data.length))
          })
          .catch(function (error) {
            console.log(error);
          })
    }

  const DeleteCartItem = (id) => {
    console.log(id)
     fetch(`https://hauslondon.herokuapp.com/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json().then((res) => {
           console.log(res)
          getdata() 
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return (
      <>
         <DrawerContent>
            <DrawerCloseButton _focus={{boxShadow:'none',}} />
            <div className="basket">
              <div style={{margin : "5px 0 10px 0"}}><BsHandbag /></div><div>Basket</div>
              </div>
          {cartdata.map((e,i) => {
            return <div key={i} className="cart">
                <div className="cartleft">
                    <img src={e.img} alt="" />
                </div>
                <div className="cartright">
                    <div>{e.Name}</div>
                    <div>{e.title}</div>
                    <div className="counter">
                        <div>-</div>
                        <div>{count}</div>
                        <div onClick={()=> setCount(count+1)}>+</div>
                        <div onClick={() =>DeleteCartItem(e.id)}>Remove</div>
                        <div>${e.price}</div>
                      </div>
                </div>
          </div>
          })}
          <div className="subtotal">
            <div>Subtotal</div>
            <div>${total}</div>
          </div>
          <button className="basket_button">Check Out</button>
         </DrawerContent>
      </>
    )
  }

