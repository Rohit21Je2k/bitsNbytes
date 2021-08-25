import React from "react";

import AccordionItem from "./AccordionItem";
// assets
import solution_1 from "../../assets/img/png/solutions/solution-1.png";
import "./Solutions.css";
export default function Solutions() {
  return (
    <div className="solutions">
      <div className="title-container">
        <svg className="solutions__title-1">
          <text y="130">Service</text>
        </svg>
        <svg className="solutions__title-2">
          <text y="130">& Solutions</text>
        </svg>
      </div>
      <div className="solutions__accordion">
        <AccordionItem
          number="01"
          title="Security Solution"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="02"
          title="Storage Solution"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="03"
          title="Global Internet Services"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="04"
          title="Networking Solution"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="05"
          title="Server Platform Solution"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="06"
          title="Microsoft Infrastructure Solutions"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="07"
          title="Cloud Services Offerings"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
        <AccordionItem
          number="08"
          title="Devops Services Offerings"
          para="Vulnerability Assessment/Penetration Testing can assist you in 
          security and maintain a secure ISO I7799, PCI-DSS or HIPAA compliant 
          network."
          imgSrc={solution_1}
        />
      </div>
    </div>
  );
}
