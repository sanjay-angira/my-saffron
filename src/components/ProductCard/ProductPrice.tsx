interface ProductPriceProps {
    price: string;
    originalPrice?: string;
}

const ProductPrice = ({ price, originalPrice }: ProductPriceProps) => {
    return (
        <div className="product-price">
            <span className="price-current">₹{price}</span>
            {originalPrice && (
                <span className="price-original">₹{originalPrice}</span>
            )}
        </div>
    );
};

export default ProductPrice;