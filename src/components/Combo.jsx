import { Link } from "react-router-dom";

const Combo = () => {
  const cards = [
    { img: "water.webp" },
    { img: "chips.webp" },
    { img: "bread.webp" },
    { img: "fish.webp" },
    { img: "bigmeat.webp" },
    { img: "meat.webp" },
    { img: "orange.webp" },
    { img: "cola.webp" },
  ];

  return (
    <>
      {/* Heading Section */}
      <div className="text-center my-5">
        <h6 className="text-danger fw-bold mb-1">For you</h6>

        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#d63384",
            margin: "0 auto 10px",
            borderRadius: "2px",
          }}
        ></div>

        <h2 className="fw-bold mb-3">Combo</h2>
        <Link to="/shop" className="btn btn-primary rounded-pill px-4" >
        View all
        </Link>
      </div>

      {/* Main Section */}
      <div className="container my-4">
        <div className="row align-items-center">
          {/* Left Big Card */}
          <div className="col-md-6">
            <div className="card h-100">
              <img
                src="food.jpeg"
                alt="Fast Food"
                className="card-img-top"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          {/* Right Small Cards */}
          <div className="col-md-6 d-flex align-items-center justify-content-evenly" style={{ minHeight: "500px" }} >
            <div className="row g-3 "style={{minHeight:"400px"}}>
              {cards.map((item, idx) => (
                <div key={idx} className="col-3">
                  <div className="card h-100 d-flex justify-content-center">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={`Card ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combo;

