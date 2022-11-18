import React from 'react'
import TextField from '@mui/material/TextField';

const Input = ({text}) => {
    return (
        <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                type={text}
                defaultValue="Hello World"
            />
        </div>
    );
}

export default Input;