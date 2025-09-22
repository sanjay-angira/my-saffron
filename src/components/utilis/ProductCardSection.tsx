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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductCardSection;