const style = (theme) => {
  return {
    wrapper: {
      display: "flex",
      height: "100vh",
    },
    wrapperContent: {
      width: "100%",
      padding: 20,
      marginLeft: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    wrapperContentLeft: {
      width: "100%",
      padding: 20,
      marginLeft: -240,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  };
};
export default style;
