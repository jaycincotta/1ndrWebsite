import React, { useEffect } from "react";

export default function Portfolio() {
  // Always scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Image = ({ src }) => {
    return <img height="240" width="300" loading="lazy" alt="" src={src} />;
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="gallery">
        <Image src="https://unsplash.it/300/231" />
        <Image src="https://unsplash.it/300/232" />
        <Image src="https://unsplash.it/300/233" />
        <Image src="https://unsplash.it/300/234" />
        <Image src="https://unsplash.it/300/235" />
        <Image src="https://unsplash.it/300/236" />
        <Image src="https://unsplash.it/300/237" />
        <Image src="https://unsplash.it/300/238" />
        <Image src="https://unsplash.it/300/239" />
        <Image src="https://unsplash.it/300/240" />
        <Image src="https://unsplash.it/300/241" />
        <Image src="https://unsplash.it/300/242" />
        <Image src="https://unsplash.it/300/243" />
        <Image src="https://unsplash.it/300/244" />
        <Image src="https://unsplash.it/300/245" />
        <Image src="https://unsplash.it/300/246" />
        <Image src="https://unsplash.it/300/247" />
        <Image src="https://unsplash.it/300/248" />
        <Image src="https://unsplash.it/300/249" />
        <Image src="https://unsplash.it/300/250" />
        <Image src="https://unsplash.it/300/251" />
        <Image src="https://unsplash.it/300/252" />
        <Image src="https://unsplash.it/300/253" />
        <Image src="https://unsplash.it/300/254" />
      </div>
    </div>
  );
}
