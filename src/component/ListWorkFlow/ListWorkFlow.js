import React, { Component } from "react";
import { withRouter } from "react-router";
import Aux from "../../HOC/Auxiliary";
import classes from "./ListWorkFlow.module.css";
import WorkFlowCard from "./WorkFlowCard/WorkFlowCard";

class ListWorkFlow extends Component {
  state = {
    workflows: this.props.workflows,
    isCompleted: true,
  };

  totalWorkflows = (
    <div className="row">
      {this.state.workflows.map((wf, i) => {
        return (
          <WorkFlowCard
            name={wf.name}
            status={wf.status}
            click={() => this.navigateWorkflowHandler(wf)}
            clickIcon={() => this.changeWorkFLowHandler(wf)}
            key={wf.name + i}
          />
        );
      })}
    </div>
  );

  changeWorkFLowHandler = (wf) => {
    let allworkflows = this.props.workflows;
    const updateTask = allworkflows.indexOf(
      allworkflows.find((item) => item.name === wf.name)
    );

    const isPending = allworkflows[updateTask].task.some(
      (el) => el.status === "Pending"
    );

    if (!isPending) {
      allworkflows[updateTask].status = "Completed";
      allworkflows = allworkflows.map((wf, i) => {
        return (
          <WorkFlowCard
            name={wf.name}
            status={wf.status}
            click={() => this.navigateWorkflowHandler(wf)}
            clickIcon={() => this.changeWorkFLowHandler(wf)}
            key={wf.name + i}
          />
        );
      });
      this.totalWorkflows = [...allworkflows];
      this.setState({ workflows: this.totalWorkflows });
    } else {
      alert(
        "Can not change status as associated tasks are in Pending state!!!"
      );
    }
  };

  navigateWorkflowHandler = (wf) => {
    this.props.history.push({
      pathname: "/workFlow",
      appdata: { data: wf },
    });
  };

  filterWorkflowHandler = (e) => {
    const searched = this.props.workflows
      .filter((status) => {
        return e.target.value.includes(status.status);
      })
      .map((wf, i) => {
        return (
          <WorkFlowCard
            name={wf.name}
            status={wf.status}
            click={() => this.navigateWorkflowHandler(wf)}
            clickIcon={() => this.changeWorkFLowHandler(wf)}
            key={wf.name + i}
          />
        );
      });
    this.totalWorkflows = [...searched];
    this.setState({ workflows: this.totalWorkflows });
  };

  addWorkFlowHandler = () => {
    let newflow = this.props.workflows;
    newflow.push({
      name: "Workflow" + (newflow.length + 1),
      status: "Pending",
      task: [{ name: "Task1", status: "Pending" }],
    });
    newflow = newflow.map((wf, i) => {
      return (
        <WorkFlowCard
          name={wf.name}
          status={wf.status}
          click={() => this.navigateWorkflowHandler(wf)}
          clickIcon={() => this.changeWorkFLowHandler(wf)}
          key={wf.name + i}
        />
      );
    });
    this.totalWorkflows = [...newflow];
    this.setState({ workflows: this.totalWorkflows });
  };

  searchWorkflowHandler = (e) => {
    const searched = this.props.workflows
      .filter((name) => !e.target.value || name.name === e.target.value)
      .map((wf, i) => {
        return (
          <WorkFlowCard
            name={wf.name}
            status={wf.status}
            click={() => this.navigateWorkflowHandler(wf)}
            clickIcon={() => this.changeWorkFLowHandler(wf)}
            key={wf.name + i}
          />
        );
      });
    this.totalWorkflows = [...searched];
    this.setState({ workflows: this.totalWorkflows });
  };

  render() {
    return (
      <Aux>
        <div className="row">
          <div className="col-xs-5">
            <input
              className={classes.Input}
              placeholder="&#xF002; Search Workflows"
              onChange={this.searchWorkflowHandler}
            />
            <span className={classes.FilterButton}>
              <i className="fa fa-filter" aria-hidden="true"></i>&nbsp;
              <select onChange={this.filterWorkflowHandler.bind(this)}>
                <option value="Completed,Pending">ALL</option>
                <option value="Completed">COMPLETED</option>
                <option value="Pending">PENDING</option>
              </select>
            </span>
          </div>
          <div className="col-xs-offset-5 col-xs-2">
            <button
              className={classes.CreateButton}
              onClick={this.addWorkFlowHandler}
            >
              <i className="fa fa-plus" aria-hidden="true"></i> Create Workflow
            </button>
          </div>
        </div>
        <hr />
        {this.totalWorkflows}
      </Aux>
    );
  }
}

export default withRouter(ListWorkFlow);
