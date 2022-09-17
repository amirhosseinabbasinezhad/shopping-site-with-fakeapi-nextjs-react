import React from "react"
import { userstates } from "../store/userSlice"
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { userAction } from "../store/userSlice"
import { useRouter } from 'next/router';
import Link from "next/link";

const LogedIn: React.FC = () => {
    const user = useSelector(userstates);
    const dispatch = useDispatch();
    const router = useRouter();
    const LogoutHandler = (event: React.FormEvent) => {
        dispatch(userAction.Logout())
        router.push(`/user/login`);
    }
    return (<><div style={{ padding: "20px 20px 5px 20px" }}>
        <Button onClick={(e) => { LogoutHandler(e) }} color="secondary" className="logoutbtn" variant="contained">
            <LogoutRoundedIcon className="logoutbtn" />
        </Button>
        <div className="userpage">
            <h4>{user.userInfo.email}</h4>
            <Avatar alt="Travis Howard" src={user.userInfo.avatar} sx={{ width: 80, height: 80 }} />
        </div>
        <div className="cartinaccunt">
            <Link href="/cart"><h3>cart</h3></Link>
        </div>
    </div>
    </>)
}
export default LogedIn;