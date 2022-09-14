
import React, { useEffect } from "react";
import Router from "next/router";


const User = () => {

    useEffect(() => {
        const { pathname } = Router;
        if (pathname === "/user"||pathname === "/user/") {
            Router.push("/user/login");
        }
    });
    

}
export default User;