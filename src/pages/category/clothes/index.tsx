
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";
import { productAction } from "../../../components/store/productsSlice";



const Clothes = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productAction.setSelects("1"))
    }, [])
    return <>
        <div className="clothes" style={{ padding: "20px 20px 5px 20px" }}>
            <Products />
        </div>
    </>

}
export default Clothes;