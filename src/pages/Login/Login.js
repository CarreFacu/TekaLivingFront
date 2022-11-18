import React from 'react'
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
const Login = () => {
    return (
        <div>
            <Title text = ' Hola no se que hago aca '/>
            <Label text = ' Usuario '/>
            <Input/>
            <Label text = ' Password '/>
            <Input text = 'password'/>
        </div>
     );
}
 
export default Login;