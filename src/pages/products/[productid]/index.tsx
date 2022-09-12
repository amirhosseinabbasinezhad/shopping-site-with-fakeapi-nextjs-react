
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SingleProduct from "../../../components/singleProduct/SingleProduct";
import { fechSingleProduct } from "../../../components/store/productsSlice";

const products: NextPage = () => {
    const router = useRouter();
    const { productid } = router.query;

    const [isloading, setIsloading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        if (!productid) {
            return ;
        }
        else {
            fechSingleProduct(dispatch, productid);
            setIsloading(false)
            console.log(productid);
            
        }

    }, [productid])

    return (<>
        {!isloading &&
            <SingleProduct pid={productid} />}
    </>)
}
export default products;