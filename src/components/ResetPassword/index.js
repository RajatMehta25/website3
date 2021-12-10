import { TextField } from '@mui/material'
import React,{useState} from 'react'
import { Container, Fitems1, Fitems2,Fitems3, FormItems, Inner, InnerLeft, InnerRight, InputContainer } from '../Signup/SignupElements'
import { Fitems5 } from '../Otp/OtpElements'
import useForm from '../Form/useForm'
import validate from '../Form/validateInfo'
import { InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const ResetPassword = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
    const [visible, setvisible] = useState(false);
    const [visible1, setvisible1] = useState(false)
        const handleVisibilityClick=()=>{
            setvisible(!visible);
        }
        const handleVisibilityClick1=()=>{
            setvisible1(!visible1);
        }
    return (
        <>
            <Container>
                <Inner>
                    <InnerLeft></InnerLeft>
                <InnerRight>
                    <FormItems>
                        <Fitems1>Reset Password</Fitems1>
                        <Fitems5>
                Enter 4 Digit Verification Code (OTP) Sent On Your Registered Mobile Number/E-mail Address.
              </Fitems5>
                        <InputContainer>
                        <form onSubmit={handleSubmit}>
                        <Fitems2><TextField  type={visible?'text':'password'}
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    id="outlined-basic"
                    label="New Password"
                    variant="outlined"
                   InputProps= {{  endAdornment: <InputAdornment position="end">{visible?<VisibilityOutlinedIcon style={{cursor:'pointer'}}onClick={handleVisibilityClick}/>:<VisibilityOffOutlinedIcon style={{cursor:'pointer'}} onClick={handleVisibilityClick}/>}</InputAdornment>}}/>{errors.password && <p>{errors.password}</p> }</Fitems2>
                       <Fitems2><TextField  type={visible1?'text':'password'}
                    id="outlined-basic"
                    name="password2"
                        value={values.password2}
                        onChange={handleChange}
                    label="Re-Enter Password"
                    variant="outlined"
                   InputProps= {{  endAdornment: <InputAdornment position="end">{visible1?<VisibilityOutlinedIcon style={{cursor:'pointer'}}onClick={handleVisibilityClick1}/>:<VisibilityOffOutlinedIcon style={{cursor:'pointer'}} onClick={handleVisibilityClick1}/>}</InputAdornment>}}/>{errors.password2 && <p>{errors.password2}</p> }</Fitems2>
                     <Fitems3 className="spacing_next">
                  <button type="submit">Reset Password</button>
                </Fitems3></form>
                        </InputContainer>
                    </FormItems>
                </InnerRight>
                </Inner>
            </Container>
        </>
    )
}

export default ResetPassword
