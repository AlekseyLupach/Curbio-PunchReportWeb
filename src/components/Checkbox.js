import { Checkbox } from "@material-ui/core";
import React from "react";
import { orange } from "../constants/color";

import { ReactComponent as CheckedIcon } from "../images/Checked.svg";
import { ReactComponent as UncheckedIcon } from "../images/Unchecked.svg";
// import { ReactComponent as HalfCheckedIcon } from "../images/HalfChecked.svg";

const CheckboxComponent = ({ handleChange }) => {
  return (
    <Checkbox
      icon={<UncheckedIcon />}
      indeterminate={false}
      checkedIcon={<CheckedIcon />}
      onChange={handleChange}
      sx={{
        color: orange,
        "&.Mui-checked": {
          color: orange,
        },
      }}
    />
  );
};

export default CheckboxComponent;
