import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import style from "./style";
import ListItem from "../TaskItem/index";
import PropTypes from "prop-types";
class TaskList extends Component {
  render() {
    const { listfilter, status, onUpdateTask, handleDelTask } = this.props;
    return (
      <Grid key={status.value} item xs={12} sm={4}>
        <Box mt={2} mb={2}>
          <div>{status.label}</div>
        </Box>
        <div>
          {listfilter.map((task) => {
            return (
              <ListItem
                task={task}
                status={status}
                key={task.id}
                onUpdateTask={onUpdateTask}
                handleDelTask={handleDelTask}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}
TaskList.propTypes = {
  listfilter: PropTypes.array,
  status: PropTypes.object,
  onUpdateTask: PropTypes.func,
};
export default withStyles(style)(TaskList);
