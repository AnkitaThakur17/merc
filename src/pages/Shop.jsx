import React from "react";

const Shop = () => {
  return (
    <div className="container my-4">
      <h3 className="mb-3 fw-bold text-center">🛒 Shop by Category</h3>
      
      <div className="accordion" id="shopByCategoryAccordion">
        {/* Grocery */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingGrocery">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseGrocery"
              aria-expanded="true"
              aria-controls="collapseGrocery"
            >
            Grocery
            </button>
          </h2>
          <div
            id="collapseGrocery"
            className="accordion-collapse collapse show"
            aria-labelledby="headingGrocery"
            data-bs-parent="#shopByCategoryAccordion"
          >
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item">Rice (1kg)</li>
                <li className="list-group-item">Sugar (1kg)</li>
                <li className="list-group-item">Oil (1L)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Food */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFood">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFood"
              aria-expanded="false"
              aria-controls="collapseFood"
            >
            Food
            </button>
          </h2>
          <div
            id="collapseFood"
            className="accordion-collapse collapse"
            aria-labelledby="headingFood"
            data-bs-parent="#shopByCategoryAccordion"
          >
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item">Pizza</li>
                <li className="list-group-item">Burger</li>
                <li className="list-group-item">Pasta</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Construction */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingConstruction">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseConstruction"
              aria-expanded="false"
              aria-controls="collapseConstruction"
            >
            Construction
            </button>
          </h2>
          <div
            id="collapseConstruction"
            className="accordion-collapse collapse"
            aria-labelledby="headingConstruction"
            data-bs-parent="#shopByCategoryAccordion"
          >
            <div className="accordion-body">
              <ul className="list-group">
                <li className="list-group-item">Cement (1 bag)</li>
                <li className="list-group-item">Bricks (100 pcs)</li>
                <li className="list-group-item">Steel Rods (10 pcs)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
