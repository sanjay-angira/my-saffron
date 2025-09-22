import { ShoppingCart } from "lucide-react";



const Button = () => {
    return (
        <button className="btn btn-primary btn-sm">
            <ShoppingCart size={16} style={{ marginRight: '0.25rem' }} />
            Add to Cart
        </button>
    );
};

export default Button;