
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

        <div className="flex flex-col gap-1 p-3 lg:p-5">
          <ProductTitle
            title={title}
          />

          {/* <ProductDescription
            description={description}
          /> */}

          <ProductRating
            rating={rating}
          />

          <div className="flex flex-col items-center md:flex-row md:justify-between">
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