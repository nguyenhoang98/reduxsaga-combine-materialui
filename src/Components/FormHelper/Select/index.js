import React from "react";
import { withStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import style from "./style";
import PropTypes from "prop-types";
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
const renderSelectField = ({
  classes ,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} className = {classes.FormControl}>
<InputLabel htmlFor="age-native-simple">Trang Thái</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: "age",
        id: "age-native-simple",
      }}
      value = {input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);
renderFromHelper.propTypes = {
  touched : PropTypes.bool ,
  error : PropTypes.bool
}
renderSelectField.propTypes = {
  label: PropTypes.string,
  import: PropTypes.object,
  meta: PropTypes.object,
  children : PropTypes.array ,
  classes : PropTypes.object
};
export default withStyles(style)(renderSelectField);
