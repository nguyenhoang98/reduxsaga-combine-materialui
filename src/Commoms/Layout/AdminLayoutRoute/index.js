import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import { Route } from "react-router-dom";
import DashBoard from "../../../Components/DashBoard/DashBoard";
import PropTypes from "prop-types";
class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <DashBoard {...remainProps}>
              <YourComponent {...remainProps} />
            </DashBoard>
          );
        }}
      />
    );
  }
}
AdminLayoutRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
  name: PropTypes.string,
};
export default withStyles(style)(AdminLayoutRoute);
