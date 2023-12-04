import { Component } from "react";

import Header from "../Header";

import RegisterContext from "../../context/RegisterContext";

const topicsList = [
  {
    id: "ARTS_AND_CULTURE",
    displayText: "Arts and Culture",
  },
  {
    id: "CAREER_AND_BUSINESS",
    displayText: "Career and Business",
  },
  {
    id: "EDUCATION_AND_LEARNING",
    displayText: "Education and Learning",
  },
  {
    id: "FASHION_AND_BEAUTY",
    displayText: "Fashion and Learning",
  },
  {
    id: "GAMES",
    displayText: "Games",
  },
];

class Register extends Component {
  state = {
    username: "",
    topic: topicsList[0].id,
    homeTopic: "",
    showError: false,
    errorMsg: "",
    userDetails: {},
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangeTopic = (event) => {
    this.setState({ topic: event.target.value });
  };

  render() {
    const { username, topic, showError, errorMsg } = this.state;
    return (
      <RegisterContext.Consumer>
        {(value) => {
          const { updatedUserDetails } = value;

          const onSubmitForm = (event) => {
            event.preventDefault();
            const { username, topic } = this.state;
            if (username !== "") {
              const topicObj = topicsList.find((item) => item.id === topic);
              const { displayText } = topicObj;
              const obj = { username, displayText };
              updatedUserDetails(obj);
              const { history } = this.props;
              history.replace("/");
            } else {
              this.setState((prevState) => ({
                showError: !prevState.showError,
                errorMsg: "Please enter your name",
              }));
            }
          };
          return (
            <div>
              <Header />
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <div>
                <h1>Let us join</h1>
                <form onSubmit={onSubmitForm}>
                  <label htmlFor="name">NAME</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <label htmlFor="topics">TOPICS</label>
                  <select
                    id="topics"
                    value={topic}
                    onChange={this.onChangeTopic}
                  >
                    {topicsList.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit">Register Now</button>
                  {showError && <p>{errorMsg}</p>}
                </form>
              </div>
            </div>
          );
        }}
      </RegisterContext.Consumer>
    );
  }
}

export default Register;
//  {
//     /* const onClickRedirect = () => {
//     console.log("hello");

//     updatedUserDetails(userDetails);
//     const { history } = this.props;
//     history.replace("/");
//   }; */
//   }
