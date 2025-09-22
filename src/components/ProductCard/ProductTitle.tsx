interface ProductTitleProps {
  title: string;
}

const ProductTitle = ({ title }: ProductTitleProps) => {
    return (
        <h3 className="product-title">
          {title}
        </h3>
    );
};

export default ProductTitle;