import React from 'react' ;
import { withStyles } from "@material-ui/core" ;
import TextField from '@material-ui/core/TextField' ;
import style from './style' ;
import PropTypes from 'prop-types' ;
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
renderTextField.propTypes ={
  label :PropTypes.string ,
  import : PropTypes.object ,
  meta : PropTypes.object
}
export default withStyles(style)(renderTextField)
