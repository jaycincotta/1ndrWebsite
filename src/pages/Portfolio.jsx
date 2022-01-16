import React, { useEffect } from "react";
import portfolio from "../portfolio";

export default function Portfolio() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTitle = (art) => (
    <h2>
      {art.title}
      <span>
        {art.height}"H&nbsp;x&nbsp;{art.width}W&nbsp;x&nbsp;{art.depth}"D
      </span>
    </h2>
  );
  const getSrc = (art) => `portfolio/${art.name}.jpeg`;

  return (
    <>
      <h1>Portfolio</h1>
      <div className="gallery">
        {portfolio.map((art) => {
          return (
            <div>
              {getTitle(art)}
              <img alt={art.title} src={getSrc(art)} />
            </div>
          );
        })}
      </div>
    </>
  );
}
