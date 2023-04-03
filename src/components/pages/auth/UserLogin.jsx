import React,{ useState } from 'react';
import { TextField, Box, Button, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';


const UserLogin = () => {
    const [Error, setError] = useState({
        status: "false",
        msg: "",
        type: ""
    });





    const handleSubmit = (e) => {

        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const actualData = {
            email: data.get("email"),
            password: data.get("password"),
            
        };
        if(actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById('login-form').reset();    //for reset the form after submit
            setError({status:true, msg: "Login Success", type: 'success'});
        }else{
            setError({status:true, msg: "All fields are required", type: 'error'});
        }



    }
    return (
        <>
        <Box component='form' noValidate sx={{ mt:1 }} id="login-form" onSubmit={handleSubmit} >
            <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
            <TextField margin='normal' required fullWidth id='password' name='password' label='Password' />
            <Box textAlign='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Log In</Button>
            </Box>
            <NavLink to='/'>Forgot Password ?</NavLink>
            {Error.status ? <Alert severity={Error.type}> {Error.msg} </Alert> : ''}
        </Box>
        </>
    );
}

export default UserLogin;
