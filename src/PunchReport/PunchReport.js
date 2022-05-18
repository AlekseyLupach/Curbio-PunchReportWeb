import "../styles.scss";
import "./punchReport.scss";

import React from "react";
import { falseData } from "../Data/Data";
import { Grid } from "@material-ui/core";
import { green } from "../constants/color";
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
      <div className="divider-green"></div>
      <section className="report-adress">
        <div className="flex report-adress_item">
          <div className="report-adress_type">Agent Name:</div>
          <div className="report-adress_value">Mary Williams</div>
        </div>
        <div className="flex report-adress_item">
          <div className="report-adress_type">Property Address:</div>
          <div className="report-adress_value">
            9848 Kamlea Dr, Mannassas, VA 20110
          </div>
        </div>
      </section>

      <section className="items">
        <div className="items-header_title">Item List</div>
        <div className="items-divider"></div>
        <Grid
          style={{ marginBottom: 10 }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <div className="total-selected">
            Total Selected: <span style={{ color: green }}>$200</span>
          </div>
        </Grid>
        <AccordionComponent data={falseData} />
      </section>
    </div>
  );
};

export default PunchReport;
