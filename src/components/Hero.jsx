import React from "react";

const Hero = () => {
  const categories = [
    { name: "Perfumes Aseo", img: "perfume.jpeg" },
    { name: "Materiales Construir", img: "cement.jpeg" },
    { name: "Farmacia", img: "pharma.jpeg" },
    { name: "EnvíoPlus", img: "grocery.jpeg" },
    { name: "Cristal y Aluminio", img: "door.jpeg" },
    { name: "Clima y Energía", img: "light.jpeg" },
    { name: "Tecnologias", img: "phone.jpeg" },
  ];

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          marginTop:"50px",
          marginInline:"60px",
          border: "1px solid gray",
          borderRadius: "15px", 
          overflow: "hidden",
          maxHeight: "400px",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="flash.jpeg" className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "300px",  filter: "blur(2px) brightness(0.4)"}}/>
          </div>
          <div className="carousel-item">
            <img src="offer.jpeg" className="d-block w-100" alt="..." style={{ objectFit: "cover", height: "300px", filter: "blur(2px) brightness(0.4)"}}/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* below Section */}
      <div className="container my-4 p-4 border border-secondary-subtle rounded">
        <div className="d-flex justify-content-between flex-wrap">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="rounded-circle"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <p className="small fw-bold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
