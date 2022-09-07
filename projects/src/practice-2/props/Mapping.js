import jokesData from "./jokesData";
import Joke from "./Joke";

export default function JokeMapping() {
  return (
    <>
      {jokesData.map(({ setup, punchline, upvotes, downvotes, isPun }) => (
        <Joke
          setup={setup}
          punchline={punchline}
          upvotes={upvotes}
          downvotes={downvotes}
          isPun={isPun}
        />
      ))}
    </>
  );
}
