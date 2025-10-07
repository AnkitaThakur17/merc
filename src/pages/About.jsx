import { useState } from "react";

function AboutUs() {
  const fullText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod 
  turpis nec ligula facilisis, nec faucibus libero sagittis. Donec eget lectus 
  a leo mattis pulvinar. Praesent auctor lorem vitae ligula suscipit, sed 
  volutpat nisl cursus. Vivamus eget libero vitae justo consectetur tempus. 
  Integer vel elit nec velit mattis venenatis. Sed nec eros sit amet purus 
  efficitur ullamcorper.
  
  Fusce vulputate, odio non fermentum consectetur, justo purus dapibus nunc, 
  in commodo enim velit ac arcu. Nam in nunc non mauris tempus tristique. 
  Sed non eros ac sapien tincidunt tincidunt nec a velit.
  `;

  const [showMore, setShowMore] = useState(false);
  const previewText = fullText.slice(0, 200);

  return (
    <div className="container my-5">
      <h2 className="mb-3">About Us</h2>
      <p className={`overflow-hidden`} style={{ maxHeight: showMore ? "500px" : "80px", transition: "max-height 0.5s ease" }}>
        {showMore ? fullText : previewText} {!showMore && "..."}
      </p>
      <button className="btn btn-primary" onClick={() => setShowMore(prev => !prev)}>
        {showMore ? "Show Less" : "Load More"}
      </button>
    </div>
  );
}

export default AboutUs;
