"use client";

import { useState } from "react";
import Image from "next/image";

type ProductImage = any;

type Props = {
  images: ProductImage[];
  alt: string;
};

export default function ProductImageGallery({ images, alt }: Props) {
  const [current, setCurrent] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const hasMultiple = images.length > 1;

  const goPrev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div>
      {/* Zoom Overlay */}
      {isZoomed && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out'
          }}
          onClick={() => setIsZoomed(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <button
              onClick={() => setIsZoomed(false)}
              style={{
                position: 'absolute',
                top: -40,
                right: 0,
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
            <Image
              src={images[current]}
              alt={alt}
              width={800}
              height={800}
              style={{ 
                width: "auto", 
                height: "auto", 
                maxWidth: "100%", 
                maxHeight: "100%", 
                objectFit: "contain" 
              }}
            />
          </div>
        </div>
      )}

      <div style={{ position: 'relative' }}>
        {hasMultiple && (
          <>
            <button
              aria-label="Previous image"
              onClick={goPrev}
              className="btn btn-outline btn-sm"
              style={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}
            >
              ‹
            </button>
            <button
              aria-label="Next image"
              onClick={goNext}
              className="btn btn-outline btn-sm"
              style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}
            >
              ›
            </button>
          </>
        )}
        <Image
          src={images[current]}
          alt={alt}
          width={640}
          height={640}
          style={{ 
            width: "100%", 
            height: "auto", 
            borderRadius: 12, 
            objectFit: "cover",
            cursor: 'zoom-in'
          }}
          onClick={() => setIsZoomed(true)}
        />
      </div>

      {hasMultiple && (
        <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                border: current === idx ? '2px solid var(--saffron-primary)' : '1px solid #ddd',
                borderRadius: 8,
                padding: 0,
                background: 'transparent',
                cursor: 'pointer'
              }}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                width={96}
                height={96}
                style={{ width: 96, height: 96, objectFit: 'cover', borderRadius: 6 }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


