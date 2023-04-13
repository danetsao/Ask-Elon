import React from "react";

type Props = {
  tweet: any;
};

const TweetBox: React.FC<Props> = ({ tweet }) => {
  const { created_at, text, user, retweet_count, favorite_count } = tweet;

  return (
    <div className="tweet-box">
      <div className="tweet-user-info">
        <img className="tweet-user-avatar" src={user.profile_image_url} alt="" />
        <div className="tweet-user-name">{user.name}</div>
        <div className="tweet-user-screen-name">@{user.screen_name}</div>
        <div className="tweet-date">{new Date(created_at).toLocaleString()}</div>
      </div>
      <div className="tweet-text">{text}</div>
      <div className="tweet-metadata">
        <div className="tweet-retweet-count">{retweet_count} Retweets</div>
        <div className="tweet-favorite-count">{favorite_count} Likes</div>
      </div>
      <pre className="tweet-json">{JSON.stringify(tweet, null, 2)}</pre>
    </div>
  );
};

export default TweetBox;