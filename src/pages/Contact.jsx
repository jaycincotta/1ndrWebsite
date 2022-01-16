import React, { useEffect } from "react";

export default function Contact() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <h1>Contact Me!</h1>
      <p></p>
      <p>
        <span className="name">Kevin Cincotta</span>
        <br />
        <span className="email">
          <a href="mailto:kevin.cincotta@gmail.com">kevin.cincotta@gmail.com</a>
        </span>
        <br />
        <span className="phone">
          <a href="tel:4437188598">443-718-8598</a>
        </span>
      </p>
    </div>
  );
}
