import { Link } from "react-router-dom";

export default function ProductItem({
    productName,
    description,
    priceOfProduct,
    imgUrl,
    _id
}) {

    return (
        <article className="new_cards__card">
            <Link to='/gallery'>
            <img className="new_cards__card_img" src={imgUrl} alt="" />
            </Link>
            <h4 className="new_cards__card_title">{productName}</h4>
            <p className="new_cards__card_description">{description}</p>
            <p className="new_cards__card_price">{priceOfProduct}</p>
            <Link to={`/product/${_id}`}><button className="new_cards__card__buyBtn">Ditails</button></Link>
            {/* <button className="new_cards__card__buyBtn">Buy</button> */}

        </article>

    )
}

