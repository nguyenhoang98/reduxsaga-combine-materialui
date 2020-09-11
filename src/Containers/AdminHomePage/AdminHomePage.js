
import { withStyles } from '@material-ui/core';
import React , { Component } from 'react' ;
import style from './style' ;
class AdminHomePage extends Component{
  render(){
    return(
      <div className = 'adminhomepage'>
          <h1>AdminHomePage</h1>
      </div>
    )
  }
}
export default withStyles(style)(AdminHomePage) ;
