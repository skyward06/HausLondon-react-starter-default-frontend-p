
import "../css/page.css"
import { SimpleGrid, Box } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import {Categories} from "../components/categories"

export const Furniture = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get('https://hauslondon.herokuapp.com/farniture')
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
                    }} src="https://hausimg.imgix.net/s/files/1/0053/2792/collections/haus-london-brand-product.jpg?v=1635936724&w=1024&" alt="img" />
                </Box>
                <Box bg='lightgrey' height='580px'>
                    <div className="detail">
                        <div>All Furniture</div>
                        <p>We sell a wide range of design classics and contemporary furniture from authentic designer brands such as HAY, &tradition, Vitra, Menu, String, Carl Hansen & Son, De La Espada, Muuto, Ferm Living, Gubi, Fredericia, Fritz Hansen and more.</p>
                        <p>Whether you're looking for iconic statement lounge chairs, comfy sofas, dining chairs and tables, desks, storage solutions, stools, coffee tables or beds; we have you covered. We also offer a wide range of durable designer outdoor furniture too.</p>
                        <p>Browse our full collection to find the furniture that will help you curate your perfect, forever home.</p>
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