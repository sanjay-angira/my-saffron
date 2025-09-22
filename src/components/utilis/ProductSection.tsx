import ProductCard from "@/components/ProductCard/ProductCard";
import ProductSectionHeading from "./ProductSectionTopHeadings";
import ProductCardSection from "./ProductCardSection";

interface Product {
  id: string;
  image: any;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  description?: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductSection = ({ title, subtitle, products, viewAllLink }: ProductSectionProps) => {
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
          <div className="text-center">
            <button className="btn btn-outline btn-lg">
              View All {title}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;