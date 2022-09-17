
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
  useEffect(() => {
    if (user.authState === true) {
      router.push(`/user/${user.userInfo.email}`);
    }
  }, [user.authState])
  //functions
  const validateEmail = (emailAddres: string) => {
    let pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let result = emailAddres.match(pattern);
    return result
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
      setTimeout(() => {
        if (user.authState === false) {
          setLoginErrors((loginErrors) => [...loginErrors, "user not found"]);
        }
      }, 5000);

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
