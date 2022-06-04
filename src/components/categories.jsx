
import "../css/page.css"
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export const Categories = ({id, img,Name,title,price}) => {
    
    const location = useLocation();
    // console.log(location.pathname)
    return (
            <div key={id}>
                <Link to={`${location.pathname}/${id}`}>
                    <Box className="box" height='375px'>
                        <div className="bottombox">
                        <img className="img" src={img} alt="img" />
                        <p>{Name}</p>
                        <p>{title}</p>
                        <p>${price}.00</p>
                        </div>
                    </Box>
                </Link>
            </div>            
    )
}