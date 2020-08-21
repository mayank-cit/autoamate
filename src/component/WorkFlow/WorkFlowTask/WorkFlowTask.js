import React from "react";
import classes from "./WorkFlowTask.module.css";
import Aux from "../../../HOC/Auxiliary";
const workFlowTask = (props) => {
  return (
    <Aux>
      <div
        className="col-xs-2"
        style={{ cursor: "pointer" }}
        onClick={props.click}
      >
        <div className={classes.TaskBox}>
          <input className={classes.TaskName} value={props.name} readOnly />
          <textarea value={props.status} readOnly></textarea>
        </div>
        <span
          className={classes.StatusIcon}
          style={{
            backgroundColor:
              props.status === "Completed"
                ? "green"
                : props.status === "Pending"
                ? "grey"
                : "blue",
          }}
        >
          <i className="fa fa-check" aria-hidden="true"></i>
        </span>
      </div>
      <div className="col-xs-1" style={{ marginTop: "12%" }}>
        <i className="fa fa-5x fa-long-arrow-right" aria-hidden="true"></i>
      </div>
    </Aux>
  );
};

export default workFlowTask;
