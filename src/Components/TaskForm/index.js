import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import style from "./style";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modelAction from "../../Redux/Actions/Modals";
import * as taskAction from "../../Redux/Actions/Task";
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../Components/FormHelper/TextField";
import renderSelectField from "../../Components/FormHelper/Select";
import MenuItem from '@material-ui/core/MenuItem';
import validate from "./validate";

class TaskForm extends Component {
  handleOnsubmitForm = (data) => {
    const { modelActionCreator } = this.props;
    const { hidenModal } = modelActionCreator;
    const { taskActionCreator } = this.props;
    const { add_task , update_add_task } = taskActionCreator;
    const { title, description } = data;
    if(data.id === ''){
      add_task(title, description);
    }
    else{
      const { title, description , status , id } = data;
      update_add_task(title , description ,status , id ) ;
    }
    hidenModal();
  };
  render() {
    const {
      classes,
      modelActionCreator,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;
    const { hidenModal } = modelActionCreator;
    const { task } = this.props;
    console.log('task : ' , task) ;
    return (
      <form onSubmit={handleSubmit(this.handleOnsubmitForm)}>
        <Grid container>
          <Grid item sx={12} sm={12}>
            <Field
              name="title"
              component={renderTextField}
              label="Name"
              fullWidth
              type="text"
              autoFocus
              margin="dense"
              id="name"
              className={classes.textField}
              value={task.title}
            />
          </Grid>
          <Grid item sx={12} sm={12}>
            <Field
              name="description"
              component={renderTextField}
              label="Description"
              fullWidth
              type="text"
              autoFocus
              margin="dense"
              id="desc"
              className={classes.textField}
              value={task.description}
            />
          </Grid>
          {task.id !== "" && (
            <Grid item sx={12} sm={12}>
              <Field
                name="status"
                component={renderSelectField}
                label="Trạng Thái"
                autoFocus
                value={task.status}
                fullWidth
              >
                <MenuItem value={0}>REALLY</MenuItem>
                <MenuItem value={1}>IN PROGESS</MenuItem>
                <MenuItem value={2}>COMPLETED</MenuItem>
              </Field>
            </Grid>
          )}
          <Grid item sx={12} sm={12}>
            <Box
              display="flex"
              justifyContent="flex-end"
              m={1}
              p={1}
              bgcolor="background.paper"
            >
              <Box p={1}>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={hidenModal}
                >
                  Canel
                </Button>
              </Box>
              <Box p={1}>
                <Button
                  variant="outlined"
                  color="secondary"
                  type="submit"
                  disabled={invalid || submitting}
                >
                  Ok
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}
TaskForm.propTypes = {
  handleClose: PropTypes.func,
  classes: PropTypes.object,
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  taskActionCreator: PropTypes.shape({
    add_task: PropTypes.func,
  }),
};
var mapStateToProps = (state) => {
  return {
    task: state.task.editting,
    initialValues: state.task.editting,
  };
};
var mapDispatchToProps = (dispatch) => {
  return {
    modelActionCreator: bindActionCreators(modelAction, dispatch),
    taskActionCreator: bindActionCreators(taskAction, dispatch),
  };
};
const FORM_NAME = "MANAGEMENT";
const widthReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});
export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToProps),
  widthReduxForm
)(TaskForm);
