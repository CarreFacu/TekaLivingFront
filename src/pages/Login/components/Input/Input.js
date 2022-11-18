import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({text}) => {
    return (
        <div>
            <TextField
                required
                id="outlined-required"
                type={text}
            />
        </div>
    );
}

export default Input;