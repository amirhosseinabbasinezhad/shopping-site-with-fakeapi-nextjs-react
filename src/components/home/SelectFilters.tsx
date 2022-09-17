import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { categoryStates, categoryAction } from '../store/categorySlice';
import { productAction } from '../store/productsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
const style = {
    position: 'absolute' as 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 300,
    bgcolor: '#fff',
    overflowY: "scroll",
    scrollbarWidth: "none",
    borderRadius: '10px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
};

export default function SelectFilters() {
    const [categoryType, setCategoryType] = useState<string>("0");
    const [open, setOpen] = useState(false);
    const [limit, setLimit] = useState<string>("10");
    const showselect = useSelector(categoryStates);
    const dispatch = useDispatch();
    const handleselects = () => {
        dispatch(productAction.setLimit(limit));
        dispatch(productAction.setSelects(categoryType));
        dispatch(productAction.setPage(1));
        handleClose();


    }
    const handleClose = () => {
        setOpen(false);
        dispatch(categoryAction.showSelectHandler())

    }
    useEffect(() => {
        setOpen(showselect.showSelects);
    }, [showselect.showSelects])
    return (
        <div>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className="selectmodal">
                        <ul>

                            <div className="selecttwo">
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" color="secondary">limit products on page:</FormLabel>
                                    <RadioGroup
                                        onChange={(e) => { setLimit(e.target.value) }}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="10"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="5" control={<Radio color="secondary" />} label="5" />
                                        <FormControlLabel value="10" control={<Radio color="secondary" />} label="10" />
                                        <FormControlLabel value="20" control={<Radio color="secondary" />} label="20" />
                                        <FormControlLabel value="30" control={<Radio color="secondary" />} label="30" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div className="filters">
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" color="secondary">category:</FormLabel>
                                    <RadioGroup
                                        onChange={(e) => { setCategoryType(e.target.value) }}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue={"0"}
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="0" control={<Radio color="secondary" />} label="All" />
                                        <FormControlLabel value="1" control={<Radio color="secondary" />} label="Clothes" />
                                        <FormControlLabel value="2" control={<Radio color="secondary" />} label="Electronics" />
                                        <FormControlLabel value="3" control={<Radio color="secondary" />} label="Furniture" />
                                        <FormControlLabel value="4" control={<Radio color="secondary" />} label="Shoes" />
                                        <FormControlLabel value="5" control={<Radio color="secondary" />} label="Others" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <Button onClick={handleselects} color="secondary" className="logoutbtn" variant="contained">
                                filter
                            </Button>
                        </ul>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
