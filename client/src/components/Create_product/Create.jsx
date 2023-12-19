import { useNavigate } from 'react-router-dom'
import * as productService from '../../services/productService'


export default function CreateProduct() {

    const navigate = useNavigate()
    const createProductSubmitHandler = async (e) => {
        e.preventDefault()

        const productData = Object.fromEntries(new FormData(e.currentTarget))
       
        await productService.create(productData)

        navigate('/gallery')
    }

    return (
        <main className="mainSection">
            <div className="accaount">
                <h2>Create Product</h2>
                <form className="card__form" onSubmit={createProductSubmitHandler} action="">
                    <label htmlFor="nameProduct">Name of product</label>
                    <input type="text" id="nameProduct" name='productName' />

                    <label htmlFor="productDescription">Product Description</label>
                    <textarea name="description" id="productDescription" cols="25" rows="5"></textarea>

                    <label htmlFor="price">Price of product</label>
                    <input type="text" id="price" name='priceOfProduct' />

                    <label htmlFor="imgUrl">Img File</label>
                    <input type="text" id="imgUrl" name='imgUrl' />
                    {/* <input type="file" id="imgUrl" accept="image/*" /> */}

                    <label htmlFor="typeOfProduct">Type of Product</label>
                    <select name="typeOfProduct" id="typeOfProduct">
                        <option value="map">Map</option>
                        <option value="card">Card</option>
                        <option value="others">Others</option>
                    </select>



                    <label htmlFor="typeOfPost">Type of Post</label>
                    <select name="typeOfPost" id="typeOfPost">
                        <option value="Upcoming">Upcoming</option>
                        <option value="ForSeal">For seal</option>

                    </select>






                    <button className="submit_btn" type="submit">Create</button>
                </form>

            </div>
        </main>
    )

}