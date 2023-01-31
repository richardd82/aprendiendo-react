import React from "react";
import { useState } from "react";

const TwitterFollowCard = ({ children, userName, intialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(intialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const imageSrc = `https://unavatar.io/${userName}`;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  // console.log(isFollowing)
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={imageSrc} alt="Mi Avatar" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
