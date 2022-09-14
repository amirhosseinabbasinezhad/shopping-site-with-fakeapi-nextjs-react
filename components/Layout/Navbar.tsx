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
    const router = useRouter();
    const handleAddToCart = () => {
        const cartArray = user.cart
        carthandler(dispatch, curentproduct.product, user.cart, 1);

        curentproduct.product;

    }
    useEffect(() => {
        if (router.pathname.includes("products/")) {
            setShowNav(false)
        }
        else {
            setShowNav(true)
        }
    }, [router.pathname]);
    const showProductHandler = () => {
        return <>
            <div className="productbottom">
                <Button onClick={handleAddToCart} color="secondary" className="Buybtn" variant="contained">Buy Now</Button>
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
            <div className='navbar'>
                <Link href={"/home"}><HomeIcon color={url.includes("/home") ? "secondary" : "disabled"} /></Link>
                <Link href={"/info"}><SubjectOutlinedIcon color={url.includes("/info") ? "secondary" : "disabled"} /></Link>
                <Link href={"/cart"}><ShoppingCartOutlinedIcon color={url.includes("/cart") ? "secondary" : "disabled"} /></Link>
                <Link href={`/user/${user.userInfo.name}`}><PersonOutlineSharpIcon color={url.includes("/user") ? "secondary" : "disabled"} /></Link>
            </div>
        </>

    }
    return (<>
        {showNav ? navColorHandler() : showProductHandler()}
    </>)
}
export default Navbar;