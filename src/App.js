import { Route } from 'react-router';
import './App.css';
import {BrowserRouter,Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Otp from './components/Otp';
import Bank from './components/Bank';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import OtpVerification from './components/OtpVerification';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
   <>
   <Routes>
     <Route  exact path="/" element={<Signup />} />
     <Route  exact path="/Otp" element={<Otp />} />
     <Route  exact path="/Bank" element={<Bank />} />
     <Route  exact path="/Login" element={<Login />} />
     <Route  exact path="/Forgotpassword" element={<ForgotPassword />} />
     <Route  exact path="/Otpverification" element={<OtpVerification />} />
     <Route  exact path="/Resetpassword" element={<ResetPassword/>} />

       </Routes>
   </>
  );
}

export default App;
