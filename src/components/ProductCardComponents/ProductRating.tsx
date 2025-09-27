import { Star} from "lucide-react";


interface ProductCardProps {
    rating: number;
}

const ProductRating = ({ rating}: ProductCardProps) => {
    return (
        <div className="product-rating">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className="star"
                    size={16}
                    style={{
                        width: 12,
                        height: 12,
                        color: i < rating ? 'var(--saffron-primary)' : '#ccc',
                        fill: i < rating ? 'var(--saffron-primary)' : 'none'
                    }}
                />
            ))}
            <span className="rating-text">({rating}.0)</span>
        </div>
    );
};

export default ProductRating;