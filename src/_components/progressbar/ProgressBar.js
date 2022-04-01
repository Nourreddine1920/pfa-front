//Stacked with percentage
// one color with percentage
// many colors with percentage 0-25-75-100
import { CProgress, CProgressBar } from "@coreui/react";
import React, { useEffect, useState } from "react";
const ProgressBBar = (props) => {
  const [percent, setpercent] = useState(13);
  const [progcolorstate, setprogcolorstate] = useState("");
  const [valuePerc, setvaluePerc] = useState(100);
  useEffect(() => {
    // change only percent value after calculating it ...
    if (percent < 100) {
      setTimeout(() => {
        setpercent(percent + 1);
      }, valuePerc);
    }
    return percent;
  }, [percent]);
  useEffect(() => {
    if (percent < 25) {
      setprogcolorstate("danger");
    } else if (percent < 75 && percent > 25) {
      setprogcolorstate("");
    } else if (percent > 75) {
      setprogcolorstate("success");
    }
  }, [progcolorstate]);

  return (
    <CProgress height={20} className="mb-3">
      <CProgressBar
        variant="striped"
        animated={true}
        value={percent}
        color={progcolorstate}
      >
        {percent}%
      </CProgressBar>
    </CProgress>
  );
};
export default ProgressBBar;
