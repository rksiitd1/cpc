import React, { useState, useEffect } from 'react';

const Garden = () => {
  const [rocks, setRocks] = useState([]);

  useEffect(() => {
    const addRock = () => {
      const newRock = {
        id: Date.now(),
        left: Math.random() * 370,
        animationDuration: `${Math.random() * 3 + 2}s`
      };
      setRocks(prevRocks => [...prevRocks, newRock]);
    };

    const interval = setInterval(addRock, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (rocks.length > 20) {
      setRocks(rocks.slice(-20));
    }
  }, [rocks]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: '#f0f0f0' 
    }}>
      <div style={{ 
        width: '400px', 
        height: '400px', 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        background: '#e0e0e0', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        {rocks.map(rock => (
          <div
            key={rock.id}
            style={{
              position: 'absolute',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: '#888',
              left: `${rock.left}px`,
              top: '-30px',
              animation: `fall ${rock.animationDuration} linear`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Garden;