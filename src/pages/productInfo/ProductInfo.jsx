import React from 'react';
import './productInfo.scss';
import {Stack} from "@mui/material";
import Paper from "@mui/material/Paper";



const ProductInfo = () => {
    return (
        <div className="wrapper_info">
            <h1>Inventory State</h1>
            <Stack direction="row" spacing={2}>
                <Paper
                    elevation={3}
                    sx={{width:"20%",backgroundColor:"red"}}>
                    hello
                </Paper>
            </Stack>
        </div>
    );
};

export default ProductInfo;
