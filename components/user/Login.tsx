
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { useDispatch, useSelector } from "react-redux";
import { LoginUser, userstates } from "../store/userSlice"

const Login: React.FC = () => {
//useref
  const Emailref = useRef<HTMLInputElement>(null);
  const Passwordref = useRef<HTMLInputElement>(null);
//state
  const [loginErrors, setLoginErrors] = useState<string[]>([]);
  //redux
  const user = useSelector(userstates);
  const dispatch = useDispatch();
  //router
  const router = useRouter();
  //useEffects
  useEffect(()=>{
    if (user.authState === true) {
      router.push(`/user/${user.userInfo.email}`);
    }
  },[user.authState])
  //functions
  const validateEmail = (emailAddres: string) => {
    return emailAddres.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)


  }
  const LoginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setLoginErrors([]);
    const email = Emailref.current!.value;
    const password = Passwordref.current!.value;

    if (!validateEmail(email)) {

      setLoginErrors((loginErrors) => [...loginErrors, "email is not valid"]);

    }

    if (password.length < 8) {


      setLoginErrors((loginErrors) => [...loginErrors, "password is not valid"]);
    }

    if (password.length >= 8 && validateEmail(email)) {
      LoginUser(dispatch, email, password);
    }

  }

  return (

    <div className='content'>
      <div className="header">
        <h2 >login</h2>
      </div>

      <div className='form-body'>

        <TextField className="eminput inputs" inputRef={Emailref} id="eminput" color='secondary' label="Email" variant="outlined" />

        <TextField className="passinput inputs" inputRef={Passwordref} id="passinput" color='secondary' label="Password" variant="outlined" />

        <Button onClick={(e) => { LoginHandler(e) }} color="secondary" className="submitbtn" variant="contained">LOGIN</Button>

      </div>
      <div className='bottomtext'>

        <Link href={"/user/passwordchange"}>forget password. </Link>
        <Link href={"/user/signup"}>signup.</Link>
        <div className="message">
          <ul>
            {loginErrors.map((err, index) => { return (<li key={index}>{err}</li>) })}
          </ul>
        </div>

      </div>
    </div>



  );
}

export default Login;
