import React from "react";

const PromoBar = () => {
  return null
  return (
    <button
      id="promo-bar"
      data-modal-open="modal-contact"
      className="group bg-primary-800 hover:bg-secondary-600 py-1 text-center w-full transition-colors duration-300 ease-linear focus:outline-none"
    >
      <div className="container">
        <p className="text-white group-hover:text-black text-sm font-semibold mb-0 transition-colors duration-300 ease-linear">
          SPECIAL! $57 Exam For New & Returning Patients. Includes: Consultation
          + Digital X-Rays + Follow-Up Care Plan
        </p>
      </div>
    </button>
  );
};
export default PromoBar;
