import React, { Component } from "react";
import clasess from "./Login.module.css";
import validator from "validator";
import classes from "./Login.module.css";

class Login extends Component {
  state = {
    email: " ",
    password: null,
    isValidEmail: true,
    isPassword: true,
  };

  isLoginHandler = () => {
    if (validator.isEmail(this.state.email)) {
      this.setState({ isValidEmail: true });
      if (this.state.password != null) {
        this.props.history.push("/WorkFlowBuilder");
      } else {
        this.setState({ isPassword: false });
      }
    } else {
      this.setState({ isValidEmail: false });
    }
  };

  emailValueHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  passwordValueHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="row">
        <div className="col-xs-4 col-xs-offset-4">
          <form className={clasess.LogInForm}>
            <h2 className={clasess.LogIn}>Login</h2>
            <div className={clasess.InputFields}>
              <input
                type="text"
                placeholder="Email"
                className={classes.Input}
                onChange={this.emailValueHandler}
                title="Email is a compulsory field!!!!"
              ></input>

              {this.state.isValidEmail === false && (
                <p className={classes.Error}>
                  Invalid Email, please try again!!!
                </p>
              )}
              <br></br>
              <input
                type="password"
                placeholder="Password"
                className={classes.Input}
                style={{ marginTop: "1em" }}
                onChange={this.passwordValueHandler}
              ></input>
              {this.state.isPassword === false && (
                <p className={classes.Error}>
                  Password can not be kept blank!!!
                </p>
              )}
              <br></br>
              <button
                type="button"
                className={clasess.Button}
                onClick={this.isLoginHandler}
              >
                Login
              </button>

              <div className={clasess.SignUp}>
                Don't have an Account? Sign Up here
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
