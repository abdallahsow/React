import { useState } from "react";
import "./App.css";
// import slipt from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([]);

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: `Type here...`,
    };

    setNotes([newNote, ...notes]);
  };

  return (
    <div className="no-notes">
      <h1>You have no notes</h1>
      <button onClick={createNewNote} className="first-note">
        Create one now
      </button>
    </div>
  );
}
