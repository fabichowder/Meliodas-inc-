
import React, { useState } from "react";

const TradeGallery = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...previews]);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#000", color: "#fff" }}>
      <h1 style={{ color: "#38bdf8" }}>Trade Screenshot Gallery</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        style={{ margin: "1rem 0" }}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem"
      }}>
        {images.map((img, index) => (
          <div key={index} style={{ border: "1px solid #333", padding: "0.5rem", backgroundColor: "#111" }}>
            <img
              src={img.preview}
              alt={`Trade Screenshot ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeGallery;
