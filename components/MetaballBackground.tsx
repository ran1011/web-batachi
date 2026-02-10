
import React from 'react';

const CinematicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden bg-black">
      {/* Background Image with slow zoom effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-40"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=80')`,
          animation: 'kenBurns 40s ease-in-out infinite alternate'
        }}
      />
      {/* Black & Gold Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-black/90 to-[#1a1505]" />
      
      {/* Decorative Gold Dust Particles (Visual only) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-screen pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.3) translate(-2%, -1%); }
        }
      `}</style>
    </div>
  );
};

export default CinematicBackground;
