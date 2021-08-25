import React from "react";

import PageBanner from "../../components/PageBanner/PageBanner";
import Services from "../../components/Services/Services";
import Solutions from "../../components/Solutions/Solutions";
// assets
import banner from "../../assets/img/png/service/banner.png";
// styles
import "./Service.css";
export default function Service() {
  return (
    <div id="service-page">
      <PageBanner
        imgSrc={banner}
        title="Service"
        text="We Provide entire range of networking, security and customized IT
          solutions to organizations of all sizes . Our flexible, customer
          oriented services are tailor made to suit the business needs of each
          customer."
      />
      <Services />
      <Solutions />
    </div>
  );
}
