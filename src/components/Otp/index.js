import React from "react";
import TextField from "@mui/material/TextField";
import { Fitems5, Fitems6 } from "./OtpElements";
import "./Otp.css";
import {
  Container,
  Fitems1,
  Fitems2,
  Fitems3,
  FormItems,
  Inner,
  InnerLeft,
  InnerRight,
  InputContainer,
} from "../Signup/SignupElements";
import { NavLink } from "react-router-dom";
import useForm from '../Form/useForm'
import validate from '../Form/validateInfo'

const Otp = ({submitForm}) => {
  const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
  return (
    <>
      <Container>
        <Inner>
          <InnerLeft></InnerLeft>
          <InnerRight>
            <FormItems>
              <Fitems1>OTP Verification</Fitems1>
              <Fitems5>
                Please enter the OTP below to complete the verification process
              </Fitems5>
              <InputContainer>
              <form onSubmit={handleSubmit}>
                <Fitems2>
                  <TextField
                    type="text"
                    name="Otp"
                    onChange={handleChange}
                    value={values.Otp}
                    id="outlined-basic"
                    label="Mobile OTP"
                    variant="outlined"
                  />{errors.Otp && <p>{errors.Otp}</p> }
                </Fitems2>
                <Fitems6>
                  Didn't Recieve
                  <span>
                    <NavLink to="/">Request New OTP</NavLink>
                  </span>
                </Fitems6>
                <Fitems2 className="spacing_otp">
                  <TextField
                    type="text"
                    name="Otp1"
                    onChange={handleChange}
                    value={values.Otp1}
                    id="outlined-basic"
                    label="Email OTP"
                    variant="outlined"
                  />{errors.Otp1 && <p>{errors.Otp1}</p> }
                </Fitems2>
                <Fitems6>
                  <span>Didn't Recieve</span>
                  <span>
                    <NavLink to="/">Request New OTP</NavLink>
                  </span>
                </Fitems6>
                <Fitems3 className="spacing_next">
                  <button type="submit">Next</button>
                  
                </Fitems3></form>
              </InputContainer>
            </FormItems>
          </InnerRight>
        </Inner>
      </Container>
    </>
  );
};

export default Otp;
