import React from "react";
import { setIsLoggedIn } from "../../common/localStorage";

import { gql } from "apollo-boost";
import { useQuery, useApolloClient } from "@apollo/react-hooks";

const GET = gql`
  query getData {
    login @client {
      username
      password
    }
  }
`;

const Timeline: React.FC<any> = (props: any) => {
  const { history } = props;
  console.log("props", props);

  const client = useApolloClient();

  const handleLogout = () => {
    // client.clearStore();
    client.resetStore();
    setIsLoggedIn(false);
    history.push("/login");
  };

  const handleSettings = () => {
    history.push("/settings");
  };

  const { data, loading, error } = useQuery(GET);

  if (loading) {
    return <h1>Loading... </h1>;
  }

  if (error) {
    return <h1> Error: {error} </h1>;
  }

  return (
    <section className="timeline-section">
      <div className="item-container">
        <div className="username">{data.login.username}</div>
      </div>
      <p className="item-container">
        <button className="logout-button" onClick={handleSettings}>
          Change Username
        </button>
      </p>

      <p className="item-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </p>
    </section>
  );
};

export default Timeline;
