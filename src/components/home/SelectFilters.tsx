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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 180,
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
    const showselect = useSelector(categoryStates);
    const dispatch = useDispatch();



    const handleselects = () => {

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
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" color="secondary">category:</FormLabel>
                                <RadioGroup
                                    onChange={(e) => { setCategoryType(e.target.value) }}
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={0}
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="0" control={<Radio color="secondary" />} label="All" />
                                    <FormControlLabel value="1" control={<Radio color="secondary" />} label="Clothes" />
                                    <FormControlLabel value="2" control={<Radio color="secondary" />} label="Electronics" />
                                    <FormControlLabel value="3" control={<Radio color="secondary" />} label="Furniture" />
                                    <FormControlLabel value="4" control={<Radio color="secondary" />} label="Shoes" />
                                    <FormControlLabel value="5" control={<Radio color="secondary" />} label="Others" />
                                </RadioGroup>
                                <Button onClick={handleselects} color="secondary" className="logoutbtn" variant="contained">
                                filter
                            </Button>
                            </FormControl>

                            

                        </ul>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}
