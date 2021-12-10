import React from 'react'
import { TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Fitems6,Fitems5 } from '../Otp/OtpElements'
import { Container, Fitems1, Fitems2,Fitems3, FormItems, Inner, InnerLeft, InnerRight, InputContainer } from '../Signup/SignupElements'
import '../Otp/Otp.css'
import { Fitems8 } from './OtpVerificationElements'
const OtpVerification = () => {
    return (
        <>
            <Container>
                <Inner>
                    <InnerLeft></InnerLeft>
                    <InnerRight> <FormItems>
                        <Fitems1>OTP Verification</Fitems1>
                        <Fitems8>If wrong number provided,<span><NavLink to="/">Click here to edit</NavLink></span></Fitems8>
                        <Fitems5>
                Please enter the OTP below to complete the verification process
              </Fitems5>
                        <InputContainer>
                            <Fitems2><TextField type="number"  id="outlined-basic"
                    label="Enter OTP"
                    variant="outlined"
                    required/></Fitems2>
                     <Fitems6>
                  <span>Didn't Recieve?</span>
                  <span>
                    <NavLink to="/">Request New OTP</NavLink>
                  </span>
                </Fitems6>
                <Fitems3 className="spacing_next">
                  <button>Proceed</button>
                </Fitems3>
                </InputContainer>
                        </FormItems>
                    </InnerRight>
                </Inner>
            </Container>
        </>
    )
}

export default OtpVerification
