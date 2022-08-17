import React from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username,
      password: event.target.password,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="login_background">
          <div className="back_button">
            <button className="back" onClick={() => navigate("")}>
              <i className="fa fa-angle-left" style={{ color: "#f63" }}></i>
            </button>
            <label>Quay lại</label>
          </div>
        </div>
        <form>
          <div className="login_container">
            <div className="container_">
              <div className="input_group">
                <input
                  type="text"
                  placeholder="username"
                  username={this.state.username}
                  onChange={this.handleChange}
                />
                <div></div>
              </div>
              <div className="input_group">
                <input
                  type="password"
                  placeholder="password"
                  username={this.state.password}
                  onChange={this.handleChange}
                />
                <div></div>
              </div>
              <div className="button">
                <button type="submit">Login</button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
