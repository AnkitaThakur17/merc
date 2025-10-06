import { useState } from "react";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const handleLoginClick = () => setShowModal(true);
  const handleCancel = () => setShowModal(false);
  const handleConfirm = () => {
    setShowModal(false);
    alert("Logging in");
  };


  const [date,setDate] = useState("")
  const [time,setTime] = useState("")

 return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "380px", borderRadius: "12px" }}>
        <h4 className="text-center fw-bold mb-4">Login your account...</h4>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" placeholder="Enter Email" />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" placeholder="Enter Password" />
          <div className="text-end mt-1">
            <a href="#" className="text-decoration-none small fw-semibold text-primary">
              Forgot Password?
            </a>
          </div>
        </div>
       <div className="mb-3">
        <label className="form-label fw-semibold">Date of Birth</label>
        <input 
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        
        className="form-control" placeholder="Enter DOB"/>  
       </div>

       <div className="mb-3">
        <label className="form-label fw-semibold">Choose Time</label>
        <input 
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        
        className="form-control" placeholder="Choose Time"/>  
       </div>

        <button
          className="btn btn-primary w-100 rounded-pill fw-semibold mb-3"
          style={{ backgroundColor: "#6256ca", border: "none" }}
          onClick={handleLoginClick}
        >
          Login
        </button>

        <div className="text-center text-muted small mb-3">Or login with</div>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              width="20"
              height="20"
            />
            Sign in with Google
          </button>
        </div>

        <div className="text-center">
          <span className="text-muted small">
            You don't have an account?{" "}
            <a href="#" className="fw-semibold text-danger text-decoration-none">
              Sign Up
            </a>
          </span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>

          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Info</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCancel}></button>
              </div>

              <div className="modal-body">
                <p>Are you sure your info is correct?</p>
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleConfirm}>
                  Yes, Login
                </button>
              </div>

            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Login;
