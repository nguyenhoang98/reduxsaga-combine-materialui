import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Clear from "@material-ui/icons/Clear";
import Modal from "@material-ui/core/Modal";
import * as modelAction from "../../Redux/Actions/Modals";
import PropTypes from "prop-types";
class ModelForm extends Component {
  render() {
    let { classes, title, component, open, modelActionCreator } = this.props;
    const { hidenModal } = modelActionCreator;
    return (
      <Modal open={open} onClose={hidenModal}>
        <div className={classes.Modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <span className={classes.clearModal} onClick={hidenModal}>
              <Clear />
            </span>
          </div>
          <div>{component}</div>
        </div>
      </Modal>
    );
  }
}
ModelForm.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  open: PropTypes.bool,
  component: PropTypes.object,
  modelActionCreator: PropTypes.shape({
    hidenModal: PropTypes.func,
  }),
};
const mapStateToProps = (state) => {
  return {
    title: state.model.title,
    open: state.model.showModel,
    component: state.model.component,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    modelActionCreator: bindActionCreators(modelAction, dispatch),
  };
};
export default withStyles(style)(
  connect(mapStateToProps, mapDispatchToProps)(ModelForm)
);
