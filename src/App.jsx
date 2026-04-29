import { useState, useEffect } from "react";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const newNote = {
      id: Date.now(),
      text: text,
    };

    setNotes([...notes, newNote]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function editNote(id, newText) {
    const text = newText.trim();

    if (text.length === 0) {
      setNotes(notes.filter((note) => note.id !== id));
      return;
    }

    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: text } : note)),
    );
  }

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Notes App</h1>

      <NoteInput onAdd={addNote} />

      <input
        type="text"
        placeholder="Rehercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <NotesList
        notes={filteredNotes}
        onDelete={deleteNote}
        onEdit={editNote}
      />
    </div>
  );
}

export default App;
