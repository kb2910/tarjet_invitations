import { useState, useEffect } from 'react';
import { Card } from './Card';
import { Hearts } from './Hearts';
import './Invitation.css';

function FallingFlowers() {
  const flowers = Array.from({ length: 30 });
  return (
    <div className="falling-petals-container">
      {flowers.map((_, i) => (
        <div 
          key={i} 
          className="falling-flower"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 4 + 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `scale(${Math.random() * 0.5 + 0.8}) rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
}

export function Envelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = "Tengo algo lindo que decirte...";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsLoading(false);
        }, 1200); // Wait a bit after typing finishes
      }
    }, 80); // Speed of typing

    return () => clearInterval(typingInterval);
  }, []);

  const toggleEnvelope = () => {
    setIsOpen(true); // Solo permite abrir
  };

  if (isLoading) {
    return (
      <div className="invitation-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', width: '100vw', margin: 0, padding: 0 }}>
        <div className="loading-screen">
          <h1 className="loading-text">
            {typedText}
            <span className="cursor">|</span>
            <span className={`heart-icon ${typedText.length === fullText.length ? 'show' : ''}`}>❤️</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="invitation-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', width: '100vw', margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {isOpen && <FallingFlowers />}
      <div className="scene envelope-enter">
        <div 
          className={`envelope-wrapper ${isOpen ? 'is-open' : ''}`}
          onClick={toggleEnvelope}
        >
      <div className="envelope">
        {/* Back of the envelope */}
        <div className="env-part env-back"></div>
        
        {/* The Letter / Card */}
        <Card />
        
        {/* Front Flaps */}
        <div className="env-part env-left"></div>
        <div className="env-part env-right"></div>
        <div className="env-part env-bottom"></div>
        
        {/* Top Flap (opens) */}
        <div className="env-top-wrapper">
          <div className="env-top-inside"></div>
          <div className="env-top"></div>
        </div>
        
        {/* Seal */}
        <div className="seal">💌</div>
        
        {/* Floating Hearts */}
        <Hearts />
      </div>
      
        {/* Helper Text */}
        <div className="click-me">Ábreme</div>
      </div>
    </div>
    </div>
  );
}
