import React from "react";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import "./styles.scss";

const StatiscticView = ({ ...props }) => {
  return (
    <div className="statistic-view-wrapper">
      <VisibilityOutlinedIcon fontSize='large'/>
    </div>
  );
};


export default StatiscticView;