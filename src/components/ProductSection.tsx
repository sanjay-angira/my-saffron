import ProductCard from "./ProductCard";

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
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className="section-subtitle">{subtitle}</p>
          )}
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
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