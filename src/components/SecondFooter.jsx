const Section = () => {
  return (
    <div className="container-fluid my-5 bg-secondary-subtle">
      <div className="row text-center g-4">
        {/*Shipment */}
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center p-4 border rounded h-100 shadow-sm">
            <i className="bi bi-truck" style={{ color: "#B197FC", fontSize: "32px" }}></i>
            <h5 className="fw-semibold mt-2">
              Shipments With The Best Prices To All Provinces
            </h5>
          </div>
        </div>

        {/*Customer Service */}
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center p-4 border rounded h-100 shadow-sm">
            <i className="bi bi-headset" style={{ color: "#B197FC", fontSize: "32px" }}></i>
            <h5 className="fw-semibold mt-2">24/7 Customer Service</h5>
            <p className="text-muted small mb-0">
              Online top support <br />
              +1 561 9875465 <br />
              abc@gmail.com
            </p>
          </div>
        </div>

        {/*Secure Payment */}
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center p-4 border rounded h-100 shadow-sm">
            <i className="bi bi-credit-card" style={{ color: "#B197FC", fontSize: "32px" }}></i>
            <h5 className="fw-semibold mt-2">Secure Payment</h5>
            <p className="text-muted small mb-0">100% secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
