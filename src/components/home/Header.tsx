import Avatar from '@mui/material/Avatar';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { useSelector } from 'react-redux';
import { userstates } from '../store/userSlice';
import SearchBar from "./Searcbar"
import IconButton from '@mui/material/IconButton';

const Header = () => {
    const user = useSelector(userstates)

    return (<>

        <div className="header_homepage">
            <div className="menubtn">
                <IconButton sx={{ p: '10px' }} aria-label="menu" >
                    <WidgetsRoundedIcon color="secondary" />
                </IconButton>
            </div>
            <div className="nametext"> <h4>Hellow {user.userInfo.name}</h4><h5>Tehran.IRAN</h5></div>
            <div className="imageframe">
                <Avatar alt="Travis Howard" src={user.userInfo.avatar} />
            </div>
        </div>
        <div className="searchbar">
            <SearchBar />

        </div>



    </>)
}
export default Header;