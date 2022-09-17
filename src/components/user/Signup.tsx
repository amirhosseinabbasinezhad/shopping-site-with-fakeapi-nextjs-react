
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import { useRef, useState, useEffect } from 'react';
import { addUser, checkAvailable, userstates } from '../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
const Signup: React.FC = () => {
    const emailIsAvailable = useSelector(userstates)
    const dispatch = useDispatch()
    const [signupErrors, setSignupErrors] = useState<string[]>([]);
    const router = useRouter();
    const user = useSelector(userstates);
    useEffect(() => {
        if (user.authState === true) {
            router.push(`/user/${user.userInfo.email}`);
        }
    }, [user.authState])
    const Nameref = useRef<HTMLInputElement>(null);
    const Emailref = useRef<HTMLInputElement>(null);
    const Passwordref = useRef<HTMLInputElement>(null);
    const validateEmail = (emailAddres: string) => {
        let pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        let result = emailAddres.match(pattern);
        return result
    }
    const signupHandler = (event: React.FormEvent) => {
        setSignupErrors([]);
        const email = Emailref.current!.value;
        const password = Passwordref.current!.value;
        const name = Nameref.current!.value;
        if (!validateEmail(email)) {

            setSignupErrors((signupErrors) => [...signupErrors, "email is not valid"]);

        }
        if (name.length < 4) {

            setSignupErrors((signupErrors) => [...signupErrors, "name is not valid"]);
        }
        if (password.length < 8) {



            setSignupErrors((signupErrors) => [...signupErrors, "password is not valid"]);
        }

        if (password.length >= 8 && validateEmail(email) && name.length >= 4) {

            checkAvailable(dispatch, email);
            if (emailIsAvailable.emailavailable === true) {
                addUser(dispatch, name, email, password);
            }
            else {
                setSignupErrors((signupErrors) => [...signupErrors, "email is not available"]);

            }
        }

    }
    return (

        <div className='content'>
            <div className="header">
                <h2 >signup</h2>
            </div>
            <div className='form-body'>
                <TextField className="nameinput inputs" inputRef={Nameref} id="nameinput" color='secondary' label="name" variant="outlined" />


                <TextField className="eminput inputs" inputRef={Emailref} id="eminput" color='secondary' label="Email" variant="outlined" />

                <TextField className="passinput inputs" inputRef={Passwordref} id="passinput" color='secondary' label="Password" variant="outlined" />

                <Button onClick={signupHandler} color="secondary" className="submitbtn" variant="contained">SIGN UP</Button>

            </div>
            <div className='bottomtext'>


                <Link href={"/user/login"}>have an Account?login.</Link>

            </div>
            <div className="message">
                <ul>
                    {signupErrors.map((err, index) => { return (<li key={index}>{err}</li>) })}
                </ul>
            </div>
        </div>



    );
}

export default Signup;
