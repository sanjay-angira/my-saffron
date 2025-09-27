interface ProductDiscriptionProps {
    description?: string;
}

const ProductDescription = ({ description }: ProductDiscriptionProps) => {
    return (
        <div>
            {description && (
                <p className="product-description">{description}</p>
            )}
        </div>
    );
};

export default ProductDescription;