import React from 'react';

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: 0 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: 0, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
