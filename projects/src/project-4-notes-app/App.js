import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: `Type here...`,
    };

    setNotes([newNote, ...notes]);
    setCurrentNoteId(newNote.id);
  };

  const updateNote = (text) => {
    const updatedNotes = notes.map((note) =>
      note.id === currentNoteId ? { ...note, body: text } : note
    );
  };

  const findCurrentNote = () =>
    notes.map((note) => note.id === currentNoteId) || notes[0];

  return (
    <main>
      {notes.length ? (
        <Split sizes={[30, 70]} className="split" direction="horizontal">
          <Sidebar
            notes={notes}
            newNote={createNewNote}
            currentNote={findCurrentNote}
            setCurrentNoteId={setCurrentNoteId}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button onClick={createNewNote} className="first-note">
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
