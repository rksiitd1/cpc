import React from 'react';

const GardenScene = () => {
  return (
    <div className="w-full h-screen bg-sky-200 flex items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full max-w-2xl">
        {/* Sun */}
        <circle cx="350" cy="50" r="30" fill="yellow" />
        
        {/* Ground */}
        <rect x="0" y="200" width="400" height="100" fill="#8B4513" />
        
        {/* Grass */}
        <path d="M0,200 Q200,170 400,200 L400,300 L0,300 Z" fill="#4CAF50" />
        
        {/* Flowers */}
        {[...Array(20)].map((_, i) => (
          <g key={i} transform={`translate(${20 + i * 20}, ${180 + (i % 3) * 10})`}>
            <line x1="0" y1="0" x2="0" y2="20" stroke="green" strokeWidth="2" />
            <circle cx="0" cy="0" r="5" fill={['#FF69B4', '#FF6347', '#FFD700'][i % 3]} />
          </g>
        ))}
        
        {/* Tree */}
        <rect x="50" y="100" width="20" height="100" fill="#8B4513" />
        <circle cx="60" cy="80" r="40" fill="#228B22" />
        
        {/* Clouds */}
        <g fill="white">
          <circle cx="80" cy="50" r="20" />
          <circle cx="100" cy="50" r="25" />
          <circle cx="120" cy="50" r="20" />
        </g>
        <g fill="white" transform="translate(250, 30)">
          <circle cx="10" cy="10" r="15" />
          <circle cx="30" cy="10" r="20" />
          <circle cx="50" cy="10" r="15" />
        </g>
      </svg>
    </div>
  );
};

export default GardenScene;