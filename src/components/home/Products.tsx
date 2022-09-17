import Product from "./Product";
import { useSelector } from "react-redux";
import { productAction, productslicestate } from "../store/productsSlice";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fechData } from "../store/productsSlice";
const Products = () => {
    //redux
    const productsstates = useSelector(productslicestate);
    const dispatch = useDispatch()
    //state
    const [page, setpage] = useState<number>(1);
    //useeffects
    useEffect(() => {
        dispatch(productAction.setPage(page));
    }, [page]);
    useEffect(() => {
        fechData(dispatch, productsstates.categoryapi, productsstates.page - 1, productsstates.Limit);
        setpage(productsstates.page)
    }, [productsstates.page, productsstates.categoryapi, productsstates.Limit])
    //functions
    const handelPrevPage = (Event: React.FormEvent) => {
        Event.preventDefault();
        if (page > 1) {
            setpage(page - 1)
        }

    }
    const handelNextPage = (Event: React.FormEvent) => {
        Event.preventDefault()
        setpage(page + 1)
    }
    const productShow = productsstates.products.map(
        (product: {
            id: number,
            title: string,
            price: number,
            description: string,
            category: string,
            images: string[],
            rating: {
                rate: number,
                count: number,
            },
        }) => {

            return (
                <Product id={product.id} key={product.id} title={product.title} price={product.price} image={product.images[0]} />
            )
        });
    return (<>
        <div className="products">
            {productShow}
        </div>
        <div className="row bottompaging">
            <IconButton disableRipple={page <= 1} onClick={(e) => { handelPrevPage(e) }} sx={{ p: '10px' }}>
                <ArrowBackIosNewIcon color={page <= 1 ? "disabled" : "secondary"} />
            </IconButton>
            <h5>{page}</h5>
            <IconButton onClick={(e) => { handelNextPage(e) }} sx={{ p: '10px' }}>
                <ArrowForwardIosIcon color="secondary" />
            </IconButton>
        </div>
    </>)
}
export default Products;