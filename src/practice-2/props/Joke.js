import React, { useState } from "react";

export default function Joke({ setup, punchline, upvotes, downvotes, isPun }) {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown(!isShown);
  }

  return (
    <div>
      <h3>{setup}</h3>
      {isShown && <p>{punchline}</p>}
      <p>Upvotes: {upvotes}</p>
      <p>Downvotes: {downvotes}</p>
      <p>Is pun: {isPun ? "Yes" : "No"}</p>
      <button className="show-button" onClick={toggle}>
        {isShown ? "Hide" : "Show"}
      </button>
      <hr />
    </div>
  );
}
