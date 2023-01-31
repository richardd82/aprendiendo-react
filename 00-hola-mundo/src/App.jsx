import React from "react";
import "./app.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  {
    userName: "Richardd82_dev",
    name: "Ricardo Díaz",
    isFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Heraldo",
    isFollowing: false,
  },
  {
    userName: "elonMusk",
    name: "Elon Musk",
    isFollowing: false,
  },
];

const App = () => {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          intialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};

export default App;
