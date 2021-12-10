export default function validateInfo(values){
    let errors={}
    if(!values.username.trim()){
        errors.username="Username is Required"
    }

    if(!values.email){
        errors.email="Email Required"

    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){errors.email="Email Address is invalid "}

if(!values.password){
    errors.password='Password is Required'
}else if(values.password.length<6){
    errors.password='Password needs to be 6 characters or more'
}

if(!values.password2){
    errors.password2='Password is Required'
}else if(values.password2 !==values.password){
    errors.password2='Password do not match'
}

if(!values.mobilenumber){
    errors.mobilenumber="Mobile Number is Required"
}
// else if(isNaN(values.mobilenumber)){
//     errors.mobilenumber='Enter a Valid Mobile Number'
// }

if (!values.Otp){
    errors.Otp="OTP is Required"
}else if(isNaN(values.Otp)){
    errors.Otp="Enter Valid OTP"
}else if(values.Otp.length<4){
    errors.Otp="Enter Valid OTP"
}
if (!values.Otp1){
    errors.Otp1="OTP is Required"
}else if(isNaN(values.Otp1) ){
    errors.Otp1="Enter Valid OTP"
}else if(values.Otp.length<4){
    errors.Otp="Enter Valid OTP"
}

if(!values.file){

    errors.file='Document is Required'
}else if(values.file.size>40000){
    errors.file='File is too large'
}

if(!values.file1){

    errors.file1='Document is Required'
}

if(!values.location){
    errors.location='Location is Required'
}

if(!values.supermarket){
    errors.supermarket='Super Market detail is required'
}
return errors
}