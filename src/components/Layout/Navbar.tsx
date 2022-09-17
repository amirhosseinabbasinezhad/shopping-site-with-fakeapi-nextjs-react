import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Link from "next/link";
import { userstates, carthandler } from "../store/userSlice";
import { productslicestate } from '../store/productsSlice';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(userstates);
    const curentproduct = useSelector(productslicestate);
    const [showNav, setShowNav] = useState(true);
    const [showPayBTN, setShowPayBTN] = useState(false);
    const router = useRouter();
    const handleAddToCart = () => {
        const cartArray = user.cart
        carthandler(dispatch, curentproduct.product, user.cart, 1);

        curentproduct.product;

    }
    useEffect(() => {
        if (router.pathname.includes("products/")) {
            setShowPayBTN(false)
            setShowNav(false)
        }
        else if (router.pathname.includes("cart")) {
            setShowPayBTN(true)
            setShowNav(true)
        }
        else {
            setShowPayBTN(false)
            setShowNav(true)
        }
    }, [router.pathname]);


    const HandlePayNow = () => {
        if (user.authState === true) {
            if (user.cart.items.length > 0) {
                //edame dare ...
            }
        }

    }
    const showProductHandler = () => {
        return <>
            <div className="productbottom">
                <Button onClick={handleAddToCart} color="secondary" className="Buybtnproduct" variant="contained">Buy Now</Button>
                <div className="btnpcart">
                    <IconButton onClick={(e) => { router.push("/cart") }} sx={{ p: '15px' }}   >
                        <ShoppingCartOutlinedIcon color="secondary" />
                    </IconButton>
                </div>


            </div>
        </>

    }
    const navColorHandler = () => {
        const url = router.pathname
        return <>
            <div className='navbar' style={{ marginTop: `${showPayBTN ? "5px" : "auto"}` }}>
                <Link href={"/home"}><HomeIcon color={url.includes("/home") ? "secondary" : "disabled"} /></Link>
                <Link href={"/category"}><SubjectOutlinedIcon color={url.includes("/category") ? "secondary" : "disabled"} /></Link>
                <Link href={"/cart"}><ShoppingCartOutlinedIcon color={url.includes("/cart") ? "secondary" : "disabled"} /></Link>
                <Link href={`/user/${user.userInfo.name}`}><PersonOutlineSharpIcon color={url.includes("/user") ? "secondary" : "disabled"} /></Link>
            </div>
        </>
    }

    const BottomCart = () => {

        return <>
            <div className="Cartbottom">
                <div className="total">
                    <h3>${user.cart.totalAmount}</h3>
                </div>
                <div className="paynowbtn">
                    <Button onClick={HandlePayNow} color="secondary" className="paynowbtn" variant="contained">Pay Now</Button>
                </div>
            </div>
        </>

    }
    return (<>
        {showPayBTN && BottomCart()}
        {showNav ? navColorHandler() : showProductHandler()}

    </>)
}
export default Navbar;