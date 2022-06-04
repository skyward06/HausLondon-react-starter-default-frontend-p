
import "../css/page.css"
import { SimpleGrid, Box } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate , useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CartLength } from "../Redux/action";


export const Productdetails = () => {

    const location = useLocation();
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const Auth = useSelector((state) => state.is_Auth)
    const cartitem = useSelector((state) => state.cart_length)
    console.log(Auth)

    const [data, setData] = useState({})
    console.log("data",data)

    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get(`https://hauslondon.herokuapp.com${location.pathname}`)
          .then(function (response) {
            //   console.log(response.data);
              setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    const addTocart = (data) => {
        if (Auth==false) {
            console.log(Auth)
            return navigate("/Login", { replace: true });
        }

        axios.post('https://hauslondon.herokuapp.com/cart', data)
          .then(function (response) {
              console.log(response);
              alert("product added to cart succefully")
              dispatch(CartLength(cartitem+1))
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
            <div className="page" key={data.id}>
                 <SimpleGrid columns={2} spacing={0}>
                <Box bg='grey' height='580px'>
                    <img style={{
                        height: "100%",
                        width : "100%"
                    }} src={data.img} alt="img" />
                </Box>
                <Box bg='lightgrey' height='580px'>
                    <div className="detail">
                        <div>{data.Name }</div>
                        <p>{data.title }</p>
                        <p>Browse the latest arrivals we have found for you, including brand new designs, bestsellers in new finishes, limited edition releases and newly reissued design classics. </p>
                        <p>Return regularly for the latest arrivals from HAY, &tradition, Menu, De La Espada, Muuto, Flos, Menu, Ferm Living and more. </p>
                        <p style={{
                            fontSize: "30px",
                            fontWeight: "500",
                        }}>${data.price }.00</p>
                    </div>
                    <button className="basket_button" onClick={()=>addTocart(data)}> Add to Basket</button>
                </Box>
            </SimpleGrid>
            
        </div>   
        
    )
}