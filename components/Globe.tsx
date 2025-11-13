import React from 'react';

export const Globe: React.FC = () => {
  // Create an array of dots to render on the globe
  const dots = Array.from({ length: 20 }).map((_, i) => {
    const style = {
      transform: `rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * 180 - 90}deg) translateZ(200px)`,
      animationDelay: `${Math.random() * -10}s`,
    } as React.CSSProperties;
    return <div key={i} className="globe-dot" style={style}></div>;
  });

  return (
    <div className="globe-container">
      <div className="globe">
        {dots}
        <div className="globe-ring"></div>
        <div className="globe-ring globe-ring-2"></div>
      </div>
    </div>
  );
};