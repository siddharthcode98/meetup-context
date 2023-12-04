import { Component } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";

import Register from "./components/Register";

import NotFound from "./components/NotFound";

import RegisterContext from "./context/RegisterContext";

import "./App.css";

class App extends Component {
  state = { userInputDetails: {}, showUserDetails: false };

  updatedUserDetails = (userDetails) => {
    console.log(userDetails);
    this.setState((prevState) => ({
      userInputDetails: { ...userDetails },
      showUserDetails: !prevState.showUserDetails,
    }));
  };

  render() {
    const { userInputDetails, showUserDetails } = this.state;
    return (
      <RegisterContext.Provider
        value={{
          userInputDetails,
          showUserDetails,
          updatedUserDetails: this.updatedUserDetails,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
          <Route component={NotFound} />
          <Redirect to="/not-found/" />
        </Switch>
      </RegisterContext.Provider>
    );
  }
}

export default App;
