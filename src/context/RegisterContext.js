import React from "react";

const RegisterContext = React.createContext({
  userInputDetails: {},
  showUserDetails: false,
  updatedUserDetails: () => {},
});

export default RegisterContext;
