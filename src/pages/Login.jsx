
import "../css/register.css"
import React from 'react'
import { Input, Stack, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { setisAuth } from "../Redux/action"
import { useDispatch } from "react-redux"

export const Login = () => {
  
    const dispatch = useDispatch();

    const Signin = () => {
        dispatch(setisAuth(true))
    }

  return (
      <div className='Register'>
         <div className="left">Returning Customer</div>
          <div className="right"> 
          <br />
          <Stack spacing={3}>
            <Input placeholder='Email' size='lg'  bg='white' borderRadius="none" />
            <Input placeholder='Password' size='lg' bg='white' borderRadius="none" />
            <Link to="/new_arrival"><Button colorScheme='twitter' borderRadius="none" w="100px" onClick={Signin}>Sign in</Button></Link>
            <Link to="/Register"><div className="login">Register for an account</div></Link>
          </Stack>
          
         </div>
      </div>
  )
}