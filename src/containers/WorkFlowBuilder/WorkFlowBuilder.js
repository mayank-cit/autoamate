import React, { Component } from "react";
import ListWorkFlow from "../../component/ListWorkFlow/ListWorkFlow";
import Aux from "../../HOC/Auxiliary";

class WorkFlowBuilder extends Component {
  state = {
    workflows: [
      {
        name: "Workflow1",
        status: "Pending",
        task: [
          { name: "Task1", status: "Completed" },
          { name: "Task2", status: "Pending" },
          { name: "Task3", status: "InProgress" },
        ],
      },
      {
        name: "Workflow2",
        status: "Completed",
        task: [
          { name: "Task1", status: "Completed" },
          { name: "Task2", status: "Completed" },
          { name: "Task3", status: "Completed" },
        ],
      },
      {
        name: "Workflow3",
        status: "Pending",
        task: [
          { name: "Task1", status: "Completed" },
          { name: "Task2", status: "Completed" },
          { name: "Task3", status: "Completed" },
        ],
      },
      {
        name: "Workflow4",
        status: "Pending",
        task: [
          { name: "Task1", status: "Completed" },
          { name: "Task2", status: "Completed" },
          { name: "Task3", status: "Completed" },
        ],
      },
    ],
  };

  render() {
    return (
      <Aux>
        <ListWorkFlow workflows={this.state.workflows} />
      </Aux>
    );
  }
}

export default WorkFlowBuilder;
