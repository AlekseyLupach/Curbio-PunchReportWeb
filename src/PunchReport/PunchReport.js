import "../styles.scss";
import "./punchReport.scss";

import React from "react";
import { falseData } from "../Data/Data";
import AccordionComponent from "../Accordion/AccordionComponent";

const PunchReport = () => {
  return (
    <div className="wrapper">
      <section className="header">
        <div className="header flexSpaceBetwee">
          <img alt="" src="./img/logo.png" width={200} />
          {/* <div className="header-title">Inspection Report</div> */}
        </div>
      </section>
      <div class="divider-green"></div>
      <section class="report-adress">
        <div class="flex">
          <div class="report-adress_type">Agent Name:</div>
          <div class="report-adress_value">Mary Williams</div>
        </div>
        <div class="flex">
          <div class="report-adress_type">Property Address:</div>
          <div class="report-adress_value">
            9848 Kamlea Dr, Mannassas, VA 20110
          </div>
        </div>
      </section>

      <section class="items">
        <div class="items-header_title">Item List</div>
        <div class="items-divider"></div>
        <AccordionComponent data={falseData} />
      </section>
    </div>
  );
};

export default PunchReport;
