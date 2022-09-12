import FilterProductsSlider from "./FilterProductsSlider";
import Slider from "./Slider";
import Header from "./Header";
import Products from "./Products";
import SelectFilters from "./SelectFilters";

const Home = () => {



    return (<>
        <div style={{ padding: "20px 20px 5px 20px" }} className="homepage">
            <SelectFilters />
            <Header />
            <Slider />

            <FilterProductsSlider />
            <Products />


        </div>



    </>)
}
export default Home;