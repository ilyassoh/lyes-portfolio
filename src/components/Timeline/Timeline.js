import React, { useEffect } from 'react';
import './Timeline.css';

const Timeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      items.forEach(item => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    };

    // Event listeners
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    // Cleanup
    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <section className="timeline">
      <ul>
        <li>
          <div className="timeline-cont">
          <span className="timeline-date">March - September 2024 (6 months)</span>
            <h3 className="timeline-title">PFA Internship - Nodma TVA</h3>
            <span id="company">NODMA Horizon, Casablanca</span>

            <p>
              Implementation of a software solution for VAT calculation and company management.
              <br />
              <i>Technologies:<b> .NET, Angular, PostgreSQL, Figma, Docker, Azure DevOps, and Scrum.</b></i>
            </p>
          </div>
        </li>
        <li>
        <div className="timeline-cont">
            <span className="timeline-date text-right">April - June 2023 (3 months)</span> <br />
            <h3 className="timeline-title" >PFE Internship - Analysis and Characterization Center Platform of UCA</h3>
            <span id="company">Faculty of Science Semlalia, Marrakech</span>

            <p>
              A platform for digitizing all tasks of the Characterization Analysis Center (CAC), completed in a
              team of three.
              <br />
              <i>Technologies: <b> Laravel, HTML, CSS, JavaScript, Bootstrap, and MySQL.</b></i>
            </p>
          </div>
        </li>
        <li>
          <div className="timeline-cont">
            <span className="timeline-date">July - August 2022 (2 months)</span> <br />
            <h3 className="timeline-title">SPFA Internship - Fight Detection on 
            Surveillance Cameras</h3>
            <span id="company">Faculty of Science and Technology, Marrakech</span>

            <p>
            A model based on VGG16 for detecting fights from surveillance cameras.
              <br />
              <i>Technologies: <b> Jupyter, VGG16, Python.</b></i>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Timeline; 