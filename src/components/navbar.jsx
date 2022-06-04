import React from 'react'
import "../css/navbar.css"
import { BsTelephone, BsPerson, BsHandbag } from "react-icons/bs";
import {
    Drawer,
    DrawerOverlay,
    useDisclosure,
    Button,
    Stack,
} from '@chakra-ui/react'
import { Cart } from "./cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export const Navbar = () => {
    
    const cartitem = useSelector((state) => state.cart_length)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  

    return (
        <div className="Navbar">
            <Drawer
            isOpen={isOpen}
            placement='right'
            initialFocusRef={firstField}
            onClose={onClose}
            size="md"
            scrollBehavior='inside'
            >
            <DrawerOverlay />
               <Cart/>
            </Drawer >

            
            <div className="nav_logo">
                <Stack direction='row' spacing={0}>
                    <Button _hover={{ background: "lightgrey", }}
                        colorScheme=' #636363'
                        borderRadius='0px'
                        leftIcon={<BsTelephone />}
                        _focus={{boxShadow: 'none'}} >
                    </Button>
                    <Link to="/Register"><Button _hover={{ background: "lightgrey", }} colorScheme=' #636363' borderRadius='0px'_focus={{ boxShadow:'none'}}  rightIcon={<BsPerson />}></Button></Link>
                    <Button _hover={{ background: "lightgrey", }} colorScheme='linkedin'  borderRadius='0px' onClick={onOpen} _focus={{boxShadow:'none',}} rightIcon={<BsHandbag />} ></Button>
                    <Button _hover={{ background: "lightgrey", }} colorScheme='linkedin'   border='0px' borderRadius='0px' _focus={{boxShadow:'none'}} onClick={onOpen}  >{cartitem}</Button>
                </Stack>
           </div>
        </div>
    )
}
