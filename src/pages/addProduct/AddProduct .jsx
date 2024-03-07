import React, {useRef, useState} from 'react';
import FileBase from "react-file-base64";
import Paper from '@mui/material/Paper';
import './addProduct.scss';
import Button from '@mui/material/Button';
import {toast} from "react-toastify";
import {TextField} from "@mui/material";
import TextEditor from "./TextEditor";

const AddProduct = () => {
    const [selectedFile, setSelectedFile] = useState();
    const filePiker = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        quantity: ''
    });

    const handleClick = () => {
        filePiker.current.click();

    }
    const handleChange = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async () => {
        if (!selectedFile) {
            toast.info("Please select a file");
            return;
        }

        const newFormData = new FormData();
        newFormData.append('file', selectedFile);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpload();

    }
    return (
        <>
            <div className="addProduct">
                <h1>Add New Product</h1>
                <div className="formPart">
                    <Paper elevation={3}
                           sx={{
                               width: '100%'
                           }}>
                        <form onSubmit={handleSubmit}>
                            <div className={'input_part'}>
                                <input
                                    ref={filePiker}
                                    type="file"
                                    multiple={true}
                                    onChange={handleChange}
                                    // onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                                />
                                <Button variant="contained" onClick={handleClick}>Pick file</Button>
                            </div>

                            <div className="input_part">
                                <TextField className={"-bottom-12"} name="product name" variant="outlined"
                                           label="Product Name"
                                           fullWidth
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                            </div>
                            <div className="input_part">
                                <TextField className={"-bottom-12"} name="product category" variant="outlined"
                                           label="Product Category"
                                           fullWidth
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                            </div>
                            <div className="input_part">
                                <TextField className={"-bottom-12"} name="product price" variant="outlined"
                                           label="Product Price"
                                           fullWidth
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                            </div>
                            <div className="input_part">
                                <TextField className={"-bottom-12"} name="product quantity" variant="outlined"
                                           label="Product Quantity"
                                           fullWidth
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                            </div>

                            <div className={'input_part'}>
                               <TextEditor/>
                            </div>
                            <div className={'input_part'}>
                                <Button  type="submit" variant="contained"
                                sx={{
                                    display:"flex",
                                    justifyContent:"center",
                                    width:"100%"
                                }}>Save Product</Button>
                            </div>
                        </form>
                    </Paper>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
