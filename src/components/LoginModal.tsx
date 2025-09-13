import { useState } from 'react';
import { X } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div 
      className={`modal-backdrop ${isClosing ? 'fadeOut' : ''}`}
      onClick={handleClose}
      style={{ animation: isClosing ? 'fadeOut 0.3s ease-out' : 'fadeIn 0.3s ease-out' }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: isClosing ? 'scaleOut 0.3s ease-out' : 'scaleIn 0.3s ease-out' }}
      >
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button className="close-button" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="form-input"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="form-input"
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle */}
        <div className="modal-toggle">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              className="link-button"
              onClick={() => setIsLogin(!isLogin)}
              style={{ marginLeft: '0.25rem' }}
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;