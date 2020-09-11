import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import loading from "../../acssets/Image/loading_2.gif";
import style from "./style";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import * as uiAction from "../../Redux/Actions/ui";
class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    if (showLoading) {
      return (
        <div className={classes.globalbackground}>
          <div className={classes.loading}>
            <img src={loading} className={classes.img} alt="loading" />
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

var mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
var mapDispatchToProps = (dispatch, props) => {
  return {
    uiAction: bindActionCreators(uiAction, dispatch),
  };
};
// export default withStyles(style)(
//   connect(mapStateToProps, mapDispatchToProps)(GlobalLoading)
// );

export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps)
)(GlobalLoading);
