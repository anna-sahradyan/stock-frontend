import React, {useRef} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './addProduct.scss'
import {CardMedia, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


const ProductForm = ({
                         saveProduct,
                         handleInputChange,
                         handleImageChange,
                         product,
                         productImage,
                         imagePrev,
                         description,
                         setDescription
                     }) => {
    const filePiker = useRef(null)
    const handleClick = () => {
        filePiker.current.click();
    }

    return (
        <div className="formPart">
            <Paper elevation={3}
                   sx={{
                       width: '100%'
                   }}>
                <form onSubmit={saveProduct}>
                    <div className={'input_part'}>
                        <input
                            ref={filePiker}
                            type="file"
                            name="image"
                            multiple={false}
                            onChange={(e) => handleImageChange(e)}
                        />
                        <Button variant="contained" onClick={handleClick}>Pick file</Button>
                    </div>
                    <CardMedia component="img"
                               image={productImage ? URL.createObjectURL(productImage) : null}
                               title={product.name}
                               style={{height: productImage ? '400px' : '0'}}
                    />
                    {!productImage &&
                        <p style={{marginLeft: '5px', color: "#232F85"}}>No Image set for this product</p>}
                    <div className="input_part">
                        <TextField className={"-bottom-12"} name="name" variant="outlined"
                                   label="Product Name"
                                   fullWidth
                                   onChange={handleInputChange}/>
                    </div>
                    <div className="input_part">
                        <TextField className={"-bottom-12"} name="category" variant="outlined"
                                   label="Product Category"
                                   fullWidth
                                   onChange={handleInputChange}/>
                    </div>
                    <div className="input_part">
                        <TextField className={"-bottom-12"} name="price" variant="outlined"
                                   label="Product Price"
                                   fullWidth
                                   onChange={handleInputChange}/>
                    </div>
                    <div className="input_part">
                        <TextField className={"-bottom-12"} name="quantity" variant="outlined"
                                   label="Product Quantity"
                                   fullWidth
                                   onChange={handleInputChange}/>
                    </div>
                    <div className={'input_part'}>
                        <label htmlFor="Product-Description" style={{color: "#666666", display: "flex"}}>Product
                            Description</label>
                        <ReactQuill theme="snow" value={description} onChange={setDescription}/>
                    </div>
                    <div className={'input_part'}>
                        <Button type="submit" variant="contained"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%"
                                }}>Save Product</Button>
                    </div>
                </form>
            </Paper>
        </div>

    )
        ;
};

export default ProductForm;