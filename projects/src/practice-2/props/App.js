import Joke from "./Joke";

const App = function () {
  return (
    <>
      <Joke
        setup="What did the fish say when it hit the wall?"
        punchline="Dam."
        upvotes={20}
        downvotes={10}
        isPun={true}
      />
      <Joke
        setup="I'm reading a book about anti-gravity..."
        punchline="It's impossible to put down."
        isPun={false}
        upvotes={10}
        downvotes={20}
      />
      <Joke
        setup="What do you call a fake noodle?"
        punchline="An Impasta."
        upvotes={10}
        downvotes={20}
        isPun={true}
      />
      <Joke
        setup="How many apples grow on a tree?"
        punchline="All of them."
        upvotes={10}
        downvotes={20}
        isPun={false}
      />
      <Joke
        setup="Want to hear a joke about paper?"
        punchline="Nevermind it's tearable."
        upvotes={18}
        downvotes={40}
        isPun={true}
      />
    </>
  );
};

export default App;
