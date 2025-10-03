const Footer = () => {
  return (
    <footer className=" text-center text-md-start py-3 border-top mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left text */}
        <p className="mb-2 mb-md-0 text-muted fw-medium">
          All copyrights reserved{" "}
          <em style={{ color: "#d83565", fontStyle: "normal" }}>©2025 mercadoba</em>
        </p>

        {/* Footer Links */}
        <div className="d-flex gap-3">
          <a href="#" className="text-decoration-none text-muted small fw-semibold">
            Return Policy
          </a>
          <a href="#" className="text-decoration-none text-muted small fw-semibold">
            Privacy Policy
          </a>
          <a href="#" className="text-decoration-none text-muted small fw-semibold">
           Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
