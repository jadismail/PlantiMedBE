import React from "react";
import "./Home.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>What Our Users Say</h2>
      </div>
      <div className="testimonial-container">
        <div className="testimonial">
          <div className="testimonial-avatar">
            <img
              src="https://th.bing.com/th/id/R.9c58711debcfd96f99eec3541b0cc555?rik=YMvh%2fid5b558RQ&pid=ImgRaw&r=0"
              alt="User 1"
            />
          </div>
          <p className="testimonial-text">
            "PlantiMed helped me turn my brown thumb green! The expert advice
            and care tips have transformed my plants."
          </p>
          <span className="testimonial-author">- Lily G.</span>
        </div>
        <div className="testimonial">
          <div className="testimonial-avatar">
            <img
              src="https://1.bp.blogspot.com/-fVdm5puDg9w/YCLS9J5RAJI/AAAAAAAACZ4/o_3b4KMwv4sQD8UvZozoqMKu6E-hn4nHACLcBGAsYHQ/s801/1.jpg"
              alt="User 2"
            />
          </div>
          <p className="testimonial-text">
            "The premium support service is a game-changer! The personalized
            assistance has brought my plants back to life."
          </p>
          <span className="testimonial-author">- Mark T.</span>
        </div>
        <div className="testimonial">
          <div className="testimonial-avatar">
            <img
              src="https://th.bing.com/th/id/OIP.uCuP9DTtRtVtUlzNqjCrYAHaJQ?pid=ImgDet&w=1920&h=2400&rs=1"
              alt="User 3"
            />
          </div>
          <p className="testimonial-text">
            "I'm amazed at the results. PlantiMed's guidance has revitalized my
            indoor garden. Highly recommended!"
          </p>
          <span className="testimonial-author">- Emily R.</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
