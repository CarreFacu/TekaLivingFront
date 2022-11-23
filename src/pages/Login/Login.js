import React, {useState} from 'react'
import './Login.css'
import {Grid, Button} from '@mui/material';
import TextField from "@mui/material/TextField";
import fondo from '../../../src/assets/images/mueble1.jpg'
const Login = () => {
    const [inputs, setInputs ] = useState({
        email: '',
        contraseña: ''
    })
    const handleChange = (e) =>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        console.log(inputs)
    }
    return (
        <div className='background-login'>
            <form onSubmit={HandleSubmit}>
                <Grid className='fondo'>
                    <Grid item md={12} className='inputs'>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleChange} value={inputs.email || ' '} name='email'/>
                    </Grid>
                    <Grid item md={12} className='inputs' >
                        <TextField className='inputs' type="password" id="outlined-basic" label="Contraseña" variant="outlined" onChange={handleChange} value={inputs.contraseña || ' '} name='contraseña'/>
                    </Grid>
                    <Grid item md={12} className="inputs">
                        <Button type='submit' variant="contained">Log In</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
     );
}
 
export default Login;