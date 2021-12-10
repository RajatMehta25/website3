import { TextField } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { InputAdornment } from "@mui/material";

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

const Bank = () => {
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <>
      <Container>
        <Inner>
          <InnerLeft></InnerLeft>
          <InnerRight>
            <FormItems>
              <Fitems1>Bank Details</Fitems1>
              <InputContainer>
                <Fitems2>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Account Holder"
                    variant="outlined"
                    required
                  />
                </Fitems2>
                <Fitems2>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Select Bank"
                    variant="outlined"
                    required
                    select
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Fitems2>
                
                <Fitems2>
                  <TextField
                    type="number"
                    id="outlined-basic"
                    label="Account Number"
                    variant="outlined"
                    required
                  />
                </Fitems2>
                <Fitems2>
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="Re-Enter Account Number"
                    variant="outlined"
                    required
                    InputProps={{  endAdornment: <InputAdornment position="end"><CheckCircleIcon style={{color:'green'}} onClick={()=>{}}/></InputAdornment>}}
                  />
                </Fitems2>
                <Fitems2>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Branch Code"
                    variant="outlined"
                    required
                  />
                </Fitems2>
                <Fitems2>
                  <TextField
                    type="text"
                    id="outlined-basic"
                    label="Branch Name"
                    variant="outlined"
                    required
                  />
                </Fitems2>
                <Fitems3><button>Done</button></Fitems3>
              </InputContainer>
            </FormItems>
          </InnerRight>
        </Inner>
      </Container>
    </>
  );
};

export default Bank;
