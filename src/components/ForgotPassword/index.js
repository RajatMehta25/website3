import { TextField } from '@mui/material'
import React from 'react'
import { Container, Fitems1, Fitems2,Fitems3, FormItems, Inner, InnerLeft, InnerRight, InputContainer } from '../Signup/SignupElements'
import { Fitems5 } from '../Otp/OtpElements'
import { Fitems7 } from './ForgotPasswordElements'
const ForgotPassword = () => {
    return (
        <>
            <Container>
                <Inner>
                    <InnerLeft></InnerLeft>
                    <InnerRight>
                        <FormItems>
                            <Fitems1>Forgot Password</Fitems1>
                            <Fitems7>Please enter your registered e-mail or mobile number to reset your password</Fitems7>
                            <Fitems5>
                We need to verify your account,your data will be secured and private.
              </Fitems5>
                            <InputContainer>
                            <Fitems2><TextField    type="Email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    required/></Fitems2>
                            <Fitems3 className="spacing_next">
                  <button>Get OTP</button>
                </Fitems3>
                        </InputContainer>
                        </FormItems>
                    </InnerRight>
                </Inner>
            </Container>
        </>
    )
}

export default ForgotPassword
