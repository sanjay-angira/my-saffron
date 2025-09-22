import { Phone, Mail, MapPin, Clock } from "lucide-react";

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="top-header-content">
                    <div className="top-header-left">
                        <div className="top-header-item">
                            <Phone size={16} className="top-header-icon" />
                            <span className="top-header-text">+91 9876543210</span>
                        </div>
                        <div className="top-header-item">
                            <Mail size={16} className="top-header-icon" />
                            <span className="top-header-text">info@sacredstore.com</span>
                        </div>
                    </div>
                    <div className="top-header-right">
                        <div className="top-header-item">
                            <MapPin size={16} className="top-header-icon" />
                            <span className="top-header-text">Delhi, India</span>
                        </div>
                        <div className="top-header-item">
                            <Clock size={16} className="top-header-icon" />
                            <span className="top-header-text">Mon-Sat: 9AM-8PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
