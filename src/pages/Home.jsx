import React, { useEffect } from "react";

export default function Home() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <img style={{ width: "100%" }} alt="" src="https://unsplash.it/1000" />
      </div>
    </div>
  );
}
