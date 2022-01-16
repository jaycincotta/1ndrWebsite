import React, { useEffect } from "react";

export default function Home() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <h1>Welcome!</h1>
      <div>
        <img style={{ height: "60vh" }} alt="" src="/assets/palette.jpeg" />
      </div>
    </div>
  );
}
