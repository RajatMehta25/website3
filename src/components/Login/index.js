import { TextField } from '@mui/material'
import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'; 
import { InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Checkbox from '@mui/material/Checkbox';
import './login.css'
import "../Otp/Otp.css";
import { Container, Fitems1,Fitems3,Fitems4, Fitems2, FormItems, Inner, InnerLeft, InnerRight, InputContainer } from '../Signup/SignupElements'
import { Fitems6 } from '../Otp/OtpElements'
import useForm from '../Form/useForm'
import validate from '../Form/validateInfo'
const Login = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
    const [visible, setvisible] = useState(false);

    const handleVisibilityClick=()=>{
        setvisible(!visible);
    }

    return (
        <>
<Container>
    <Inner>
        <InnerLeft></InnerLeft>
        <InnerRight>
            <FormItems>
                <Fitems1>Login</Fitems1>
                <InputContainer><form onSubmit={handleSubmit}>
                <Fitems2><TextField type="email"  id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                     />{errors.email && <p>{errors.email}</p> }</Fitems2>
                     <Fitems2><TextField type={visible?'text':'password'}  id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    
                    InputProps= {{  endAdornment: <InputAdornment position="end">{visible?<VisibilityOutlinedIcon style={{cursor:'pointer'}}onClick={handleVisibilityClick}/>:<VisibilityOffOutlinedIcon style={{cursor:'pointer'}}onClick={handleVisibilityClick}/>}</InputAdornment>}}/>{errors.password && <p>{errors.password}</p> }</Fitems2>
                     <Fitems6 className>
                        
                  <span> <span><Checkbox className="Checkdesign" /></span>Remember Login Details</span>
                  <span className="adjust_forgotpassword">
                    <NavLink exact to="/Resetpassword">Forgot Password?</NavLink>
                  </span>
                </Fitems6>
                <Fitems3 className="spacing_next">
                  <button type="submit">LOG IN</button>
                </Fitems3></form>
                </InputContainer>
                <Fitems4>Don't have an Account?<span><NavLink to="/">Sign Up</NavLink></span></Fitems4>
            </FormItems>
        </InnerRight>
    </Inner>
</Container>

        
            
        </>
    )
}

export default Login
