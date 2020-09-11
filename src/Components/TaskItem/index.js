import React, { Component } from "react";
import style from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
class TaskItem extends Component {
  onUpdateTask = (task) => {
    this.props.onUpdateTask(task);
  };
  handleDelTask = (task) => {
    this.props.handleDelTask(task);
  };
  render() {
    const { task, status, classes } = this.props;
    return (
      <Card key={task.status} className={classes.item}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={8}>
              {task.title}
            </Grid>
            <Grid item xs={12} sm={4}>
              {status.label}
            </Grid>
          </Grid>
          {task.description}
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              onClick={() => this.handleDelTask(task)}
            >
              <DeleteIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="edit"
              size="small"
              onClick={() => this.onUpdateTask(task)}
            >
              <EditIcon />
            </Fab>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}
TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onUpdateTask: PropTypes.func,
};
export default withStyles(style)(TaskItem);
