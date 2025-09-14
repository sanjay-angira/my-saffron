const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-section">
                        <div className="logo" style={{ marginBottom: '1rem' }}>
                            <div className="logo-icon">🕉</div>
                            <span className="logo-text">Sacred Store</span>
                        </div>
                        <p style={{ color: 'var(--gray-medium)' }}>
                            Your trusted source for authentic spiritual products, blessed items, and sacred literature.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Products</h3>
                        <ul>
                            <li><a href="#">Rudraksha</a></li>
                            <li><a href="#">Spiritual Books</a></li>
                            <li><a href="#">Divine Sweets</a></li>
                            <li><a href="#">Rashi Items</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Social Media</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Sacred Store. All rights reserved. Made with devotion 🙏</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;