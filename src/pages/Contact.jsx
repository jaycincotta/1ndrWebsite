import React, { useEffect } from "react";

export default function Contact() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Contact Me!</h1>
    </div>
  );
}
