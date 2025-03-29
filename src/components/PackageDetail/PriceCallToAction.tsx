
import React from 'react';

interface PriceCallToActionProps {
  price: string;
}

const PriceCallToAction = ({ price }: PriceCallToActionProps) => {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-ocean mb-6">{price}</p>
      <a href="/#contact" className="neomorphic-btn text-ocean hover:text-salmon inline-block">
        Inquire About This Package
      </a>
    </div>
  );
};

export default PriceCallToAction;
