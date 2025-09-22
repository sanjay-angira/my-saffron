import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSectionHeading from "./ProductSectionTopHeadings";

interface Product {
    id: string;
    image: any;
    title: string;
    price: string;
    originalPrice?: string;
    rating: number;
    description?: string;
}

interface ProductCardSectionProps {
    products: Product[];
}

const ProductCardSection = ({ products }: ProductCardSectionProps) => {
    return (
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductCardSection;