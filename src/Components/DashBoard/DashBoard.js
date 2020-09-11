import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import { compose } from "redux";
import PropTypes from "prop-types";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import { connect } from "react-redux";
import * as uiAction from "../../Redux/Actions/ui";
import { bindActionCreators } from "redux";
import classNames from "classnames";
class DashBoard extends Component {
  onToggleSideBar = () => {
    const { toggleSideBar } = this.props;
    const { actionUiCreator } = this.props;
    const { show_side_bar, hiden_side_bar } = actionUiCreator;
    if (toggleSideBar) {
      hiden_side_bar();
    } else {
      show_side_bar();
    }
  };
  toggleDrawer = () => {
    console.log("Hello");
    const { actionUiCreator } = this.props;
    const { hiden_side_bar } = actionUiCreator;
    hiden_side_bar();
  };
  render() {
    const { children, classes, toggleSideBar, ...remainProps } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header {...remainProps} onToggleSideBar={this.onToggleSideBar} />
        <div className={classes.wrapper}>
          <SideBar
            toggleSideBar={toggleSideBar}
            toggleDrawer={this.toggleDrawer}
          />
          <div
            className={classNames(classes.wrapperContent, {
              [classes.wrapperContentLeft]: toggleSideBar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
DashBoard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    toggleSideBar: state.ui.showSideBar,
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
    actionUiCreator: bindActionCreators(uiAction, dispatch),
  };
};
export default compose(
  withStyles(style),
  connect(mapStateToProps, mapdispatchToProps)
)(DashBoard);
