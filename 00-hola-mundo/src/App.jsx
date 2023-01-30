import React from "react";
import "./app.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard isFollowing={true} userName={"Richardd82_dev"} >
        Ricardo Díaz
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName={"midudev"} >
        Miguel Durán
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName={"pheralb"} >
        Pablo Hernández
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing userName={"elonMusk"} >
        Elon Musk
      </TwitterFollowCard>
    </section>
  );
};

export default App;
