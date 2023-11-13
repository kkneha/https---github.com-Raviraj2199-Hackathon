import React from "react";
import "./InformationBox.css";

export default function InformationBox() {
  return (
    <div className="info-box">
      <h3 className="header">CMDB Health Scorecard</h3>
      <p className="paragraph">
        A CMDB (Configuration Management Database) scorecard is a tool used to
        assess and measure the effectiveness of your CMDB implementation. The
        scorecard typically includes key performance indicators (KPIs) and
        metrics that help evaluate the accuracy, completeness, and overall
        health of your CMDB
      </p>
      <p className="paragraph">
        An Application Scorecard in the context of a Configuration Management
        Database (CMDB) provides a concise overview of key metrics related to
        the management of applications within the CMDB.
      </p>
      <p className="paragraph">
        This scorecard provides insights into the management of infrastructure
        components within the CMDB and their integration across the IT
        environment
      </p>
      <p className="paragraph">
        This scorecard provides insights into the management of infrastructure
        components within the CMDB and their integration across the IT
        environment
      </p>
      <h4>Helpful Links</h4>
      <a className="links" href="www.google.com">
        CMDB Exception User Guide
      </a>
      <a className="links" href="www.google.com">
        Knowlegde Article and How To's 
      </a>
      <a className="links" href="www.google.com">
        Service Requests
      </a>
      <a className="links" href="www.google.com">
        CMDB Website
      </a>
      <a className="links" href="www.google.com">
        NPPR Non-Prod Profile Review Tool
      </a>
    </div>
  );
}
