import ProductCard from "@/components/ProductCardComponents/ProductCard";
import ProductSectionHeading from "./ProductSectionHeadings";
import ProductCardSection from "./ProductCardSection";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: any;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  benefits?: string[];
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

const Section = ({ title, subtitle, products, viewAllLink }: ProductSectionProps) => {
  return (
    <section className="products-section">
      <div className="container">
        <ProductSectionHeading
          title={title}
          subtitle={subtitle}
        />
        <ProductCardSection
          products={products}
        />
        {viewAllLink && (
          <div className="text-center mt-10">
            <button className="btn btn-outline btn-lg">
              View All {title}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;