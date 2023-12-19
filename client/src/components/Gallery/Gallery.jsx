import { useEffect, useState } from 'react'

import * as productService from '../../services/productService'
import ProductItem from '../Product_item/Product_item'


export default function Gallery() {

    const [products, setProduct] = useState([])

    useEffect(() => {
        productService.getAll()
            .then(result => setProduct(result))
    },[])

    return (
        <main className="mainSection">
            <div className="heroSection">
                <div className="newCards_section">
                    <h2 className="newCards_section__heading home_heading">All CArds</h2>
                    <section className="new_cards_conteiner">
                        {products.map(product =>(
                            <ProductItem key={product._id} {...product}/>
                        ))}
                    </section>
                </div>

            </div>




        </main>
    )

}