import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  description?: string;
}

const ProductCard = ({ image, title, price, originalPrice, rating, description }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Image
          src={image} 
          alt={title}
          className="product-image"
          width={300}
          height={300}
        />
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        
        {description && (
          <p className="product-description">{description}</p>
        )}
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="star"
              size={16}
              style={{ 
                color: i < rating ? 'var(--saffron-primary)' : '#ccc',
                fill: i < rating ? 'var(--saffron-primary)' : 'none'
              }}
            />
          ))}
          <span className="rating-text">({rating}.0)</span>
        </div>
        
        <div className="product-footer">
          <div className="product-price">
            <span className="price-current">₹{price}</span>
            {originalPrice && (
              <span className="price-original">₹{originalPrice}</span>
            )}
          </div>
          
          <button className="btn btn-primary btn-sm">
            <ShoppingCart size={16} style={{ marginRight: '0.25rem' }} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;