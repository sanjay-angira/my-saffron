import { notFound } from "next/navigation";
import { Star, ShoppingCart } from "lucide-react";
import { getProductById, PRODUCTS } from "@/data/products";
import Accordion, { type AccordionItem } from "@/components/Accordion";
import ReviewSection from "@/components/ReviewSection";
import ProductSection from "@/components/utilis/ProductSection";
import ProductImageGallery from "@/components/utilis/ProductImageGallery";
import rudrakshaImg from "@/assets/rudraksha-collection.jpg";
import sweetsImg from "@/assets/spiritual-sweets.jpg";
import booksImg from "@/assets/spiritual-books.jpg";
import rashiImg from "@/assets/rashi-logos.jpg";
import heroImg from "@/assets/spiritual-hero.jpg";

type PageProps = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductById(params.id);
  if (!product) return notFound();

  const { title, image, price, originalPrice, rating, description } = product;

  const baseImages = Array.isArray(image) ? image : [image];
  const fallbackByCategory: Record<string, any[]> = {
    rudraksha: [rudrakshaImg, heroImg],
    sweets: [sweetsImg, heroImg],
    books: [booksImg, heroImg],
    rashi: [rashiImg, heroImg]
  };
  const categoryFallbacks = fallbackByCategory[product.category ?? ""] ?? [heroImg, sweetsImg];
  const images = baseImages.length > 1 ? baseImages : [baseImages[0], ...categoryFallbacks].slice(0, 3);

  const related = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)
    .map(p => ({
      id: p.id,
      image: p.image as any,
      title: p.title,
      price: String(p.price),
      originalPrice: p.originalPrice ? String(p.originalPrice) : undefined,
      rating: p.rating,
      description: p.description,
    }));

  return (
    <div className="container" style={{ paddingTop: "2rem", paddingBottom: "3rem" }}>
      <div className="product-detail-grid">
        <div className="product-detail-image">
          <ProductImageGallery images={images as any[]} alt={title} />
        </div>

        <div className="product-detail-content">
          <h1 className="section-title" style={{ marginBottom: "0.5rem" }}>{title}</h1>

          <div className="product-rating" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                style={{ 
                  color: i < (rating ?? 0) ? 'var(--saffron-primary)' : '#ccc',
                  fill: i < (rating ?? 0) ? 'var(--saffron-primary)' : 'none'
                }}
              />
            ))}
            <span className="rating-text">({rating}.0)</span>
          </div>

          <div className="product-price" style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16 }}>
            <span className="price-current" style={{ fontSize: 28, fontWeight: 700 }}>₹{price}</span>
            {originalPrice && (
              <span className="price-original" style={{ textDecoration: "line-through", color: "#888" }}>₹{originalPrice}</span>
            )}
          </div>

          {description && (
            <p className="product-description" style={{ marginBottom: 24 }}>{description}</p>
          )}

          <div style={{ display: "flex", gap: 12 }}>
            <button className="btn btn-primary btn-lg">
              <ShoppingCart size={18} style={{ marginRight: 8 }} />
              Add to Cart
            </button>
            <button className="btn btn-outline btn-lg">Buy Now</button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section" style={{ marginTop: "3rem" }}>
        <h2 className="section-title" style={{ marginBottom: "1rem" }}>Frequently Asked Questions</h2>
        <Accordion
          items={[
            { id: "auth", question: "Is this product authentic and blessed?", answer: "Yes, every item is sourced from trusted vendors and undergoes a careful quality check. Spiritual items are handled with devotion and respect." },
            { id: "ship", question: "How long does delivery take?", answer: "Orders are typically dispatched within 24-48 hours and delivered in 3-7 business days depending on your location." },
            { id: "return", question: "What is the return policy?", answer: "Unused items in original condition can be returned within 7 days of delivery. Certain sacred items may be non-returnable once consecrated." },
            { id: "care", question: "How should I care for this product?", answer: "Keep it clean and dry. Avoid chemical exposure. For beads and malas, wipe gently with a soft cloth and store in a clean pouch." }
          ] as AccordionItem[]}
        />
      </section>

      {/* Review Section */
      }
      <ReviewSection productId={params.id} />

      {related.length > 0 && (
        <div style={{ marginTop: "3rem" }}>
          <ProductSection title="Related Products" products={related} />
        </div>
      )}
    </div>
  );
}


