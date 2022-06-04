
import "../css/page.css"
import { SimpleGrid, Box } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import {Categories} from "../components/categories"

export const Lighting = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get('https://hauslondon.herokuapp.com/lighting')
          .then(function (response) {
              console.log(response.data);
              setData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }

    return (
        <div className="page">
            <SimpleGrid columns={2} spacing={0}>
                <Box bg='grey' height='580px'>
                    <img style={{
                        height: "100%",
                        width : "100%"
                    }} src="https://hausimg.imgix.net/s/files/1/0053/2792/collections/haus-london-brand-product3.jpg?v=1635940786&w=1024&" alt="img" />
                </Box>
                <Box bg='lightgrey' height='580px'>
                    <div className="detail">
                        <div>All Lighting</div>
                        <p>We sell a wide range of design classics and contemporary lighting from authentic designer brands such as Flos, Louis Poulsen, Bocci, DCW Editions, Le Klint, Tom Dixon, Wastberg, Anglepoise, Artemide, HAY, &tradition, Menu, Muuto, Gubi and more. </p>
                        <p>Whether you're looking for iconic statement pendants, table lamps, floor lights or functional wall and ceiling lights; we have you covered. We also offer a wide range of durable designer outdoor lighting too. </p>
                        <p>Browse our full collection to find the lighting that will help you curate your perfect, forever home.</p>
                    </div>
                </Box>
            </SimpleGrid>

            <SimpleGrid columns={4} spacing={1}>
                {data.map((e,i) => {
                    return (
                        <Categories key={i} id={e.id}
                            img={e.img}
                            Name={e.Name}
                            title={e.title}
                            price={e.price}
                        >   
                        </Categories>
                    )
                })}               
            </SimpleGrid>
            
        </div>
    )
}