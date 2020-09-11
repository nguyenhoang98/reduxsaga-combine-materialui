import React, { Component } from "react";
import "../../App.css";
import { withStyles } from "@material-ui/core";
import style from "./style";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../Commoms/Theme/index";
import { Provider } from "react-redux";
import configureStore from "../../Redux/configureStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../Components/GlobalLoading/index";
import ModelForm from "../../Components/ModelForm/ModelForm";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { admin_routers } from "../../Constants/index";
import AdminLayoutRoute from "../../Commoms/Layout/AdminLayoutRoute";
import CssBaseline from "@material-ui/core/CssBaseline";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
              <Switch>
                {admin_routers.map((value) => {
                  return (
                    <AdminLayoutRoute
                      key={value.path}
                      path={value.path}
                      component={value.component}
                      name={value.name}
                      exact={value.exact}
                    />
                  );
                })}
              </Switch>
              <ToastContainer />
              <GlobalLoading />
              <ModelForm />
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}
export default withStyles(style)(App);
