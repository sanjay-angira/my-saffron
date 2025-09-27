import { formatPrice } from "../utilis/utiliti";


interface ProductPriceProps {
    price: string;
    originalPrice?: string;
}

const ProductPrice = ({ price, originalPrice }: ProductPriceProps) => {
    return (
        <div className="product-price">
            <span className="price-current">{formatPrice(price)}</span>
            {originalPrice && (
                <span className="price-original">{formatPrice(originalPrice)}</span>
            )}
        </div>
    );
};

export default ProductPrice;