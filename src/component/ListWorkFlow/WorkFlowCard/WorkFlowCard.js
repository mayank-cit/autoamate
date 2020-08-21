import React from "react";
import classes from "./WorkFlowCard.module.css";

const WorkFlowCard = (props) => {
  let iconCLass = [];
  {
    props.status === "Pending"
      ? iconCLass.push(classes.TickIconPending)
      : iconCLass.push(classes.TickIcon);
  }

  return (
    <div className="col-xs-3">
      <div className={classes.WorkflowBox}>
        <input
          className={classes.WorkflowName}
          value={props.name}
          readOnly
          onClick={props.click}
          title="Click to Edit/Open the workflow!!!!!"
        />
        <div>
          <span>{props.status}</span>
          <span className={iconCLass} onClick={props.clickIcon}>
            <i className="fa fa-check" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowCard;
