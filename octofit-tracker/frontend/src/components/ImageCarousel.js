import React from 'react';

export default function ImageCarousel({ images = ['/mona-the-rivetertocat.png', '/logo192.png', '/logo512.png'] }) {
  const id = 'octofitCarousel';

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((src, i) => (
          <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={src}>
            <img src={src} className="d-block w-100" alt={`slide-${i}`} style={{ maxHeight: 140, objectFit: 'contain' }} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
