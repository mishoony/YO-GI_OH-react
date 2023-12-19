import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as productService from '../../services/productService'



export default function EditProduct() {

    const navigate = useNavigate()
    const { productId } = useParams()
    const [product, setProduct] = useState({
        productName: '',
        description: '',
        priceOfProduct: '',
        imgUrl: '',
        typeOfProduct: '',
        typeOfPost: '',

    })

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                setProduct(result)
            })

    }, [productId])

    const editSubmitHandler = async (e) =>{
        e.preventDefault()

        const values = Object.fromEntries(new FormData(e.currentTarget))

        console.log(values)

        try{
            await productService.edit(productId,values)
            navigate('/gallery')
        }catch(error){
         console.log(error)
        }
        
    }

    const onChange = (e) =>{
        setProduct(state => ({
            ...state,
            [e.target.name]:[e.target.value]
        }))
    } 

    return(
        <main className="mainSection">
            <div className="accaount">
                <h2>Create Product</h2>
                <form className="card__form" onSubmit={editSubmitHandler} action="">
                    <label htmlFor="nameProduct">Name of product</label>
                    <input type="text" id="nameProduct" name='productName' onChange={onChange} value={product.productName} />

                    <label htmlFor="productDescription">Product Description</label>
                    <textarea name="description" id="productDescription" cols="25" rows="5" onChange={onChange} value={product.description}></textarea>

                    <label htmlFor="price">Price of product</label>
                    <input type="text" id="price" name='priceOfProduct' onChange={onChange} value={product.priceOfProduct} />

                    <label htmlFor="imgUrl">Img File</label>
                    <input type="text" id="imgUrl" name='imgUrl' onChange={onChange} value={product.imgUrl} />
                    {/* <input type="file" id="imgUrl" accept="image/*" /> */}

                    <label htmlFor="typeOfProduct">Type of Product</label>
                    <select name="typeOfProduct" id="typeOfProduct" onChange={onChange} value={product.typeOfProduct}>
                        <option value="map">Map</option>
                        <option value="card">Card</option>
                        <option value="others">Others</option>
                    </select>



                    <label htmlFor="typeOfPost">Type of Post</label>
                    <select name="typeOfPost" id="typeOfPost" onChange={onChange} value={product.typeOfPost}>
                        <option value="Upcoming">Upcoming</option>
                        <option value="ForSeal">For seal</option>

                    </select>






                    <button className="submit_btn" type="submit">Edit</button>
                </form>

            </div>
        </main>
    )
}