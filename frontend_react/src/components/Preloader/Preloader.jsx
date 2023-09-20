import React, { useEffect, useState } from "react";

import images from "../../constants/index";

import "./Preloader.css";

export default function Preloader() {
  /**
   * preloader loading
   */
  const [isLoaded, setIsLoaded] = useState(false);
  const loadingTimeOut = 1000;

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, loadingTimeOut);
  }, []);

  return (
    <>
      <div className={`preloader ${isLoaded ? "loaded" : ""}`}>
        <img
          src={images.loader}
          width="55"
          height="55"
          alt="loading"
          className="img"
        />
        <div className="circle"></div>
      </div>
    </>
  );
}
