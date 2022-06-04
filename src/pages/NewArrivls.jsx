
import "../css/page.css"
import { SimpleGrid, Box } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"
import {Categories} from "../components/categories"

export const NewArrivals = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get('https://hauslondon.herokuapp.com/new_arrival')
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
                    }} src="https://hausimg.imgix.net/s/files/1/0053/2792/collections/haus-london-hay-quilton-sofa_0530e3c9-f069-48a7-8dcf-95862e49fc2a.jpg?v=1630426702&w=1024&" alt="img" />
                </Box>
                <Box bg='lightgrey' height='580px'>
                    <div className="detail">
                        <div>New Arrivals</div>
                        <p>Our curated edit of contemporary furniture, lighting and homewares is always expanding.</p>
                        <p>Browse the latest arrivals we have found for you, including brand new designs, bestsellers in new finishes, limited edition releases and newly reissued design classics. </p>
                        <p>Return regularly for the latest arrivals from HAY, &tradition, Menu, De La Espada, Muuto, Flos, Menu, Ferm Living and more. </p>
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