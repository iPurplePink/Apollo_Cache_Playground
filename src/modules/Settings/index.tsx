import React from "react";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

import { gql } from "apollo-boost";

const GET = gql`
  query getData {
    login @client {
      username
      password
    }
  }
`;
const Settings: React.FC<any> = (props: any) => {
  console.log("props", props);
  const [username, setUsername] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const client = useApolloClient();

  const handleSave = () => {
    client.writeData({
      data: {
        login: { username, __typename: "login" }
      }
    });
    props.history.push("/timeline");
  };

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setUsername(event.target.value);
  };

  const { data, loading, error } = useQuery(GET);

  if (loading) {
    return <h1>Loading... </h1>;
  }

  if (error) {
    return <h1> Error: {error} </h1>;
  }

  return (
    <div className="login-section">
      <div className="item-container">
        <input
          className="username"
          placeholder="Enter Username"
          onChange={handleUsernameChange}
          defaultValue={data.login.username}
        />
        <input
          className="password"
          placeholder="Enter Password to Confirm"
          type="password"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="item-container">
        <button className="login-button" onClick={handleSave}>
          save username
        </button>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

export default Settings;
