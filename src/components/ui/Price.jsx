import React from 'react'

const Price = ({ salePrice, originalPrice }) => {
    return (
        <div className="game__price">
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