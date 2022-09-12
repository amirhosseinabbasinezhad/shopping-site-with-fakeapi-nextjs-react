
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { categoryAction } from '../store/categorySlice';
import { useDispatch } from 'react-redux';
const SearchBar = () => {
    const dispatch = useDispatch();
    const handleshowFilter = () => {
        dispatch(categoryAction.showSelectHandler())
    }
    return (<>
        <div className="searcharea">

            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon color="disabled" />
            </IconButton>

            <InputBase
                sx={{ ml: 1, flex: 1, width: "250px" }}

                placeholder=""
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </div>
        <div className="menubtn" onClick={handleshowFilter}>
            <IconButton sx={{ p: '10px' }}   >
                <TuneIcon color="secondary" />
            </IconButton>
        </div>

    </>)
}
export default SearchBar;