import React from "react";

import TextCard from "../TextCard/TextCard";
// styles
import "./Services.css";
export default function Services() {
  return (
    <div className="bg-l-blue services">
      <div className="wrapper">
        <div className="container-1">
          <h3 className="p1 f-wt-600 c-primary services__title">
            We enable you throughout the journey
          </h3>
        </div>
        <div className="services__text-card-container">
          <TextCard
            className="services__text-card"
            color="primary"
            number="01"
            title="SD-WAN Solutions"
            para="All SD-WAN solution provides features Graphical User Interface GUI, 
            Centralized Management and Configuration with secured managed connectivity 
            with centralized appliance and remote sites, using these connections are 
            able to configure end devices located at remote branches. The remote devices
             use multiple connections to get application traffic from a central location
              or between each other. Different topologies can be built such as Hub and
               Spoke, Mesh connectivity. Once the environment is up and running the 
               centralized application can monitor the network in terms of traffic level,
                Failures and security breaches."
          />
          <TextCard
            className="services__text-card"
            color="primary"
            number="02"
            title="Network Monitoring Services"
            para="Bits and BYTE Network Monitoring Services offers a proactive approach
             when it comes to monitoring the performance of your computer network. Based 
             on pre-agreed conditions, time, or severity of the event, Bits and BYTE
              notifies you when you are close to exceeding your thresholds. This unparalled
               monitoring and reporting capability allows you to plan ahead to prevent
                unscheduled downtimes and increase availability. 2 hour outage on an 80 user
                network costs 160 man-hours of lost time and production - the equivalent of a
                 man month! Plan ahead and prevent network downtime with Bits and BYTE Network
                  Monitoring Services."
          />
          <TextCard
            className="services__text-card"
            color="primary"
            number="03"
            title="Network Consulting Services"
            para="Detailed Assessment of Network Configuration and Performance As 
            computers and applications are changed in a complex network, the network's
             ability to meet performance standards can be challenged. A detailed
              examination of the configuration, both the hardware and software 
              components, can uncover these challenges before they cause business 
              problems. bitsandByte specializes in complete network hardware and 
              software design, configuration and implementation. Whether an entirely 
              new network is being contemplated or changes are needed in an existing 
              network, we design and build crafted solutions using industry standard
               best practices. As these solutions are delivered with complete documentation, 
               future design modifications to the network are already in progress."
          />
        </div>
      </div>
    </div>
  );
}
