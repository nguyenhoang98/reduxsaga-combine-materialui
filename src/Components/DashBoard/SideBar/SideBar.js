import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import style from "./style";
import Drawer from "@material-ui/core/Drawer";
import { admin_routers } from "../../../Constants/index";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
class SideBar extends Component {
  toggleDrawer() {
    this.props.toggleDrawer();
  }
  renderList() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="nav" aria-label="main mailbox folders">
          {admin_routers.map((list) => {
            return (
              <NavLink
                to={list.path}
                exact={list.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkAction}
                key={list.path}
              >
                <ListItem button key={list.name}>
                  {list.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  }
  render() {
    const { classes, toggleSideBar } = this.props;
    return (
      <Drawer
        open={toggleSideBar}
        onClose={() => this.toggleDrawer()}
        className={classes.sidebar}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderList()}
      </Drawer>
    );
  }
}
SideBar.propTypes = {
  classes: propTypes.object,
};
export default withStyles(style)(SideBar);
