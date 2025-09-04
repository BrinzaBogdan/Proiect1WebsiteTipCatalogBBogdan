'use client';

import { ClothesProps } from '@/types';

interface ClothesCardProps {
  clothes: ClothesProps;
}

const ClothesCard = ({ clothes }: ClothesCardProps) => {
  const { title, price, source, image, description } = clothes;

  return (
    <div className="bg-white/10 text-white p-4 rounded-xl shadow-lg group">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
      )}

      <h3 className="font-bold text-lg mb-2">{title}</h3>

      {description && <p className="text-sm text-gray-300 mb-1">{description}</p>}

      <p className="text-sm">Price: {price || "N/A"} USD</p>
      <p className="text-sm">Source: {source || "Nike"}</p>
    </div>
  );
};

export default ClothesCard;
