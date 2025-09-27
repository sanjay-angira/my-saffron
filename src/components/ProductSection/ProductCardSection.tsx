import ProductCard from "@/components/ProductCardComponents/ProductCard";
import { ProductCard1 } from "@/components/ProductCardComponents2/ProductCard";

export interface product {
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

interface ProductCardSectionProps {
    products: product[]
}


const ProductCardSection = ({ products }: ProductCardSectionProps) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => {
                return (
                    <div key={index} className="flex flex-col">
                        <div className="flex-1">
                            <ProductCard1
                                product={product}
                            />
                        </div>
                    </div>
                );
            })}
        </div>

    );
};

export default ProductCardSection;