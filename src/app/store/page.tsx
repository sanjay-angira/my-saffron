"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { PRODUCTS } from "@/data/products";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "rudraksha", label: "Rudraksha" },
  { key: "sweets", label: "Sweets" },
  { key: "books", label: "Books" },
  { key: "rashi", label: "Rashi" }
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Store</h1>
          <p className="section-subtitle">Browse by category and find what resonates.</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`btn ${activeCategory === c.key ? 'btn-primary' : 'btn-outline'} btn-sm`}
              onClick={() => setActiveCategory(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.image}
              title={p.title}
              price={String(p.price)}
              originalPrice={p.originalPrice ? String(p.originalPrice) : undefined}
              rating={p.rating}
              description={p.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


