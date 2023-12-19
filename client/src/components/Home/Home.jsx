import { useEffect, useState } from "react"

import * as productService from '../../services/productService'
import ProductItem from "../Product_item/Product_item"

export default function Home(){


    const [newProduct, setNewProduct] = useState([])
    const [upComingProduct, setupComingProduct] = useState([])
    
    useEffect(() => {

        productService.getAll()
            .then(result => {
                const newProductResult = result.filter(product => product.typeOfPost == 'ForSeal').slice(-5)
                const upComingProductResult = result.filter(product => product.typeOfPost == 'Upcoming').slice(-5)

                setNewProduct(newProductResult)
                setupComingProduct(upComingProductResult)
                
            })
    },[])


    return(

        <main className="mainSection">
        <div className="heroSection">
            <div className="newCards_section">
                <h2 className="newCards_section__heading home_heading">New Cards</h2>
                <section className="new_cards_conteiner">
                    {newProduct.map(product => <ProductItem key={product._id} {...product} />)}
                </section>
            </div>
            <div>
                <h2 className="home_heading">upcoming charging</h2>
                <section className="new_cards_conteiner">
                {upComingProduct.map(product => <ProductItem key={product._id} {...product} />)}
                </section>
            </div>
        </div>




    </main>
    )
}