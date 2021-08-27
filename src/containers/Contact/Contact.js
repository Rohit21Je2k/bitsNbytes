import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import Office from "../../components/Office/Office";
import OverseasOffice from "../../components/OverseasOffice/OverseasOffice";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
// assets
import banner from "../../assets/img/png/contact-page/banner.png";
// styles
import "./Contact.css";
export default function Contact() {
  return (
    <div id="contact-page">
      <PageBanner imgSrc={banner} title="Contact us" />
      <Office />
      <OverseasOffice />
      <GetInTouch />
    </div>
  );
}
