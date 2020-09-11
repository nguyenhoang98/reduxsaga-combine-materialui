import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
class SearchBox extends Component {
  render() {
    const { classes , searchName } = this.props;

    return (
      <div className={classes.searchBox}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            type="text"
            margin="normal"
            placeholder="Search Box ..."
            onChange={this.props.handleChange}
            autoComplete="off"
            value = {searchName}
            name = 'name'
          />
        </form>
      </div>
    );
  }
}
SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};
export default withStyles(style)(SearchBox);
