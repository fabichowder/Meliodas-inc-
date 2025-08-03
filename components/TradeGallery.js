import React from 'react';

// Placeholder images for static export (replace with your own in /public/)
const images = [
  { src: '/sample-trade-1.jpg', alt: 'Trade Screenshot 1' },
  { src: '/sample-trade-2.jpg', alt: 'Trade Screenshot 2' }
];

const TradeGallery = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
      <p style={{ color: '#fff', marginBottom: '1rem' }}>
        Image uploads are not supported in static export. Upload screenshots to /public/ or enable dynamic rendering later.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} style={{ border: '1px solid #333', padding: '0.5rem', backgroundColor: '#111' }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            </div>
          ))
        ) : (
          <p>No screenshots available. Add images to /public/ folder.</p>
        )}
      </div>
    </div>
  );
};

export default TradeGallery;
