const drawerWidth = 240;
const style = (theme) => {
  return {
    drawerPaper: {
      width: drawerWidth,
      height: "100%",
      zIndex: 99,
      position: "relative",
    },
    menuLinkAction: {
      "&>div": {
        backgroundColor: "#ccc",
      },
    },
    menuLink: {
      textDecoration: "none",
    },
  };
};
export default style;
