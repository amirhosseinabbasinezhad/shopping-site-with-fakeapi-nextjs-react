
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Products from "../../../components/home/Products";
import { productAction } from "../../../components/store/productsSlice";


const Furniture = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productAction.setSelects("3"))
    }, [])
    return <>
        <div className="furniture" style={{ padding: "20px 20px 5px 20px" }}>
            <Products />
        </div>
    </>

}
export default Furniture;