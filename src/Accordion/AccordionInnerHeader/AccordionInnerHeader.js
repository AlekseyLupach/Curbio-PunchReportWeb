import React, { useState } from "react";
import { green, orange } from "../../constants/color";
import CheckboxComponent from "../../components/Checkbox";
import AccordionInnerContent from "../AccordionInnerContent/AccordionInnerContent";
import {
  Accordion,
  Grid,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordionInnerHeader = ({ repairItems }) => {
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
      {repairItems.map((item, index) => (
        <Accordion
          style={{ paddingLeft: 10, paddingRight: 10 }}
          key={index}
          expanded={activeSections?.includes(index) ? true : false}
        >
          <Grid container direction="row" alignItems="center">
            <Grid direction="row" alignItems="center" justifyContent="center">
              <CheckboxComponent handleChange={console.log(index)} />
            </Grid>
            <AccordionSummary
              style={{ flex: 1 }}
              onClick={() => handleChange(index)}
              expandIcon={<ExpandMoreIcon style={{ color: orange }} />}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                style={{ width: "100%" }}
              >
                <Grid
                  container
                  style={{
                    marginRight: 40,
                    backgroundColor: "grey",
                    borderWidth: 1,
                    borderColor: "grey",
                    height: 60,
                    width: 60,
                    borderRadius: 12,
                  }}
                />
                <div style={{ flexDirection: "row", flex: 1 }}>
                  {item.action}
                  <div
                    style={{
                      marginTop: 4,
                      color: green,
                      fontSize: 18,
                      fontWeight: 600,
                    }}
                  >
                    ${item.dPrice}
                  </div>
                </div>
              </Grid>
            </AccordionSummary>
          </Grid>
          <AccordionDetails style={{ padding: 0, flexWrap: "wrap" }}>
            <AccordionInnerContent item={item} />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionInnerHeader;
