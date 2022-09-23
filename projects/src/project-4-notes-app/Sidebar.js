export default function Sidebar(props) {
  const { notes, currentNote, setCurrentNoteId, newNote } = props;

  const noteElements = notes.map((note, index) => (
    <div key={notes.id}>
      <div
        className={`title ${note.id === currentNote.id ? "selected-note" : ""}`}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4>Note {index + 1}</h4>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar-header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
