import React from "react";
import { setIsLoggedIn } from "../../common/localStorage";

import { useApolloClient } from "@apollo/react-hooks";

const Login: React.FC<any> = (props: any) => {
  console.log("props", props);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const client = useApolloClient();

  const handleLogin = () => {
    if (username && password) {
      client.writeData({
        data: {
          login: { username, password, __typename: "login" }
        }
      });
      setIsLoggedIn(true);
      props.history.push("/timeline");
    }
  };

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-section">
      <div className="item-container">
        <input
          className="username"
          placeholder="Enter Username"
          onChange={handleUsernameChange}
        />
        <input
          className="password"
          placeholder="Enter Password"
          type="password"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="item-container">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
