
import { toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const EndSection = () => {

  const showLoginToast = () => {
    toast.warn("Login first!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };
  return (
    
    <>
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

        <h2 className="fw-bold mb-3">Top featured products</h2>
        <button className="btn btn-primary rounded-pill px-4" onClick={showLoginToast}>View All</button>
      </div>
      <div className="container d-flex flex-direction-row gap-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="cemento.jpeg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cemento Perlagr</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        {/* card2 */}

        <div className="card" style={{ width: "18rem" }}>
          <img src="water.webp" className="card-img-top" alt="..." style={{height:"250px"}} />
          <div className="card-body">
            <h5 className="card-title">Water Bottles</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        {/* card3 */}

      
        <div className="card" style={{ width: "18rem" }}>
          <img src="chips.webp" className="card-img-top" alt="..." style={{height:"250px"}} />
          <div className="card-body">
            <h5 className="card-title">Chips</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

    {/* card4 */}
        <div className="card" style={{ width: "18rem" }}>
          <img src="bread.webp" className="card-img-top" alt="..." style={{height:"250px"}} />
          <div className="card-body">
            <h5 className="card-title">Breads</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

      </div>
         <ToastContainer />
    </>
  );
};

export default EndSection;
