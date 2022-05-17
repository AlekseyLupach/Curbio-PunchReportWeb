import React from "react";
import "./accordionInnerContent.scss";
import { Typography } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AccordionInnerContent = ({ item }) => {
  return (
    <div className="iner-content_container">
      <Typography style={{ fontWeight: 600 }}>Description:</Typography>
      <Typography>{item.item}</Typography>
      <div style={{ padding: 20 }}>
        <Carousel dynamicHeight={true} showThumbs={false}>
          <img alt="" src="./img/item1.jpeg" maxHeight={600} />
          <img alt="" src="./img/item2.jpeg" maxHeight={600} />
        </Carousel>
      </div>
      <Typography style={{ fontWeight: 600 }}>Action:</Typography>
      <Typography>{item.action}</Typography>
    </div>
  );
};

export default AccordionInnerContent;
