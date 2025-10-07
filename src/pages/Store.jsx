import { useState } from "react";

const Store = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="container my-4">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Products
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "new" ? "active" : ""}`}
            onClick={() => setActiveTab("new")}
          >
            New Arrivals
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "best" ? "active" : ""}`}
            onClick={() => setActiveTab("best")}
          >
            Best Sellers
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "sale" ? "active" : ""}`}
            onClick={() => setActiveTab("sale")}
          >
            On Sale
          </button>
        </li>
      </ul>

      {/* content based on tab */}
      <div className="mt-4">
        {activeTab === "all" && <p>All products list...</p>}
        {activeTab === "new" && <p>New arrivals list...</p>}
        {activeTab === "best" && <p>Best sellers list...</p>}
        {activeTab === "sale" && <p>On sale products list...</p>}
      </div>
    </div>
  );
};

export default Store;
