'use client'
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import "./ProductCard.css";
import { useState } from "react";


export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    isNew?: boolean;
    isFeatured?: boolean;
    tags?: string[];
    benefits?: string[];
}

export interface ProductCardProps {
    product: Product;
    className?: string;
    onAddToCart?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
    onWishlist?: (product: Product) => void;
}
export const ProductCard1 = ({ product, className, onAddToCart, onQuickView, onWishlist }: ProductCardProps) => {
    console.log("productproduct",product);
    

    const [cart, setCart] = useState<Product[]>([]);
    const handleAddToCart = (product: Product) => {
        setCart(prev => [...prev, product]);
        // toast.success(`${product.name} added to your sacred collection!`, {
        //     description: `$${product.price} • ${product.category}`,
        // });
    };

    const handleWishlist = (product: Product) => {
        // toast.success(`${product.name} added to wishlist`, {
        //     description: "You'll be notified of any updates",
        // });
    };

    const handleQuickView = (product: Product) => {
        // toast.info(`Quick view: ${product.name}`, {
        //     description: product.description,
        // });
    };

    return (
        <div className={`product-card-1 ${className || ''}`}>
            {/* Image Container */}
            <div className="image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />

                {/* Badges */}
                <div className="badges">
                    {product.isNew && (
                        <span className="badge new">New</span>
                    )}
                    {product.originalPrice && (
                        <span className="badge sale">
                            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                    <button
                        className="action-btn"
                        onClick={() => onWishlist?.(product)}
                    >
                        <Heart />
                    </button>
                    <button
                        className="action-btn"
                        onClick={() => onQuickView?.(product)}
                    >
                        <Eye />
                    </button>
                </div>

                {/* Add to Cart Button */}
                <div className="add-to-cart-container">
                    <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart?.(product)}
                    >
                        <ShoppingCart />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="content">
                <div className="category">{product.category}</div>

                <h3 className="product-name">{product.name}</h3>

                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`star ${i < Math.floor(product.rating) ? 'filled' : 'empty'}`}
                        />
                    ))}
                    <span className="review-count">({product.reviewCount})</span>
                </div>

                <div className="price-section">
                    <div className="prices">
                        <span className="current-price">${product.price}</span>
                        {product.originalPrice && (
                            <span className="original-price">${product.originalPrice}</span>
                        )}
                    </div>
                    <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                    </div>
                </div>
            </div>
        </div>
    );
};