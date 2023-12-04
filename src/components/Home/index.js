import { Link } from "react-router-dom";

import Header from "../Header";

import RegisterContext from "../../context/RegisterContext";

const Home = () => {
  return (
    <RegisterContext.Consumer>
      {(value) => {
        const { showUserDetails, userInputDetails } = value;
        const { username, displayText } = userInputDetails;
        return (
          <div>
            {showUserDetails ? (
              <div>
                <Header />
                <h1>{`Hello ${username}`}</h1>
                <p>{`Welcome to ${displayText}`}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            ) : (
              <div>
                <Header />
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
                <Link to="/register">
                  <button type="button">Register</button>
                </Link>
              </div>
            )}
          </div>
        );
      }}
    </RegisterContext.Consumer>
  );
};

export default Home;
