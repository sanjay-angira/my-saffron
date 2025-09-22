
import Link from "next/link";
import Button from "../utilis/Button";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductTitle from "./ProductTitle";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  description?: string;
  id?: string;
}

const ProductCard = ({ image, title, price, originalPrice, rating, description, id }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className="product-card">
        <ProductImage
          image={image}
          title={title}
        />

        <div className="product-content">
          <ProductTitle
            title={title}
          />

          <ProductDescription
            description={description}
          />

          <ProductRating
            rating={rating}
          />

          <div className="product-footer">
            <ProductPrice
              price={price}
              originalPrice={originalPrice}
            />
            <Button />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;