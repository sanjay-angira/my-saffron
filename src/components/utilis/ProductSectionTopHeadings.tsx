

interface ProductSectionHeadingProps {
    title: string;
    subtitle?: string;
}

const ProductSectionHeading = ({ title, subtitle }: ProductSectionHeadingProps) => {
    return (
        <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && (
                <p className="section-subtitle">{subtitle}</p>
            )}
        </div>
    );
};

export default ProductSectionHeading;