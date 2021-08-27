import React from "react";

// assets
import singaporeOffice from "../../assets/img/png/contact-page/singapore office.png";
import "./OverseasOffice.css";
export default function OverseasOffice() {
  return (
    <div className="bg-l-blue overseas-office">
      <div className="wrapper">
        <h3 className="h3 f-wt-500 c-gray-500 overseas-office__title">
          OVERSEAS OFFICES
        </h3>
        <div className="container">
          {/* singapore office */}
          <div className="c-primary overseas-office__office">
            <img
              src={singaporeOffice}
              alt="singapore-office"
              className="overseas-office__office__img"
            />
            <h4 className="overseas-office__office__title">Singapore Office</h4>
            <div className="overseas-office__address">
              <h5>Address :</h5>
              <p>
                {" "}
                #52, 2nd Floor, Vittal Mallya Road, Bangalore-560001, INDIA
              </p>
            </div>
            <div className="overseas-office__phone">
              <h5>Phone :</h5>
              <p>+91 9620618247</p>
            </div>
            <div className="overseas-office__email">
              <h5>Email :</h5>
              <p>contact@bitsandbyte.in</p>
            </div>
          </div>
          {/* accra office */}
          <div className="c-primary overseas-office__office">
            <img
              src={singaporeOffice}
              alt="singapore-office"
              className="overseas-office__office__img"
            />
            <h4 className="overseas-office__office__title">Accra Office</h4>
            <div className="overseas-office__address">
              <h5>Address :</h5>
              <p>101 Cecil Street, #20-02 Tong Eng Building, Singapore-06953</p>
            </div>
            <div className="overseas-office__phone">
              <h5>Phone :</h5>
              <p>+91 9620618247</p>
            </div>
            <div className="overseas-office__email">
              <h5>Email :</h5>
              <p>contact@bitsandbyte.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
