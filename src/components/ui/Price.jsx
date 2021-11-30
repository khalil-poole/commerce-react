import React from 'react'

/* Entire function will display the sale price and original price of the games */
const Price = ({ salePrice, originalPrice }) => {
    return (
        <div className="game__price">
            {/* Lines 8 - 14, If there is a sale for a game, display the salePrice, otherwise display the originalPrice */}
            {salePrice ? (
                <><span className="game__price--normal">${originalPrice}</span>
                    ${salePrice}</>
            ) : (
                <>${originalPrice}</>
            )}
        </div>
    )
}

export default Price;