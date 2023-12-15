export default function ProductItem({
    productName,
    description,
    priceOfProduct,
    imgUrl
}) {

    return (
        <article className="new_cards__card">

            <img className="new_cards__card_img" src={imgUrl} alt="" />
            <h4 className="new_cards__card_title">{productName}</h4>
            <p className="new_cards__card_description">{description}</p>
            <p className="new_cards__card_price">{priceOfProduct}</p>
            <button className="new_cards__card__buyBtn">Buy</button>

        </article>

    )
}

