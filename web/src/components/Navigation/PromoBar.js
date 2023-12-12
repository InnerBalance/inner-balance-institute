import React from "react";

const PromoBar = () => {
  return (
    <button
      id="promo-bar"
      data-modal-open="modal-contact"
      className="group bg-primary-800 hover:bg-secondary-600 py-1 text-center w-full transition-colors duration-300 ease-linear focus:outline-none"
    >
      <div className="container">
        <p className="text-white group-hover:text-black text-sm font-semibold mb-0 transition-colors duration-300 ease-linear">
          San Diego's Leading Chiropractor and Pain Management Clinic
        </p>
      </div>
    </button>
  );
};
export default PromoBar;
