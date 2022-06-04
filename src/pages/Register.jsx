
import "../css/register.css"
import React, { useState } from 'react'
import { Input, Stack, Button } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { axios } from "axios"

export const Register = () => {

    const [userDetail, setUserDetail] = useState({
        "Fisrt_Name": "",
        "Last_Name": "",
        "Comapany": "",
        "Email": "",
        "Password" : "",
    })

    const handleChange = (e) => {
        console.log(userDetail)
        setUserDetail({
            ...userDetail,
            [e.target.name] : e.target.value
        })
    }

    const handleRegiter = () => {
        console.log(userDetail)

        axios.post('http://localhost:8080/register', userDetail)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
     }

  return (
      <div className='Register'>
         <div className="left">Register for an Account</div>
          <div className="right">
          <Stack spacing={3} direction={'row'}>
            <Input name="First_Name" placeholder='First Name' size='lg'  bg='white' borderRadius="none" onChange={handleChange} />
            <Input name="Last_Name" placeholder='Last Name' size='lg' bg='white' borderRadius="none" onChange={handleChange} />
          </Stack>   
          <br />
          <Stack spacing={3}>
            <Input name="Comapany" placeholder='Company(optional)' size='lg'  bg='white' borderRadius="none" onChange={handleChange}/>
            <Input name="Email" placeholder='Email' size='lg' bg='white' borderRadius="none" onChange={handleChange} />
            <Input name="Password" placeholder='Password' size='lg' bg='white' borderRadius="none" onChange={handleChange} />
            <Link to="/Login"><Button colorScheme='twitter' borderRadius="none" w="100px" onClick={handleRegiter}>Register</Button></Link>
            <Link to="/Login"><div className="login">Alredy have an account? Log in</div></Link>
          </Stack>
          
         </div>
      </div>
  )
}