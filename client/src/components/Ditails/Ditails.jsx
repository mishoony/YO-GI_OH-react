import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import * as productService from '../../services/productService'
import AuthContext from "../../context/authContext"
import { pathToUrl } from "../../utils/PathToUrl"

export default function Ditails() {

    const navigate = useNavigate()
    const { email, userId } = useContext(AuthContext)
    const [product, setProduct] = useState({})
    const { productId } = useParams()


    useEffect(() => {

        productService.getOne(productId).then(setProduct)

    }, [productId])


    const deleteHandler = async () => {

        await productService.remove(productId)

        navigate('/gallery')
    }

    const closeHandler = ()=> navigate('/gallery')

    return (

        <div className="product_conteiner">
            <img className="img_of_product" src={product.imgUrl} alt="" />
            <h2 className="name_of_product">{product.productName}</h2>

            <ul className="info_list">
                <li>
                    <p className="price">
                        price:<span>{product.priceOfProduct}</span>
                    </p>
                </li>
                <li>
                    <p className="description">{product.description}
                    </p>
                </li>
                <li className="createAt">Create At: <span>42.54.2451</span></li>
            </ul>
            {userId === product._ownerId && (

                <div className="btn_conteiner">
                    <button onClick={deleteHandler} className="del">Delet</button>
                   <Link to={pathToUrl("/product/:productId/edit",{productId})}> <button>Edit</button></Link>
                    {/* <button>like</button> */}
                </div>
            )}
            <button onClick={closeHandler}>Close</button>

            
            {/* <button>Buy</button>
             */}
        </div>
    )
}