import React from "react";

// assets
import map from "../../assets/img/png/contact-page/map.png";
import office1 from "../../assets/img/png/contact-page/office-1.png";
// styles
import "./Office.css";
export default function Office() {
  return (
    <div className="local-office">
      <div className="wrapper">
        <div className="local-office__map-container">
          <img src={map} alt="map" className="local-office__map" />
        </div>
        <div className="local-office__img-container">
          <img src={office1} alt="office" className="local-office__img" />
          <div className="c-gray-100 local-office__content">
            <div className="text">
              <h4 className="local-office__title-1">Corporate Head Office</h4>
              <h4 className="local-office__title-2">Bangalore Office</h4>
              <div className="local-office__address">
                <h5>Address: </h5>
                <p>
                  #52, 2nd Floor, Vittal Mallya Road, Bangalore-560001, INDIA
                </p>
              </div>
              <div className="local-office__phone">
                <h5>Phone: </h5>
                <p> +91 9620618247</p>
              </div>
              <div className="local-office__email">
                <h5>Email: </h5>
                <p> contact@bitsandbyte.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
