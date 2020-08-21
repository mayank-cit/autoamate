import React, { Component } from "react";
import Aux from "../../HOC/Auxiliary";
import WorkFlowTask from "../WorkFlow/WorkFlowTask/WorkFlowTask";
import classes from "./WorkFlow.module.css";

class WorkFLow extends Component {
  state = {
    taskList: this.props.location.appdata.data.task,
    workFlowName: this.props.location.appdata.data.name,
    workFlowStatus: this.props.location.appdata.data.status,
  };

  changeStatus = (task) => {
    let actualTasks = this.state.taskList;
    let updateStatus = {
      name: task.name,
      status:
        task.status === "Completed"
          ? "Pending"
          : task.status === "Pending"
          ? "InProgress"
          : "Completed",
    };

    const updatedTaskIndex = actualTasks.indexOf(
      actualTasks.find((item) => item.name === updateStatus.name)
    );
    actualTasks[updatedTaskIndex] = updateStatus;
    this.setState({ taskList: actualTasks });
  };

  shuffleTaskHandler = () => {
    const shuffleArray = this.state.taskList;
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      const temp = shuffleArray[i];
      shuffleArray[i] = shuffleArray[rand];
      shuffleArray[rand] = temp;
    }
    this.setState({ taskList: shuffleArray });
  };

  deleteTask = () => {
    const updatedTaskList = this.state.taskList;
    if (updatedTaskList.length > 1) {
      updatedTaskList.pop();
      this.setState({ taskList: updatedTaskList });
    } else {
      alert(
        "This task can not be deleted.A workflow should have atleast one task!"
      );
    }
  };

  addTask = () => {
    const updatedTaskList = this.state.taskList;
    updatedTaskList.push({
      name: "Task" + (updatedTaskList.length + 1),
      status: "Pending",
    });

    this.setState({ taskList: updatedTaskList });
  };

  render() {
    return (
      <Aux>
        <div className="row">
          <div className="col-xs-4">
            <input
              className={classes.Input}
              defaultValue={this.state.workFlowName}
              // onChange={search} {this.props.location.appdata.test}
            />
          </div>
          <div
            className="col-xs-offset-3 col-xs-5"
            style={{ textAlign: "center" }}
          >
            <button
              className="btn btn-primary"
              onClick={this.shuffleTaskHandler}
            >
              <i className="fa fa-random" aria-hidden="true"></i> Shuffle
            </button>
            <button className="btn btn-danger" onClick={this.deleteTask}>
              <i className="fa fa-times" aria-hidden="true"></i> Delete
            </button>
            <button className="btn btn-success" onClick={this.addTask}>
              <i className="fa fa-plus" aria-hidden="true"></i> Add Node
            </button>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#3A5CD9", cursor: "not-allowed" }}
            >
              Save
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          {this.state.taskList.map((task, i) => {
            return (
              <WorkFlowTask
                name={task.name}
                key={task.name + i}
                status={task.status}
                click={() => this.changeStatus(task)}
              />
            );
          })}
        </div>
      </Aux>
    );
  }
}

export default WorkFLow;
