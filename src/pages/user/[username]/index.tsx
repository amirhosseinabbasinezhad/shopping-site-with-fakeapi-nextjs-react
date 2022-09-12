//our-domain.com/user/account
import { NextPage } from "next";
import { useState, useEffect } from "react";
import LogedIn from "../../../components/user/LogedIn";
import { useRouter } from "next/router";

import { userstates } from "../../../components/store/userSlice"
import { useSelector, useDispatch } from "react-redux";
import { Login } from "@mui/icons-material";
const UserAccount: NextPage = () => {
    const router = useRouter();
    const user = useSelector(userstates);

    const userpath = router.query.username;
    const [validate, setValidate] = useState<boolean>(false)
    useEffect(() => {
        if (userpath == user.userInfo.email) {
            setValidate(true)

        }
        else {
            setValidate(false)
            router.push("/user/login");
        }
    }, [user.userInfo.id, userpath])
    return (<>
        {validate && <LogedIn />}
    </>)
}
export default UserAccount;