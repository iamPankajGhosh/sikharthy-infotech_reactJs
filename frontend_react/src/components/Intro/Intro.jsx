import React, { useState, useEffect } from "react";

import images from "../../constants/images";

import "./Intro.css";

export default function Intro() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loadingTimeOut = 2000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, loadingTimeOut);
  }, []);
  return (
    <>
      <div className={`intro ${isLoaded ? "loaded" : ""}`}>
        <img
          src={images.introTop}
          width="120"
          height="64"
          className="img-top"
          alt="Sikharthy"
        />
        <img
          src={images.introBottom}
          width="120"
          height="64"
          className="img-bottom"
          alt="Infotech"
        />
      </div>
    </>
  );
}
