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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mb-12 items-stretch">
            {products.map((product) => (
                <div key={product.id} className="h-full">
                    <ProductCard {...product} />
                </div>
            ))}
        </div>
    );
};

export default ProductCardSection;