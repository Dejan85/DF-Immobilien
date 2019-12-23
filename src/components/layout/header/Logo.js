import React from "react";

// json
import images from "../../../json/images.json";

import useDataUriConverter from "../../../hooks/global/useDataUriConvert";
import img from "../../../sass/images/logo3.jpg";

const Logo = () => {
  const { convertFileToBase64viaFileReader } = useDataUriConverter();

  convertFileToBase64viaFileReader(img, uri => {
    // console.log(uri);
  });

  return (
    <div className="header__logo">
      <img src={images.logo3} alt="logo" style={{ width: "30rem" }}></img>
    </div>
  );
};

export default Logo;
