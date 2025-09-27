import Image from "next/image";
interface ProductImageProps {
    image: string;
    title: string;
}

const ProductImage = ({ image, title }: ProductImageProps) => {
    return (
        <div className="product-image-wrapper">
            <Image
                src={image}
                alt={title}
                className="product-image"
                width={300}
                height={300}
            />
        </div>
    );
}

export default ProductImage;