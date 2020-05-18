import React from "react";

const Post = (props) => {
  let {name, message, like} = props;

  return(
    <div className="post">
      <div className="author-like">
        <h2 className="author">{name}</h2>
        <div className="like">Like {like}</div>
      </div>

      <div className="person-message">
        <div className="person" style={{backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZypFeCIYbO5G67HUE_h3160iqH-xebmAMFnRhXQ_r5TVo9xg9&s'})`}}/>

        <p className="message">{message}</p>
      </div>
    </div>
  );
};

export default Post;

