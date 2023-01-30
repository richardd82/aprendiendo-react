import React from 'react'

const TwitterFollowCard = ({ children, userName, name, isFollowing}) => {
    const imageSrc = `https://unavatar.io/${userName}`
    console.log(isFollowing)
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Mi Avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard