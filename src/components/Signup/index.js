import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import {NavLink} from 'react-router-dom'; 
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Container, Fitems4, Fitems1, Fitems2, Fitems3, FormItems, Inner, InnerLeft, InnerRight, InputContainer } from './SignupElements'
import { InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './signup.css'
import useForm from '../Form/useForm'
import validate from '../Form/validateInfo'
const Signup = ({submitForm}) => {
    
    
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
    const [visible, setvisible] = useState(false);
const [visible1, setvisible1] = useState(false)
    const handleVisibilityClick=()=>{
        setvisible(!visible);
    }
    const handleVisibilityClick1=()=>{
        setvisible1(!visible1);
    }
    const [phone, setphone] = useState()
  values.mobilenumber=phone;

  const [file, setselectedfile] = useState()
  
  const handleSelectedFile =(e)=>{

setselectedfile(e.target.files[0])
  }
  values.file=file;

  const [file1, setselectedfile1] = useState()
  const handleSelectedFile1 =(e)=>{

    setselectedfile1(e.target.files[0])
      }
 values.file1=file1;

    return (
        <>
           <Container>
               <Inner>
                   <InnerLeft></InnerLeft>
                   <InnerRight><FormItems>
                      <Fitems1>Sign Up</Fitems1>
                     <InputContainer>  <form onSubmit={handleSubmit}> <Fitems2><TextField  type="text" id="outlined-basic" name="username" label="Username" variant="outlined"  value={values.username} onChange={handleChange} /> {errors.username && <p>{errors.username}</p> }</Fitems2>
                       <Fitems2><TextField type="" name="mobilenumber"  id="outlined-basic"   label="Mobile Number"   variant="outlined"   InputProps={{  startAdornment: <InputAdornment position="start"><PhoneInput     value={phone} onChange={setphone}     enableSearch disableSearchIcon  className="phoneinput"  /></InputAdornment>}}/>{errors.mobilenumber && <p>{errors.mobilenumber}</p> }</Fitems2>
                     {/* <Fitems2><PhoneInput value={phone} onChange={setphone} /></Fitems2>  */}
                       <Fitems2><TextField  type="email" id="outlined-basic" name="email" label="Email" variant="outlined"  value={values.email} onChange={handleChange} /> {errors.email && <p>{errors.email}</p> }</Fitems2>
                       <Fitems2><TextField type={visible?'text':'password'} id="outlined-basic" name="password" label="Create Password" variant="outlined"  value={values.password} onChange={handleChange} InputProps= {{  endAdornment: <InputAdornment position="end">{visible?<VisibilityOutlinedIcon style={{cursor:'pointer'}}onClick={handleVisibilityClick}/>:<VisibilityOffOutlinedIcon style={{cursor:'pointer'}} onClick={handleVisibilityClick}/>}</InputAdornment>}}/> {errors.password && <p>{errors.password}</p> }</Fitems2>
                       <Fitems2><TextField type={visible1?'text':'password'}  id="outlined-basic" name="password2" label="Confirm Password" variant="outlined"  value={values.password2} onChange={handleChange} InputProps= {{  endAdornment: <InputAdornment position="end">{visible1?<VisibilityOutlinedIcon style={{cursor:'pointer'}}onClick={handleVisibilityClick1}/>:<VisibilityOffOutlinedIcon style={{cursor:'pointer'}} onClick={handleVisibilityClick1}/>}</InputAdornment>}}/>{errors.password2 && <p>{errors.password2}</p>}</Fitems2>
                       <Fitems2><TextField  type="text" id="outlined-basic" name="supermarket" label="Super Market Details" variant="outlined"  value={values.supermarket} onChange={handleChange} />{errors.supermarket && <p>{errors.supermarket}</p>}</Fitems2>
                       <Fitems2><TextField name="file"  className="custom-input"  onChange={handleSelectedFile} type="file" id="outlined-basic"  label="Upload Document" variant="outlined"   InputProps={{  endAdornment: <InputAdornment position="end"><FileUploadOutlinedIcon /></InputAdornment>,
          }} InputLabelProps={{  shrink: true, }}/>{errors.file && <p>{errors.file}</p> }</Fitems2>
                       <Fitems2><TextField name="file1" onChange={handleSelectedFile1}  type="file"  id="outlined-basic" label="Upload Document" variant="outlined"   InputProps={{  endAdornment: <InputAdornment position="end"><FileUploadOutlinedIcon /></InputAdornment>,
          }} InputLabelProps={{  shrink: true, }}/>{errors.file1 && <p>{errors.file1}</p> }</Fitems2>
                       <Fitems2><TextField  type="text" id="outlined-basic" name="location" label="Location" variant="outlined"  value={values.location} onChange={handleChange}/>{errors.location && <p>{errors.location}</p>}</Fitems2>
                       <Fitems3><button type="submit">Next</button></Fitems3>
                       
                       </form>   </InputContainer>
                      
                      <Fitems4>Already have an Account?<span><NavLink to="/Login">Login</NavLink></span></Fitems4>
                       </FormItems></InnerRight>
               </Inner>
               </Container> 
        </>
    )
}

export default Signup
