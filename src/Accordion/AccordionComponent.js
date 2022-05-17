import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CheckboxComponent from "../components/Checkbox";
import AccordionInnerHeader from "./AccordionInnerHeader/AccordionInnerHeader";

import { ReactComponent as OvalPlusIcon } from "../images/OvalPlus.svg";
import { ReactComponent as OvalMinusIcon } from "../images/OvalMinus.svg";
import { green, orange } from "../constants/color";

const AccordionComponent = ({ data }) => {
  const [activeSections, setActiveSections] = useState([]);

  const handleChange = (value) => {
    if (!activeSections.includes(value)) {
      setActiveSections([...activeSections, value]);
      return;
    }
    setActiveSections(activeSections.filter((n) => n !== value));
  };

  return (
    <>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={activeSections?.includes(index) ? true : false}
          onChange={() => handleChange(index)}
        >
          <Grid
            style={{
              height: 100,
              paddingLeft: 10,
              paddingRight: 10,
              borderWidth: 1,
              borderColor: "red",
            }}
            container
            direction="row"
            alignItems="center"
          >
            <Grid direction="row" alignItems="center" justifyContent="center">
              <CheckboxComponent handleChange={console.log(index)} />
            </Grid>
            <AccordionSummary
              style={{ flex: 1 }}
              expandIcon={
                activeSections.includes(index) ? (
                  <OvalMinusIcon />
                ) : (
                  <OvalPlusIcon />
                )
              }
            >
              <Grid container direction="row" alignItems="center">
                <Grid container direction="row" alignItems="center">
                  <Typography style={{ fontWeight: 700 }}>
                    {item.serviceCategory}
                  </Typography>
                  <span style={{ marginLeft: 10, color: "grey" }}>
                    ({item.repairItems.length}/0)
                  </span>
                </Grid>
                <Grid>
                  <Typography style={{ color: green, fontWeight: 600 }}>
                    $0
                  </Typography>
                  <Typography style={{ color: orange, fontWeight: 600 }}>
                    {item.minimumPrice > 0
                      ? `minimum possible total: $${item.minimumPrice}`
                      : " "}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
          </Grid>
          <AccordionDetails style={{ flexWrap: "wrap" }}>
            <AccordionInnerHeader repairItems={item.repairItems} />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionComponent;
