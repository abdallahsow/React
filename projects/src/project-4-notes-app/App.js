import { useState } from "react";
import "./App.css";
import slipt from 'react-split';
import { nanoid } from 'nanoid';

export default function App() {
    const [notes, setNotes] = useState([])
    
    const createNewNote = () => {}
  
    return (
    <div className="no-notes">
      <h1>You have no notes</h1>
      <button className="first-note">Create one now</button>
    </div>
  );
}
